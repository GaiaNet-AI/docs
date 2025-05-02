Normally AI Agents are considered as some bots that can do stuff and a bit intelligent. But in practice, most useful developer agents are super-focused specialized agents with private and highly curated knowledge. For example: the official docs of a programming language or maybe a protocol/company’s internal API reference. 

Gaia provides the three pieces which lets anyone to create such a specialist agent without much complexity. A pluggable knowledge base where you can drop chunks, a RAG-aware chat stack that speaks the OPENAI style v1/chat/completions and modular system prompts.

---

## **A Vyper Smart Contract Language Documentation Agent**

Let’s go ahead and create an agent for **Vyper smart-contract language** (a Python-flavored alternative to Solidity).  Everything you see here—directory layout, embedding commands, node config flags—translates 1-to-1 to any other doc set: Rust book chapters, Django REST API docs, an RFC archive or just any docs.

Make sure you’ve your docker running and `vector qdrant` installed by running `docker pull qdrant/qdrant`

### **Prerequisites: Tooling You Install Once**

---

**WasmEdge Runtime** – Gaia’s embedding utility ships as a lightweight WebAssembly module; WasmEdge is the execution engine that runs it natively on Linux/macOS/Windows:

```
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s
```

*Why Wasm?* Because you get a build artifact (a single .wasm file) that never needs pip install. Security teams love the deterministic binary; DevOps loves the zero-dependency story.

**Embedding Model Weights** – The model that produces your 768-dimensional sentence vectors lives on Hugging Face:

```
curl -LO https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf
```

These weights are in the **GGUF** format, the modern successor to GGML, which streams efficiently from disk and supports quantized variants for CPU-only boxes.

Let’s create two folders as `qdrant_storage` and `qdrant_snapshots` . We’ll find our snapshotted knowledge base inside `qdrant_snapshots`.

```
mkdir qdrant_storage
mkdir qdrant_snapshots

nohup docker run -d -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage:z \
    -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \
    qdrant/qdrant
```

A couple of best-practice notes:

- Map 6333 (REST/JSON) and 6334 (gRPC) if you think you’ll ever script bulk uploads or run benchmarks with the Rust/Go Qdrant clients.
- Persisting qdrant_storage on a mounted volume means your vectors survive a container restart *and* can be tar-gz’d for snapshots later.

### **Create the Collection**

We start fresh because the default Gaia sample collection uses a different dimension size.

Let’s remove if we’ve any data:

```jsx
# Clear any stale data
curl -X DELETE 'http://localhost:6333/collections/default'
```

And then run the following.

```

# Provision a 768-dimensional, cosine-distance space
curl -X PUT 'http://localhost:6333/collections/default' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "vectors": {
      "size": 768,
      "distance": "Cosine",
      "on_disk": true
    }
  }'
```

The on_disk flag is your friend when the corpus grows into the hundreds of thousands of chunks; Qdrant memory-maps the vectors and leaves RAM for your LLM.

### **Producing the Embeddings**

Lets Grab the Embedding CLI

```
curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/csv_embed/csv_embed.wasm
```

### **Prepare Your Documentation as**

**Why CSV instead of Markdown?**  I found it easier to use CSV than markdown and it’s better if you paste your each chunk into different columns and one cell per column. Fell free to use `llm_info.txt` file, if that’s what you prefer.

I’ve used [gitingest](https://gitingest.com/) to turn the vyper docs git repository into simple text digest of it’s codebase which is truly helpful for feeding a codebase/docs into LLM.

### **Generate the Vectors**

Let’s make sure the csv file/the llm_info.txt file is in the same directory and lets generate the vectors.

```
wasmedge --dir .:. \
  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
  csv_embed.wasm embedding default 768 your_docs.csv --ctx_size 8192
```

- Breakdown of flags:
    - -dir .:. gives the wasm sandbox read/write in the working directory, so it can stream in the CSV and write vectors back to Qdrant.
    - -nn-preload embedding:GGML:AUTO:... pre-loads the model once, saving ~2 s per 1,000 chunks.
    - ctx_size is the secondary token window used *inside the embedding model*, not the chat model; crank it up if your doc paragraphs are long and you see truncations in logs.

You can run the command multiple times with --start_vector_id to append new shards without collisions; Qdrant IDs are integers, so pick an offset like 100_000 if you plan quarterly doc updates.

### **Packaging and Distributing Your Knowledge Base**

A snapshot is nothing more than a **directory of JSON and Parquet files** that Qdrant can restore atomically.  Compressing it usually gives a 3-to-1 size win because vectors are highly repetitive.

```
curl -X POST 'http://localhost:6333/collections/default/snapshots'

```

Now it’s time to compress the snapshots, let’s head over to `qdrant_snapshots/default` and then compress it by running.

```jsx
tar czvf my.snapshot.tar.gz my.snapshot
```

Instead of `my.snapshot` just use the file name. Upload my.snapshot.tar.gz to huggingface, you’ll need to have an account there. Now click on new dataset and upload your knowledge base there.

---

## **Some Best Practices (Learned the Hard Way)**

1. **Chunking Strategy**
    
    *Aim for 200–500 tokens per vector.*  Too short and you flood the index with thousands of nearly identical embeddings (noise).  Too long and the retrieval step returns sprawling blocks the model never fully reads.
    
2. **System Prompt Engineering**
    
    Phrase capabilities *and* guardrails.  Example:
    
    > “You are a Vyper language assistant. If asked non-Vyper questions, politely refuse with a single-sentence apology. Cite code line numbers in every answer.”
    > 
3. **Continuous Evaluation Loop**
    
    Pipe real user queries into a spreadsheet, hand-label them “Helpful/Unhelpful,” and look for patterns: are people asking for *security best practices* more than *syntax*?  That tells you what doc sections need richer examples.
    

---

After uploading knowledge base into huggingface, it’s time to change knowledge base for our llm.
If you haven’t had the change to run your own node yet you can head over [here](https://docs.gaianet.ai/getting-started/quick-start) and start. 

If we want want to sun an specific node, so let's will head over [here](https://github.com/GaiaNet-AI/node-configs) and pick a LLM that works for me.

After installing we will need to run the following:

```jsx
gaianet config \
  --snapshot https://huggingface.co/datasets/meowy-ai/vyper-lang/resolve/main/default-845259036638694-2025-04-22-09-28-18.snapshot.tar.gz \
  --system-prompt "You are a helpful vyper lang instructor, please answer the questions"
```

Over here `--snapshot https://huggingface.co/...` is the down load link of my knowledge base which I’ve uploaded to huggingface. 

You’ll se something like the following on your terminal:

```jsx

[+] Updating the system prompt of chat model ...
    * Old system prompt: You are a helpful vyper lang instructor, please answer the questions
    * New system prompt: You are a helpful web3 instructor, please answer the questions

[+] Updating the url of snapshot ...
    * Old url: https://huggingface.co/datasets/meowy-ai/web3-knowledge-base/resolve/main/default-8461598741381726-2025-04-29-07-50-41.snapshot.tar.gz
    * New url: https://huggingface.co/datasets/meowy-ai/vyper-lang/resolve/main/default-845259036638694-2025-04-22-09-28-18.snapshot.tar.gz

✅ COMPLETED! The config.json is updated successfully.
```

Now you should go ahead and start the gaia node by using `gaianet start`. 

Now the node will use the vyper knowledge base that we’ve just updated. We’ve successfully created our documentation agent.