---
sidebar_position: 3
---

# Knowledge base from a plain text file

In this section, we will discuss how to create a vector collection snapshot from a plain text file. The 
snapshot file can then be [loaded by a Gaia node as its knowledge base](../../node-guide/customize#select-a-knowledge-base).

The text file is segmented into multiple chunks by blank lines. [See an example](https://huggingface.co/datasets/gaianet/paris/raw/main/paris_chunks.txt). Each chunk is turned into a vector, and when 
retrieved, added to the prompt context for the LLM.

## Prerequisites

Install the WasmEdge Runtime, the cross-platform LLM runtime.

```
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s
```

Download an embedding model.

```
curl -LO https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf
```

The embedding model is a special kind of LLM that turns sentences into vectors. The vectors can then be stored in a vector database and searched later. When the sentences are from a body of text that represents a knowledge domain, that vector database becomes our RAG knowledge base. 

## Start a vector database

By default, we use Qdrant as the vector database. You can start a Qdrant instance 
by [starting a Gaia node with a knowledge snapshot](../../node-guide/quick-start.md).

:::note
Or, you can start a Qdrant server using Docker. The following command starts it in the background.

```
mkdir qdrant_storage
mkdir qdrant_snapshots

nohup docker run -d -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage:z \
    -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \
    qdrant/qdrant
```
:::

## Create the vector collection snapshot

Delete the default collection if it exists.

```
curl -X DELETE 'http://localhost:6333/collections/default'
```

Create a new collection called default. Notice that it is 768 dimensions. That is the output vector size of the embedding model `nomic-embed-text-v1.5`. If you are using a different embedding model, you should use a dimension that fits the model.

```
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

Download a program to chunk a document and create embeddings.

```
curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/paragraph_embed/paragraph_embed.wasm
```

It chunks the document based on empty lines. So, you MUST prepare your source document this way -- segment the document into sections of around 200 words with empty lines. You can check out the [Rust source code here](https://github.com/GaiaNet-AI/embedding-tools/tree/main/paragraph_embed) and modify it if you need to use a different chunking strategy.

> The `paragraph_embed.wasm` program would NOT break up code listings even if there are empty lines with in the listing.

Next, you can run the program by passing a collection name, vector dimension, and the source document. Make sure that Qdrant is running on your local machine. The model is preloaded under the name embedding. The wasm app then uses the embedding model to create the 768-dimension vectors from [paris_chunks.txt](https://huggingface.co/datasets/gaianet/paris/raw/main/paris_chunks.txt) and saves them into the default collection.

```
curl -LO https://huggingface.co/datasets/gaianet/paris/raw/main/paris_chunks.txt

wasmedge --dir .:. \
  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
  paragraph_embed.wasm embedding default 768 paris_chunks.txt -c 8192
```

### Options

You can pass the following options to the program.

* Using `-m` or `--maximum_context_length` to specify a context length in the CLI argument. That is to truncate and warn for each text segment that goes above the context length.
* Using `-s` or `--start_vector_id` to specify the start vector ID in the CLI argument. This will allow us to run this app multiple times on multiple documents on the same vector collection.
* Using `-c` or `--ctx_size` to specify the context size of the input. This defaults to 512.

Example: the above example but to append the London guide to the end of an existing collection starting from index 42.

```
wasmedge --dir .:. \
  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
   paragraph_embed.wasm embedding default 768 london.txt -c 8192 -s 42
```

## Create a vector snapshot

You can create a snapshot of the collection, which can be shared and loaded into a different Qdrant database. You can find the snapshot file in the `qdrant_snapshots` directory, or the `~/gaianet/qdrant/snapshots` directory in the Gaia node.

```
curl -X POST 'http://localhost:6333/collections/default/snapshots'
```

We also recommend you to compress the snapshot file.

```
tar czvf my.snapshot.tar.gz my.snapshot
```

Finally, upload the `my.snapshot.tar.gz` file to Huggingface so that the [Gaia node can download and use it](../../node-guide/customize#select-a-knowledge-base).

## Next steps

* [Start](../../node-guide/quick-start.md) a new Gaia node
* [Customize](../../node-guide/customize.md) the Gaia node

Have fun!
