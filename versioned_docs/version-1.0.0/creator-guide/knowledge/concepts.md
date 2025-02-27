---
sidebar_position: 1
---

# Gaia nodes with long-term knowledge

The LLM app requires both long-term and short-term memories. Long-term memory includes factual knowledge, historical facts, background stories etc. They are best added to the context as complete chapters instead of small chunks of text to maintain the internal consistency of the knowledge.  

[RAG](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/) 
is an important technique to inject contextual knowledge into an LLM application. It improves accuracy and reduces the hallucination of LLMs.
An effective RAG application combines real-time and user-specific short-term memory (chunks) with stable long-term memory (chapters) in the prompt context. 

Since the application's long-term memory is stable (even immutable), we package it in a vector database tightly coupled with the LLM. The client app assembles the short-term memory in the prompt and is supplemented with the long-term memory on the LLM server. We call the approach "server-side RAG".

> The long context length supported by modern LLMs are especially well-suited for long-term knowledge that are best represented by chapters of text.

A Gaia node is an OpenAI
compatible LLM service that is grounded by long-term knowledge on the server side. The client application
can simply chat with it or provide realtime / short-term memory since the LLM is already aware of the 
domain or background.

> For example, if you ask ChatGPT the question What is Layer 2, the answer is that Layer 2 is a concept from the computer network. However, if you ask a blockchain person, they answer that Layer 2 is a way to scale the original Ethereum network. That's the difference between a generic LLM and knowledge-supplemented LLMs.

We will cover the external knowledge preparation and how a knowledge-supplemented LLM completes a conversation. If you have learned how a RAG application works, go to [Build a RAG application with Gaia](web-tool) to start building one.

1. Create embeddings for your own knowledge as the long-term memory.
2. Lifecycle of a user query on a knowledge-supplemented LLM.

For this solution, we will use

* a chat model like Llama-3-8B for generating responses to the user.
* a text embedding model like [nomic-embed-text](https://huggingface.co/second-state/Nomic-embed-text-v1.5-Embedding-GGUF) for creating and retrieving embeddings.
* a Vector DB like Qdrant for storing embeddings.

## Workflow for creating knowledge embeddings 

The first step is to create embeddings for our knowledge base and store the embeddings in a vector DB. 

![create-embedding](https://github.com/GaiaNet-AI/docs/assets/45785633/2ff40178-64f4-4e2e-bbd9-f12ce35186b7)

First of all, we split the long text into sections (i.e, chunks). All LLMs have a maximum context length. The model can't read the context if the text is too long.
The most used rule for a Gaia node is to put the content in one chapter together. Remember, insert a blank line between two chunks. You can also use other algorithms to chunk your text.

After chunking the document, we can convert these chunks into embeddings leveraging the embedding model. The embedding model is trained to create embeddings based on text and search for similar embeddings. We will use the latter function in the process of user query.

Additionally, we will need a vector DB to store the embeddings so that we can retrieve these embeddings quickly at any time. 

On a Gaia node, we will get a database snapshot with the embeddings to use at last. Check out how to create your embeddings using [Gaia web tool](web-tool.md), [from a plain text file](text.md), and [from a markdown file](markdown.md).

##  Lifecycle of a user query on a knowledge-supplemented LLM

Next, let's learn the lifecycle of a user query on a knowledge-supplemented LLM. We will take [a Gaia Node with Gaia knowledge](https://gaia.gaia.domains/chatbot-ui/index.html) as an example.

![user-query-rag](https://github.com/GaiaNet-AI/docs/assets/45785633/c64b85ea-65f0-43d2-8ab3-78889d21c248)

### Ask a question

when you send a question in human language to the node, the embedding model will first convert your question to embedding.

### Retrieve similar embeddings

Then, the embedding model will search all the embeddings stored in the Qdrant vector DB and retrieve the embeddings that are similar to the question embeddings.

### Response to the user query

The embedding node will return the retrieved embeddings to the chat model. The chat model will use the retrieved embeddings plus your input questions as context to answer your queries finally.

