---
sidebar_position: 6
---

# Supavec Integration

A powerful document question-answering system that combines Supavec's RAG capabilities with Gaia's language understanding. This system enables intelligent conversations with your documents through semantic search and natural language processing.

![image](https://github.com/user-attachments/assets/d3069ce5-a8eb-4cc5-90b0-1ec926ca9c55)
![image](https://github.com/user-attachments/assets/6c9075f2-784b-4da8-9938-15cbb792b81c)


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-supavec).

:::

## Project Structure

The project is divided into two main parts:
1. **Backend**: Handles file uploads, text uploads, and communication with the Supavec and Gaia APIs.
2. **Frontend**: Provides a user interface for uploading files, listing uploaded files, and interacting with the chat interface.

## Key Components
- Frontend Layer: React application with real-time updates and file management
- Backend API: Express.js server handling request orchestration
- Document Processing: Supavec API for document chunking and embedding
- Language Model: Gaia API for contextual question answering
- Data Flow: Bidirectional communication with optimized response streaming

### API Endpoints

- `POST /api/upload`: Uploads a file to Supavec.
- `POST /api/upload-text`: Uploads text content to Supavec.
- `GET /api/files`: Retrieves a list of uploaded files.
- `POST /api/search`: Searches embeddings based on a query and file IDs.
- `POST /api/ask`: Asks a question about documents using Gaia.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Get your Supavec API key from the [dashboard](https://www.supavec.com/)
- Run your own local node using [Gaia](https://docs.gaianet.ai/node-guide/quick-start/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/gaia-supavec.git
   cd gaia-supavec
   ```
2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```
3. Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Project

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ````
2. Start the frontend development server:
   ```sh
   cd ../frontend
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000` to access the application.

### Usage
1. *Upload Documents:* Use the file upload interface to upload PDF or text files.
2. *List Files:* View the list of uploaded files.
3. *Ask Questions:* Select files and ask questions about their content using the chat interface.

## Resources

- [Supavec](https://www.supavec.com/) team for the RAG infrastructure (@supavec on [github](https://github.com/taishikato/supavec))
- [Gaia](https://www.gaianet.ai/) for the simple infra to launch local LLMs or use Public nodes.


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-supavec).

:::