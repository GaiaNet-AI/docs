---
sidebar_position: 7
---

# Zerion Integration

A powerful AI-driven crypto assistant powered by [Gaia AI](https://docs.gaianet.ai/intro) and [Zerion API](https://developers.zerion.io/reference/intro/getting-started). This project showcases how AI can interact with Web3 APIs to provide real-time portfolio insights.


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-zerion-demo).

:::


## 🌟 Features
- 🤖 **AI-Powered Crypto Assistant** – Uses **Gaia AI** to interpret queries and fetch wallet balances.
- 💰 **Real-Time Portfolio Data** – Retrieves live wallet data via **Zerion API**.
- ⚡ **Smart Function Calling** – AI decides when to fetch data instead of blindly calling an API.
- 🚀 **Extensible Template** – Can be expanded to track transactions, DeFi holdings, or AI-powered investment insights.

## 📌 Why Not Just Call the API Directly?  

Unlike traditional API calls, this project leverages **AI-driven agent behavior**:

1. **Natural Language Understanding** – No need to manually enter API parameters. Just chat with the AI.

2. **Smart Data Retrieval** – AI determines if and when to fetch portfolio data, preventing unnecessary API calls.

3. **Scalability** – This approach can be extended to support multi-agent interactions, consensus mechanisms, or even blockchain-verified queries.

## 🛠️ Setup & Installation  
### **1️⃣ Clone/Fork the Repo**
```sh
git clone https://github.com/harishkotra/gaia-zerion-demo
cd gaia-zerion-demo
```
### **2️⃣ Install Dependencies**
```sh
npm install
```
### **3️⃣ Add Your API Keys**
Create a .env.local file and add:
```sh
NEXT_PUBLIC_GAIA_NODE_URL=your_gaia_node_URL
NEXT_PUBLIC_GAIA_API_KEY=your_gaia_api_key
NEXT_PUBLIC_ZERION_API_KEY=your_zerion_api_key
NEXT_PUBLIC_ZERION_BASE_URL==zerion_base_URL
```
### **4️⃣ Run the App**
```sh
npm run dev
```
Visit `http://localhost:3000` to chat with the AI assistant.

## 🚀 What Can You Build With This?
This is just a starting point! You can expand it into:

🔍 On-Chain AI Analysis – Let AI analyze wallet transactions and detect patterns.

📊 DeFi Portfolio Tracker – Monitor DeFi positions, LP tokens, and staking rewards.

🤝 Multi-Agent AI Trading Bot – Implement multi-agent consensus for AI-driven trade recommendations.

🔐 Blockchain-Verified Queries – Use smart contracts to verify AI responses before showing them.

## 📚 Resources

[Gaia AI](https://docs.gaianet.ai/intro) – Gaia is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise.

[Zerion API](https://developers.zerion.io/reference/intro/getting-started) - The Zerion API can be used to build feature-rich web3 apps, wallets, and protocols with ease. Across all major blockchains, you can access wallets, assets, and chain data for web3 portfolios. Zerion's infrastructure supports all major chains!

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-zerion-demo).

:::
