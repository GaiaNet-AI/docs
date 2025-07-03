---
sidebar_position: 4
---

# Token Generator on Celo

This project demonstrates how to auto create and deploy ERC20 tokens on the Celo blockchain using ContractKit. It includes an AI-powered name generator (using Gaia's Public Node running Llama 3.2 8B parameter model) and automatic deployment scripts.

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/celo-token-agent).

:::

## Prerequisites

- Node.js v20.x +
- A wallet with some test tokens (we'll help you get these!)

## Getting Started

1. Clone this repository
```bash
git clone https://github.com/harishkotra/celo-token-agent
cd celo-token-agent
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file:
```env
PRIVATE_KEY=your_private_key
GAIA_API_KEY=your_gaia_api_key
```

## Getting Test Tokens

Before deploying your token, you'll need some test tokens:

1. Visit the [Celo Faucet](https://faucet.celo.org/alfajores)
2. Connect your wallet or paste your account address
3. Click to receive:
   - A-CELO (for gas fees)
   - cUSD (optional)

The faucet will send you test tokens that you can use for deployment.

## How It Works

### ContractKit Integration

This project uses Celo's ContractKit to interact with the blockchain. Here's what each part does:

- `tokenGenerator.js`: Creates unique token names using AI (using Gaia's Public Node running Llama 3.2 8B) or falls back to random generation
- `tokenDeployer.js`: Handles the smart contract deployment using ContractKit
- `MemeToken.sol`: The ERC20 token contract built with OpenZeppelin

Key ContractKit features we use:

```javascript
// Initialize ContractKit
const web3 = new Web3(rpcUrl);
const kit = newKitFromWeb3(web3);

// Add your account
kit.addAccount(privateKey);

// Deploy using A-CELO for gas
const tx = await deploy.send({
    from: defaultAccount,
    gas
});
```

### Smart Contract

Our token is a standard ERC20 token with:
- Custom name and symbol
- Initial supply set at deployment
- Standard transfer and approval functions

## Deployment

1. Compile the contract:
```bash
npx hardhat compile
```

2. Deploy your token:
```bash
node deploy.js
```

The script will:
1. Generate a token name
2. Check your balance
3. Deploy the contract
4. Provide you with the contract address and transaction details

## Understanding the Code

The project uses three main components:

1. **Token Generation**
   - Generates creative token names
   - Uses AI with fallback to random generation
   - Configures initial token supply

2. **Contract Deployment**
   - Uses ContractKit to interact with Celo
   - Handles gas estimation and transaction monitoring
   - Provides deployment status updates

3. **Smart Contract**
   - Standard ERC20 implementation
   - Built with OpenZeppelin for security
   - Deployable to Celo's Alfajores testnet

### Example Responses

```
AI generated token: { name: "Satoshi's Catnip", symbol: 'SCP' }
Reading artifacts from: /Users/shk/experiments/onchainkit-gaia/artifacts/contracts/MemeToken.sol/MemeToken.json
Deploying from account: 0xbDe71618Ef4Da437b0406DA72C16E80b08d6cD45
Account balance:
A-CELO: 10.353296994614 A-CELO
Sending deployment transaction...
Transaction sent! Hash: 0xd5b17d8ce38ddf50ca7366cf658b3d24d6d9a1d0e3bce6e50b870bd50e961792
Deployment confirmed in block: 35794429
Token deployed successfully!
{
  name: "Satoshi's Catnip",
  symbol: 'SCP',
  address: '0x0563109c80733Ea484F86b653262ecA50b8a06d6',
  transactionHash: '0xd5b17d8ce38ddf50ca7366cf658b3d24d6d9a1d0e3bce6e50b870bd50e961792',
  explorer: 'https://alfajores.celoscan.io/address/0x0563109c80733Ea484F86b653262ecA50b8a06d6'
}
```

```
AI generated token: { name: 'LolToken', symbol: 'LOL' }
Reading artifacts from: /Users/shk/experiments/onchainkit-gaia/artifacts/contracts/MemeToken.sol/MemeToken.json
Deploying from account: 0xbDe71618Ef4Da437b0406DA72C16E80b08d6cD45
Account balance:
A-CELO: 10.337778442114 A-CELO
Sending deployment transaction...
Transaction sent! Hash: 0xfe83c066173362374b1c6a420c2fdc37f7fd4f923bd3d8a3b94e384988cbde13
Deployment confirmed in block: 35797227
Token deployed successfully!
{
  name: 'LolToken',
  symbol: 'LOL',
  address: '0x47442330f26B58D7C1b7D13ed20fE1244aE58Dbe',
  transactionHash: '0xfe83c066173362374b1c6a420c2fdc37f7fd4f923bd3d8a3b94e384988cbde13',
  explorer: 'https://alfajores.celoscan.io/address/0x47442330f26B58D7C1b7D13ed20fE1244aE58Dbe'
}
```

## Need Help?

- For Celo-specific questions: [Celo Docs](https://docs.celo.org/)
- For ContractKit details: [ContractKit Documentation](https://docs.celo.org/developer/contractkit)
- Read a detailed blog article about this agent [here](https://hackmd.io/@harishatgaia/celo-token-agent).
- [Gaia's Public Nodes](https://docs.gaianet.ai/user-guide/nodes/)

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/celo-token-agent).

:::