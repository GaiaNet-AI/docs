---
sidebar_position: 1
---

# Intro to knowledge bases

Knowledge bases are crucial components in Gaia's context for creating effective AI agents. They serve as structured repositories of information that agents can draw upon to answer questions, make decisions, and perform tasks.

In Gaia's ecosystem, knowledge bases are important for several reasons:

- **Customization:** They allow developers to tailor their AI agents with specific domain knowledge, making them more useful for particular applications or industries.
- **Improved Accuracy:** By providing agents with curated, relevant information, knowledge bases help ensure more accurate and contextually appropriate responses.
- **Efficiency:** Agents can quickly access pre-organized information rather than having to process large amounts of unstructured data in real-time.
- **Scalability:** As the knowledge base grows, the agent's capabilities can expand without requiring retraining of the entire model.
  
To leverage knowledge bases in creating AI agents using Gaia:

- **Create a Knowledge Base:** Gaia supports multiple formats for creating knowledge bases, including plain text files, markdown files, PDF documents, CSV files with source/summary pairs, and even web URLs. This flexibility allows you to use the most convenient format for your data.
- **Organize Information:** Structure your knowledge base logically, focusing on the key information your agent will need to access.
- **Import to Gaia:** Use Gaia's tools to import your knowledge base into the system. The platform likely provides interfaces or APIs for this purpose.
- **Configure Agent:** When setting up your AI agent in Gaia, specify which knowledge base(s) it should use as a reference.
- **Test and Refine:** Interact with your agent, observe its performance, and iteratively refine your knowledge base to improve outcomes.
- **Update Regularly:** Keep your knowledge base current by adding new information or updating existing entries as needed.

### Knowledge Base Format

Gaia employs a specific format for knowledge bases to optimize performance and integration with its AI agents. While the exact details may vary, here are some key aspects:

- **Structured Data:** Knowledge bases in Gaia are likely organized in a structured format that allows for efficient indexing and retrieval.
- **Metadata:** Each entry in the knowledge base may include metadata such as timestamps, categories, or tags to enhance searchability.

### Vector Database Integration

Gaia utilizes Qdrant as its default vector database to enhance the capabilities of its knowledge bases:

- **Qdrant Integration:** [Qdrant](https://qdrant.tech/) is a high-performance, open-source vector database optimized for similarity search and machine learning applications.
- **Embedding Storage:** Text from knowledge bases is converted into high-dimensional vectors (embeddings) and efficiently stored in Qdrant.
- **Fast Similarity Search:** Qdrant enables rapid similarity searches, allowing AI agents to quickly find the most relevant information from the knowledge base.
- **Scalability:** Qdrant is designed to handle large-scale vector search problems, supporting extensive knowledge bases with millions of entries.
- **Flexible Filtering:** Qdrant allows for complex filtering during search operations, enabling more precise information retrieval based on metadata or other attributes.
- **CRUD Operations:** Gaia can leverage Qdrant's support for real-time updates, allowing for dynamic modifications to the knowledge base without significant performance impact.
- **Cloud-Native Architecture:** Qdrant's design aligns well with cloud environments, facilitating easy scaling and deployment of Gaia's knowledge base system.

By using Qdrant, Gaia provides a robust and efficient vector search capability, enabling AI agents to quickly access and utilize relevant information from large and complex knowledge bases.

### Leveraging the System

To make the most of Gaia's knowledge base and vector database system:

- **Optimize Content:** Structure your knowledge base entries to align with Gaia's preferred format for best performance.
- **Use Appropriate Queries:** When designing your AI agent, formulate queries that take advantage of the vector search capabilities.
- **Regular Updates:** Keep your knowledge base current, as the vector database can be used to update embeddings for new or changed content.
- **Performance Monitoring:** Pay attention to retrieval speed and accuracy, adjusting your knowledge base structure if needed.

By understanding and effectively using Gaia's specific knowledge base format and vector database system, you can create more powerful and efficient AI agents that leverage information retrieval capabilities to their fullest extent.