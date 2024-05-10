---
sidebar_position: 1
---

# What is a RAG-based LLM application

Retrieval-augmented generation (RAG) is a way to solve the hallucinations of the Large Language Model (LLM) by attaching external data sources to the model. The RAG way will enhance the accuracy and reliability of LLMs with facts retrieved from external knowledge. That's why a GaiaNet node is RAG based LLM application.

For example, if you ask ChatGPT the question What is Layer 2, the answer is that Layer 2 is a concept from the computer network. However, if you ask a blockchain person, he answers that Layer 2 is a way to scale the original Ethereum network. That's the difference between the original model and the model with RAG.

We will cover the external knowledge preparation and how a RAG-based application completes a conversation.

1. Create embeddings for your own knowledge
2. Lifecycle of a user query on a RAG-based LLM application

To build a RAG-based LLM application, we will use a chat model like Llama-3-8B for generating response to the user, a text embedding model like all-miniLM-V2 for creating and retrieving embeddings, and a Vector DB like Qdrant for storing embeddings. 

## Workflow for creating embeddings 

The first step is to create embeddings for our knowledge base and store the embeddings in a vector DB. 

![create-embedding](https://github.com/GaiaNet-AI/docs/assets/45785633/2ff40178-64f4-4e2e-bbd9-f12ce35186b7)


First of all, we split the long text into small paragraphs (ie, chunks). All LLMs have a maximum context length. The model can't read the context if the text is too long.

The most used rule for a GaiaNet node is to put the content in one chapter together. Remember, insert a blank line between two chunks. You can also use other algorithms to chunk your text.

After chunking the document, we can convert these chunks to embeddings leveraging the embedding model. The embedding model is trained to create embeddings based on text and search for similar embeddings. We will use the latter function in the process of user query.


Additionally, we will also need a vector DB to store the embeddings so that we can retrieve these embeddings quickly at any time. 

In Gaianet, we will get a database snapshot with the embeddings to use at last. Check out this article (coming soon) to see how to create your embeddings using the tool provided by Gaianet. I will also explain what kind of roles the three elements play next.

##  Lifecycle of a user query on a RAG-based LLM application

Next, let's learn the lifecycle of a user query on a RAG-based LLM application. We will take the [a Gaianet Node with Gaianet knowledge](https://knowledge.gaianet.network/chatbot-ui/index.html) as an example. If you want to build your own RAG node, follow this article (coming soon).

![user-query-rag](https://github.com/GaiaNet-AI/docs/assets/45785633/c64b85ea-65f0-43d2-8ab3-78889d21c248)

### Ask a question

when you send a question in human language to the node, the embedding model will first convert your question to embedding.

### Retrieve similar embeddings

Then, the embedding model will search all the embeddings stored in the Qdrant vector DB and retrieve the embeddings similar to the question embeddings.

### Response to the user query

The embedding node will return the retrieved embeddings to the chat model. The chat model will use the retrieved embeddings plus your input questions as context to answer your queries finally.

That's how a RAG-based application works.










