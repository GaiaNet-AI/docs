---
sidebar_position: 6
---

# DynamicRAG

DynamicRAG is a React-based web application that implements a dynamic Retrieval-Augmented Generation (RAG) system. It allows users to input text, process it into embeddings, and perform question-answering tasks using a combination of vector search and Large Language Models.


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/dynamic-rag-gaia).

:::

## Screenshots

#### Input text based Dynamic RAG
![screencapture-localhost-3000-2024-12-24-00_55_11](https://github.com/user-attachments/assets/b9ccb3b8-590a-4080-9297-03ff79ea1d86)

#### Github Repo to Dynamic RAG
<img width="889" alt="image" src="https://github.com/user-attachments/assets/cbf14066-4a74-4621-85a6-6bcc6c5b56f5" />

## Features

- Real-time text processing and chunking
- Dynamic vector database creation using Qdrant
- Batch processing of large text inputs
- Integration with a local Gaia node
- GitHub repository analysis using GitIngest
- Progress tracking and error handling
- Clean, responsive UI using Tailwind CSS and shadcn/ui components

## Prerequisites

- Node.js (v16 or higher)
- Python (for GitIngest installation)
- A running Qdrant instance (local or remote)
- A local LLM server through Gaia running on port 8080 (Tutorial: [https://docs.gaianet.ai/node-guide/quick-start](https://docs.gaianet.ai/node-guide/quick-start))
- The `nomic-embed` embedding model (auto-downloaded in `gaianet` folder when the Gaia CLI is installed)
- The `llama 3.2` language model (auto-downloaded in `gaianet` folder when the Gaia CLI is installed. You can replace the model depending on your use-case)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/harishkotra/dynamic-rag-gaia
cd dynamic-rag
```

2. Install dependencies:
```
npm install
```

3. Install GitIngest:
```
pip install gitingest
```

4. Ensure your Qdrant server is running and accessible at http://localhost:6333
5. Ensure your Gaia node is running and accessible at http://localhost:8080 (Tutorial: [https://docs.gaianet.ai/node-guide/quick-start](https://docs.gaianet.ai/node-guide/quick-start))
6. Start the development server:
```
npm run dev
```

## Usage

1. Choose Input Mode:
    - Text Input: Paste your knowledge base text into the input textarea
    - GitHub Repository: Enter a GitHub repository URL to analyze its contents
2. Ask Questions: Enter your query in the question field.
3. Process: Click "Submit" to process your query. The system will:
    - For text input: Split the input text into manageable chunks
    - For GitHub repos: Fetch and process repository content using GitIngest
    - Create embeddings for each chunk
    - Store embeddings in a temporary Qdrant collection
    - Find relevant context using vector similarity search
    - Generate an answer using the local Gaia Node
4. View Results: The system will display the generated response based on the relevant context found.

## Technical Details
### Text Processing

- Maximum chunk size: 2000 characters
- Batch processing size: 3 chunks at a time
- Chunks are created based on natural text boundaries (paragraphs and sentences)

### Vector Database

- Uses Qdrant for vector storage and similarity search
- Creates temporary collections for each query session
- Automatically cleans up collections after use
- Uses 768-dimensional vectors for embeddings

### API Integration

- Compatible with OpenAI-style API endpoints
- Supports both embeddings and chat completion endpoints
- Uses the `nomic-embed` model for embeddings
- Uses the `llama` model for text generation
- Integrates with GitIngest for repository analysis
- NextJS API routes for command-line tool integration

### Components

- `DynamicRAG.js`: Main component implementing the RAG system
- `app/api/gitingest/route.js`: API route for GitHub repository processing
- Input handling and validation
- Progress tracking and error display
- Vector database management
- LLM integration

### Error Handling
The system includes comprehensive error handling for:

- Text processing failures
- GitHub repository fetch and analysis errors
- Embedding creation errors
- Vector database operations
- LLM query failures
- Network issues

### Dependencies

- React
- Tailwind CSS
- shadcn/ui components
- Lodash for utility functions
- Various UI components (@/components/ui/*)


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/dynamic-rag-gaia).

:::