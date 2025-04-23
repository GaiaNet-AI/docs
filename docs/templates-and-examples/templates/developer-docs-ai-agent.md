# Developer Docs Based Agent

A guide to creating an AI agent specialized in developer documentation using Gaia's knowledge base system.

## Example: Vyper Language Documentation Agent

This template uses Vyper language documentation as an example, but the same process can be applied to any developer documentation.

### Pre-configured Knowledge Base

We've created a pre-configured knowledge base for Vyper language documentation:

- Snapshot file: [https://huggingface.co/datasets/meowy-ai/vyper-lang/resolve/main/default-845259036638694-2025-04-22-09-28-18.snapshot.tar.gz](https://huggingface.co/datasets/meowy-ai/vyper-lang/resolve/main/default-845259036638694-2025-04-22-09-28-18.snapshot.tar.gz)

To configure your Gaia node with the Vyper documentation knowledge base:
```bash
gaianet config \
  --snapshot https://huggingface.co/datasets/meowy-ai/vyper-lang/resolve/main/default-845259036638694-2025-04-22-09-28-18.snapshot.tar.gz \
  --system-prompt "You are a helpful vyper lang instructor, please answer the questions"
```

## Step-by-Step Guide to Create Your Own Documentation Agent

### Prerequisites

1. **Install the WasmEdge Runtime**:
   ```bash
   curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s
   ```

2. **Download the Embedding Model**:
   ```bash
   curl -LO https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf
   ```

### Setting Up the Vector Database

1. **Start Qdrant** (Choose one method):

   Method 1: Using Gaia Node
   - Start your Gaia node with a knowledge snapshot

   Method 2: Using Docker
   ```bash
   mkdir qdrant_storage
   mkdir qdrant_snapshots

   nohup docker run -d -p 6333:6333 -p 6334:6334 \
       -v $(pwd)/qdrant_storage:/qdrant/storage:z \
       -v $(pwd)/qdrant_snapshots:/qdrant/snapshots:z \
       qdrant/qdrant
   ```

2. **Create Vector Collection**:
   ```bash
   # Delete existing default collection
   curl -X DELETE 'http://localhost:6333/collections/default'

   # Create new collection
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

### Creating Embeddings

1. **Download the Embedding Tool**:
   ```bash
   curl -LO https://github.com/GaiaNet-AI/embedding-tools/raw/main/csv_embed/csv_embed.wasm
   ```

2. **Prepare Your Documentation**:
   - For codebases: Use [Gitingest](https://gitingest.com/) to convert any Git repository into a simple csv digest
   - For documentation: Convert your markdown files into CSV format
   - The CSV should have two columns:
     - First column: Long-form source text (e.g., documentation content)
     - Second column: Search-friendly summary or questions that can be answered by the source text
   - Example CSV structure:
     ```csv
     source,summary
     "Long documentation content here...","What is X? How to use Y? Examples of Z"
     ```

3. **Using Gitingest**:
   - Visit [https://gitingest.com/](https://gitingest.com/)
   - Enter your repository URL (replace 'hub' with 'ingest' in GitHub URLs)
   - Configure file size limits (default: 50kb)
   - Download the generated markdown
   - Split the markdown into logical sections
   - Create summaries or questions for each section
   - Format into the two-column CSV structure

4. **Generate Embeddings**:
   ```bash
   wasmedge --dir .:. \
     --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
     csv_embed.wasm embedding default 768 your_docs.csv --ctx_size 8192
   ```

   Available options:
   - `-c` or `--ctx_size`: Specify the context size (default: 512)
   - `-m` or `--maximum_context_length`: Set maximum context length to truncate long text
   - `-s` or `--start_vector_id`: Specify starting vector ID for appending to existing collection

   Example with options:
   ```bash
   wasmedge --dir .:. \
     --nn-preload embedding:GGML:AUTO:nomic-embed-text-v1.5.f16.gguf \
     csv_embed.wasm embedding default 768 your_docs.csv -c 8192 -m 1000 -s 42
   ```

### Creating and Sharing the Knowledge Base

1. **Create a Snapshot**:
   ```bash
   curl -X POST 'http://localhost:6333/collections/default/snapshots'
   ```

2. **Compress the Snapshot**:
   ```bash
   tar czvf my.snapshot.tar.gz my.snapshot
   ```

3. **Share Your Knowledge Base**:
   - Upload the compressed snapshot to a hosting service (e.g., Hugging Face)
   - Share the link with others who want to use your documentation agent

### Best Practices

1. **Documentation Preparation**:
   - Break down documentation into meaningful chunks
   - Include code examples where relevant
   - Maintain consistent formatting
   - Include metadata like version numbers and dates

2. **System Prompt Design**:
   - Be specific about the agent's role
   - Include guidelines for handling different types of questions
   - Set expectations for response format
   - Define boundaries for the agent's knowledge

3. **Testing and Refinement**:
   - Test the agent with various types of questions
   - Gather feedback from users
   - Continuously update the knowledge base
   - Refine the system prompt based on performance

4. **Performance Optimization**:
   - Monitor response accuracy
   - Track common user queries
   - Update documentation chunks based on usage patterns
   - Consider adding more specific examples for frequently asked topics



## Resources

- [Gaia Documentation](https://docs.gaianet.ai/intro/)
- [Vyper Documentation](https://docs.vyperlang.org/) 