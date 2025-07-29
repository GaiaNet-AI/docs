---
sidebar_position: 3
---

# Working with Coinbase AgentKit

You can use a Gaia node to power the [Coinbase AgentKit](https://github.com/coinbase/cdp-agentkit).
The Gaia node must run an LLM that is optimized for [tool calling](tool-call.md). 
Or, you could simply use our public node.

| Attribute | Value |
|-----|--------|
| API endpoint URL | https://llama8b.gaia.domains/v1 |
| Model Name | llama |
| API KEY | gaia |

> If you're using a Domain service, not your own node, you will [need to get an API key from Gaia](https://docs.gaianet.ai/getting-started/authentication).

## Quickstart

First, you need a [Coinbase Developer Platform account](https://www.coinbase.com/developer-platform) and then [create an API key](https://docs.cdp.coinbase.com/advanced-trade/docs/auth/#creating-api-keys).

Next, check out the AgentKit example code.

```
git clone https://github.com/coinbase/cdp-agentkit
cd cdp-agentkit/cdp-langchain/examples/chatbot
```

Set the environment variables for your API key.

```
export CDP_API_KEY_NAME='organizations/.../apiKeys/...'
export CDP_API_KEY_PRIVATE_KEY='-----BEGIN EC...END EC PRIVATE KEY-----\n'
```

Edit the `chatbot.py` file to configure the agent to use the Gaia node above.

```
llm = ChatOpenAI(model="llama", api_key="GAIA", base_url="https://llama8b.gaia.domains/v1")
```

> If you're using a Domain service, not your own node, you will [need to get an API key from Gaia](https://docs.gaianet.ai/getting-started/authentication).

Finally, run the agent using Python.

```
python chatbot.py
```

You can see a [video demo here](https://x.com/juntao/status/1858634152599224828).


## A Telegram bot for AgentKit

We have also built a Telegram bot that allows you to interact with your own wallet through text and voice messages.
You will need to bring your own Coinbase credentials and wallet for your bot to operate on.
Go to chat the with bot on Telegram.

https://t.me/agentkit_bot

It asks you to use slash commands to set your wallet credentials for your bot.
It is like this.

```
/name organizations/.../apiKeys/...

/pk -----BEGIN EC...END EC PRIVATE KEY-----\n

/wallet {"wallet_id": "...
```

Then, you can just tell the Telegram bot what you want to do on-chain, and the agent will do it for you.


