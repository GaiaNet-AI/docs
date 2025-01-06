---
sidebar_position: 4
---

# Working with eliza

Eliza is a simple, fast, and lightweight AI agent framework. Recently, eliza has integrated Gaia as one of the [model service provider](https://github.com/elizaOS/eliza/pull/762). This means you can now use Gaia as the LLM service backend for the Eliza framework.

### Build a Trump agent with eliza and Gaia

This guide demonstrates how to create an agent with Trump-like characteristics using [the Get Started guide from eliza](https://elizaos.github.io/eliza/docs/quickstart/).

#### Set up the environment

> Note: Ensure your Node.js version is above 0.23.0 before proceeding.

Firstly, clone the Eliza repository:

```
git clone https://github.com/elizaos/eliza.git
cd eliza
git checkout v0.1.7-alpha.1
```

Next, install the required dependencies.

```
pnpm install
```

Then, build the local libraries.

```
pnpm build
```

#### Choose Gaia as the model service provider

After that, we will need to configure the environment and use a Gaia node as model service provider.

```
cp .env.example .env
```

Then, edit the `.env` file to include Gaia-related configuration values:

```
# Gaianet Configuration
GAIANET_MODEL=llama3b
GAIANET_SERVER_URL=https://llama3b.gaia.domains/v1

SMALL_GAIANET_MODEL=            # Default: llama3b
SMALL_GAIANET_SERVER_URL=       # Default: https://llama3b.gaia.domains/v1
MEDIUM_GAIANET_MODEL=           # Default: llama
MEDIUM_GAIANET_SERVER_URL=      # Default: https://llama8b.gaia.domains/v1
LARGE_GAIANET_MODEL=            # Default: qwen72b
LARGE_GAIANET_SERVER_URL=       # Default: https://qwen72b.gaia.domains/v1

GAIANET_EMBEDDING_MODEL=nomic-embed
USE_GAIANET_EMBEDDING=TRUE          # Set to TRUE for GAIANET/768, leave blank for local
```
By using this configuration, the system will utilize the Llama 3b Gaia domain as the LLM backend. You can replace `GAIANET_SERVER_URL` with a URL for your custom node or domain.

#### Create the Trump agent

The default character templates are located in the `characters` folder.

Update the `modelProvider` for the desired character. For Gaia, the provider name is `gaianet`.

```
    "name": "trump",
    "clients": [],
    "modelProvider": "gaianet",
    "settings": {
        "secrets": {},
        "voice": {
            "model": "en_US-male-medium"
        }
    },
    "plugins": [],
```

Then, we can use the following command line to start running the agent.

```
pnpm run dev --character="characters/trump.character.json"
```

After the service runs successfully, we can launch the client UI to interact with the agent:

```
pnpm start:client
```

Finally, open `http://localhost:5174/` on your browser to start chatting with the agent.
<img width="1274" alt="image" src="https://github.com/user-attachments/assets/48474b35-1d40-4334-8ed0-c97f373c2b0b" />


### Advanced use case

For more inspiration, refer to [Nader Dabit's example on building a Twitter AI bot](https://x.com/dabit3/status/1863772029565981144).