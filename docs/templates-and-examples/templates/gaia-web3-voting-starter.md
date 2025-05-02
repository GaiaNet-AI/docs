# Gaia Web3 Voting Starter


![Gaia AI Voting](./ai-voting.gif)

A decentralized voting application built with Next.js, Hardhat, and [Gaia](https://docs.gaianet.ai/intro/).
You can create voting situation and select the choices you want to vote and vote it with the AI Agent.



## About Gaia

[Gaia](https://docs.gaianet.ai/intro/) is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents. This project uses Gaia's AI capabilities to provide an intelligent agent for blockchain voting interactions.




## Project Structure

```
gaia-web3-voting-starter/
├── packages/
│   ├── blockchain/           # Smart contracts and blockchain code
│   │   ├── contracts/        # Solidity smart contracts
│   │   ├── ignition/         # Hardhat Ignition deployment scripts
│   │   ├── scripts/          # Hardhat scripts
│   │   ├── test/             # Contract tests
│   │   └── hardhat.config.ts # Hardhat configuration
│   │
│   └── site/                 # Next.js frontend application
│       ├── app/              # Next.js app router
│       │   ├── api/          # API routes
│       │   ├── chat/         # Chat page
│       │   └── page.tsx      # Home page
│       ├── components/       # React components
│       │   ├── chat/         # Chat-related components
│       │   └── ui/           # UI components (button, card, etc.)
│       ├── ai/               # AI integration
│       │   └── tools.ts      # AI tools for blockchain interaction
│       └── public/           # Static assets
```

## Features

- **AI-Agent Powered Voting**: Interact with the blockchain through natural language commands
- **Smart Contract Factory**: Create new voting instances with customizable options and durations
- **On-Chain Voting**: Cast votes securely on the blockchain with transparent results
- **Voting Management**: View active and historical votings with detailed status information
- **Cross-Chain Compatibility**: Deploy on Linea Sepolia or any other EVM-compatible chain

## Setting Up Your Gaia Node

To use your own Gaia node with this application, follow these steps:

### Option 1: Run Your Own Node

1. **Install Gaia Node**:
   ```bash
   curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash
   ```

2. **Initialize with a Model**:
   ```bash
   # For Llama-3-Groq-8B model (recommended for this project)
   gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3-groq-8b-tool/config.json
   
   # Or choose another model from the available configurations
   # Browse options at: https://github.com/GaiaNet-AI/node-configs
   ```

3. **Start the Node**:
   ```bash
   gaianet start
   ```

4. **Update Your Application**:
   - Modify `packages/site/app/api/chat/route.ts` to point to your local node:
   ```typescript
   const GAIA_API_ENDPOINT = 'http://gaiaURL/v1';
   const GAIA_MODEL = 'Llama-3-Groq-8B-Tool';
   ```

### Option 2: Get an API Key

1. **Create an Account**:
   - Go to [https://gaianet.ai](https://gaianet.ai) and click on **Launch App**
   - Connect your MetaMask wallet

2. **Generate an API Key**:
   - Click on your profile dropdown and select **Settings**
   - Navigate to **Gaia API Keys** and click **Create API Key**
   - Give your key a name and save it securely

3. **Update Your Application**:
   - Modify `packages/site/app/api/chat/route.ts` to use your API key:
   ```typescript
   const GAIA_API_ENDPOINT = 'https://api.gaianet.ai/v1';
   const GAIA_MODEL = 'Llama';
    
    // Add your API key here
    const openai = createOpenAI({
    baseURL: GAIA_API_ENDPOINT,
    apiKey: "" // API key Here
    });

   ```

1. **Add to Environment Variables**:
   - Create or update `.env.local` in the `packages/site` directory:
    ```
    GAIA_API_KEY=your_api_key_here
    ```

### System Requirements

If running your own node, ensure your system meets these requirements or start with a small model of LLM:

| System | Minimum Requirements |
|--------|---------------------|
| OSX with Apple Silicon (M1-M4 chip) | 16GB RAM (32GB recommended) |
| Ubuntu Linux 20.04 with Nvidia CUDA 12 SDK | 8GB VRAM on GPU |
| Azure/AWS | Nvidia T4 GPU Instance |

## AI Agent Commands

The application includes an AI agent that helps users interact with the voting system through natural language commands:

### 1. Create a New Voting
```
create voting "Your voting description" options: option1, option2, option3 duration: <number>
```

Duration options:
- 1 - 1 Hour
- 2 - 1 Day
- 3 - 1 Week

### 2. View Votings
Show all votings (including ended):
```
show all votings
get all votings
list votings
```

Show only active votings:
```
show active votings
list active votings
get active votings
```

### 3. Cast a Vote
```
vote for [contract-address] option [number]
```

Example:
```
vote for 0x1234...5678 option 2
```

### 4. Additional Commands
- `help` or `commands` - Show all available commands
- `voting status` - Get a summary of active and ended votings
- `my votes` - View your voting history



### Enhancing the AI Agent with Knowledge Bases

To make your voting application's AI agent more powerful and context-aware, you can integrate Gaia's knowledge base system:

1. **Create a Voting-Specific Knowledge Base**:
   - Document common voting patterns and use cases
   - Include explanations of blockchain voting concepts
   - Add frequently asked questions about the voting process
   - Include examples of successful voting campaigns

2. **Structure Your Knowledge Base**:
   - Organize information by categories (e.g., "Creating Votes", "Casting Votes", "Viewing Results")
   - Include metadata like timestamps and tags for better searchability
   - Use markdown or plain text files for easy maintenance

3. **Import to Gaia**:
   - Use Gaia's tools to import your knowledge base
   - The system will automatically convert your content into embeddings using Qdrant
   - Configure your AI agent to reference this knowledge base

4. **Benefits of Knowledge Base Integration**:
   - **Improved Accuracy**: The agent will provide more accurate and contextually relevant responses
   - **Enhanced User Experience**: Users will receive more helpful guidance on voting processes
   - **Scalability**: As your knowledge base grows, the agent's capabilities expand without retraining
   - **Efficiency**: The agent can quickly access pre-organized information rather than processing data in real-time


### Pre-configured Knowledge Base

We've created a pre-configured knowledge base specifically for Web3 voting DApps. You can use it with your Gaia node:

1. **Knowledge Base Files**:
   - Snapshot file: [https://huggingface.co/datasets/meowy-ai/web3-knowledge-base/resolve/main/default-6695366476678026-2025-04-29-13-58-26.snapshot.tar.gz](https://huggingface.co/datasets/meowy-ai/web3-knowledge-base/resolve/main/default-6695366476678026-2025-04-29-13-58-26.snapshot.tar.gz)


2. **Configure Your Gaia Node**:
   Run the following command to configure your Gaia node with the voting knowledge base:
   ```bash
gaianet config \
  --snapshot https://huggingface.co/datasets/meowy-ai/web3-knowledge-base/resolve/main/default-8461598741381726-2025-04-29-07-50-41.snapshot.tar.gz \
  --system-prompt "You are a helpful web3 instructor, please answer the questions"
   ```

For more information on knowledge bases in Gaia, visit the [Gaia Knowledge Bases Documentation](https://docs.gaianet.ai/knowledge-bases/intro).

## Getting Started

### Prerequisites

- Node.js installed
- A wallet with some test ETH on Sepolia (You can use any L1/L2 you want)
- [Alchemy](https://www.alchemy.com/) or Infura API key 
### Setup

1. Clone the repository:
```bash
git clone git@github.com:meowyx/gaia-web3-voting-starter.git
cd gaia-web3-voting-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
```bash
# In packages/blockchain
cp .env.example .env
# Add your Alchemy API key and wallet private key
```

4. Compile and deploy contracts:
```bash
cd packages/blockchain
npx hardhat compile
npx hardhat ignition deploy ignition/modules/votingFactory.ts --network linea-testnet
```

5. Start the frontend:
```bash
cd packages/site
pnpm dev
```

## Architecture

- **Smart Contracts**: Factory pattern for deploying voting instances
- **Frontend**: Next.js with AI-powered chat interface
- **Blockchain**: Linea Sepolia testnet for deployment
- **AI Integration**: Custom tools for blockchain interaction

