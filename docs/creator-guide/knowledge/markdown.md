---
sidebar_position: 4
---

# Knowledge base from a markdown file

In this section, we will discuss how to create a vector collection snapshot from a markdown file. The 
snapshot file can then be loaded by a GaiaNet node as its knowledge base. 
You will have the option to create a vector for each markdown section.

## Prerequisites

Install the WasmEdge Runtime, the cross-platform LLM runtime.

```
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- --plugins wasi_nn-ggml
```

Download a chat model and an embedding model.

```
curl -LO https://huggingface.co/second-state/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5-f16.gguf
```

The embedding model is a special kind of LLM that turns sentences into vectors. The vectors can then be stored in a vector database and searched later. When the sentences are from a body of text that represents a knowledge domain, that vector database becomes our RAG knowledge base. 

## Start a vector database

By default, we use Qdrant as the vector database. You can start a Qdrant instance on your server using Docker. The following command starts it in the background.

```
mkdir qdrant_storage
mkdir qdrant_snapshots

nohup docker run -d -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage:z \
    -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \
    qdrant/qdrant
```

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
curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/markdown_embed/markdown_embed.wasm
```

It chunks the document based on markdown sections. You can check out the [Rust source code](https://github.com/GaiaNet-AI/embedding-tools/tree/main/markdown_embed) here and modify it if you need to use a different chunking strategy.

Next, you can run the program by passing a collection name, vector dimension, and the source document. You can pass in the desired markdown heading level for chunking using the `--heading_level` option. Make sure that Qdrant is running on your local machine. The model is preloaded under the name embedding. The wasm app then uses the embedding model to create the 768-dimension vectors from `paris.md` and saves them into the default collection.

```
curl -LO https://huggingface.co/datasets/gaianet/paris/raw/main/paris.md

wasmedge --dir .:. \
  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5-f16.gguf \
  markdown_embed.wasm embedding default 768 paris.md --heading_level 1
```

You can create a snapshot of the collection, which can be shared and loaded into a different Qdrant database. You can find the snapshot file in the `qdrant_snapshots` directory.

```
curl -X POST 'http://localhost:6333/collections/default/snapshots'
```

We also recommend you to compress the snapshot file for GaiaNet node use.

```
tar czvf my.snapshot.tar.gz my.snapshot
```

Finally, upload the `my.snapshot.tar.gz` file to Huggingface so that the GaiaNet node can download and use it.

## Next steps

* [Start](../../node-guide/quick-start) a new GaiaNet node
* [Customize](../../node-guide/customize) the GaiaNet node

Have fun!
