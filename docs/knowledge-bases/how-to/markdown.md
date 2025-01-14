---
sidebar_position: 4
---

# Knowledge base from a markdown file

In this section, we will discuss how to create a vector collection snapshot from a markdown file. The snapshot file can then be [loaded by a Gaia node as its knowledge base](../../getting-started/customize#select-a-knowledge-base).

The markdown file is segmented into multiple sections by headings. [See an example](https://huggingface.co/datasets/gaianet/paris/raw/main/paris.md). Each section is turned into a vector, and when retrieved, added to the prompt context for the LLM.

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
by [starting a Gaia node with a knowledge snapshot](../../getting-started/quick-start).

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

Download a program to segment the markdown document and create embeddings.

```
curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/markdown_embed/markdown_embed.wasm
```

It chunks the document based on markdown sections. You can check out the [Rust source code](https://github.com/GaiaNet-AI/embedding-tools/tree/main/markdown_embed) here and modify it if you need to use a different chunking strategy.

Next, you can run the program by passing a collection name, vector dimension, and the source document. You can pass in the desired markdown heading level for chunking using the `--heading_level` option. The `--ctx_size` option matches the embedding model's context window size, which in this case is 8192 tokens allowing it to process long sections of text. Make sure that Qdrant is running on your local machine. The model is preloaded under the name embedding. The wasm app then uses the embedding model to create the 768-dimension vectors from `paris.md` and saves them into the default collection.

```
curl -LO https://huggingface.co/datasets/gaianet/paris/raw/main/paris.md

wasmedge --dir .:. \
  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
  markdown_embed.wasm embedding default 768 paris.md --heading_level 1 --ctx_size 8192
```

### Options

You can pass the following options to the program.

* Using `-c` or `--ctx_size` to specify the context size of the input. This defaults to 512.
* Using `-l` or `--heading_level` to specify the markdown heading level for each vector. This defaults to 1.
* Using `-m` or `--maximum_context_length` to specify a context length in the CLI argument. That is to truncate and warn for each text segment that goes above the context length.
* Using `-s` or `--start_vector_id` to specify the start vector ID in the CLI argument. This will allow us to run this app multiple times on multiple documents on the same vector collection.

Example: the above example but to append the London guide to the end of an existing collection starting from index 42.

```
wasmedge --dir .:. \
  --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
   markdown_embed.wasm embedding default 768 london.md -c 8192 -l 1 -s 42
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

Finally, upload the `my.snapshot.tar.gz` file to Huggingface so that the [Gaia node can download and use it](../../getting-started/customize#select-a-knowledge-base).

## Video Guide

<iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://www.youtube.com/embed/vjIVfrAjqEw?si=T5i-q8xcygMo7ZVl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Next steps

* [Start](../../getting-started/quick-start) a new Gaia node
* [Customize](../../getting-started/customize) the Gaia node