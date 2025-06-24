---
sidebar_position: 5
---

# Token Generator on Base Chain

Generate and deploy meme tokens automatically using Gaia's AI Agent for creative naming and tokenomics! Built for Base Sepolia testnet, but easily adaptable to other networks.


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-meme-coin-generator).

:::

## What does it do?

This tool automates the entire process of creating a meme token:
- Uses Gaia's AI node (https://llama3b.gaia.domains/v1) to generate creative token names and themes
- Automatically creates tokenomics with safe defaults
- Deploys a secure, limit-based token contract
- Handles all the complex blockchain interactions

## Features

- 🤖 AI-powered name generation
- 📊 Automatic tokenomics calculation
- 🔒 Built-in safety features:
  - Maximum transaction limits
  - Maximum wallet limits
  - Excludable addresses for CEX/DEX
- 📝 Full deployment records
- 🔍 Automatic contract verification links

## Quick Start

1. Clone the repo:
```bash
git clone https://github.com/harishkotra/gaia-meme-coin-generator
cd gaia-meme-coin-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
GAIA_URL=your_gaia_url
GAIA_MODEL=your_model_name
BASE_NODE_URL=your_base_sepolia_rpc_url
PRIVATE_KEY=your_wallet_private_key
```

4. Run the generator:
```bash
npm start
```

## Use Cases

1. **Token Launch Platforms**
   - Quickly generate and deploy tokens for new projects
   - Automate the token creation process
   - Create themed token collections

2. **Community Tokens**
   - Deploy tokens for online communities
   - Create fan tokens with custom themes
   - Launch social tokens quickly

3. **Educational Purposes**
   - Learn about token deployment
   - Understand tokenomics
   - Practice with testnet deployments

4. **Marketing Campaigns**
   - Create themed tokens for promotions
   - Launch event-specific tokens
   - Generate buzz with creative names

## Security Features

Our generated tokens come with built-in protections:
- Anti-whale mechanics
- Transaction limits
- Wallet limits
- Owner controls for DEX/CEX exclusions

## Contract Details

The deployed token includes:
- ERC20 standard compliance
- Ownership controls
- Limit system for transactions
- Wallet amount restrictions
- Exclusion system for special addresses

## Disclaimer

This is a tool for testnet experimentation. Always:
- Test thoroughly before mainnet use
- Review generated contracts
- Verify tokenomics match your needs
- Consider regulatory compliance

### Example Output
```
    Initializing agent...
    Initializing MemeCoin Agent...
    Deployer address: 0xb.............................cD45
    Successfully connected to Gaia node
    Creating meme coin...
    Generating coin details...
    Generated coin details: {
        "name": "AstroPup",
        "symbol": "APU",
        "description": "Pioneering a new era of canine space travel"
    }

    Generating tokenomics...
    Raw tokenomics response: {"total_supply": 500000000, "initial_liquidity_percent": 75, "transaction_limit_percent": 1, "max_wallet_percent": 2}
    Generated tokenomics: {
        "total_supply": 500000000,
        "initial_liquidity_percent": 75,
        "transaction_limit_percent": 1,
        "max_wallet_percent": 2
    }

    Deploying contract...
    Compiling contract...
    Deploying contract...
    Waiting for deployment confirmation...

    Meme Coin Created Successfully!
    ==================================================
    Name: AstroPup
    Symbol: APU
    Description: Pioneering a new era of canine space travel
    Contract Address: 0x41B20e82DBFDe8557363Ca0B7C232C7288EA3Aae
    Transaction Hash: 0x86c0fd39683b8950d543d647294d8c0a2761cab8b7ab50f12cfd908a595e337e
    Block Number: 18332172

    Tokenomics:
    total_supply: 500000000
    initial_liquidity_percent: 75
    transaction_limit_percent: 1
    max_wallet_percent: 2
    Deployment details saved to deployment_details.json

    Verify your contract on Base Sepolia Explorer:
    https://sepolia.basescan.org/address/0x41B20e82DBFDe8557363Ca0B7C232C7288EA3Aae
```


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-meme-coin-generator).

:::