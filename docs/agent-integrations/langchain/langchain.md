---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Langchain Integration

:::note
Integrations with Langchain can be done with Python or Javascript.
:::

LangChain is a framework for developing large language model (LLM) powered applications.

You can configure Langchain to use any Gaia node as the LLM backend, that way you can build any AI agent or AI-powered application that uses Gaia for inferencing.

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can:

- [Run your own node](../../getting-started/quick-start/quick-start.md)
- [Use a public node](../../nodes/nodes.md)

If you are using a public node, you will need an [API key](https://www.gaianet.ai/setting/gaia-api-keys). **Gaia offers free 50,000 API credits to use with available services such as public nodes when you apply for a developer account**.

### Setup

- Project setup on machine (JavaScript or Python)

- Langchain Installation:

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```bash
    npm install @langchain/openai @langchain/core dotenv
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    ```bash
    pip install langchain langchain-openai python-dotenv
    ```

  </TabItem>
</Tabs>

## Integration with Gaia

To get started with running your Gaia node, you can follow the guide on the [Setting up your own node](../../getting-started/quick-start/quick-start.md) page for a quickstart.

In this guide, we will be running our Gaia node locally so we do not need an API key, you can use a string like: "Gaia" as a placeholder. Create a `.env` file and store your API key:

```bash
GAIANET_API_KEY="Gaia"
```

Integrations with Langchain and Gaia can be done with any JavaScript or Python. There are code snippets below that show how integration looks like in both languages:

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { ChatOpenAI, OpenAI } from "@langchain/openai";
    import dotenv from "dotenv";
    
    dotenv.config();

    const model = new ChatOpenAI({
        configuration: {
            apiKey: process.env.GAIANET_API_KEY,
            model: "Llama-3-Groq-8B-Tool",
            baseURL:
            "gaia-node-url/v1",
        },
    });

    const response = await model.invoke("Hello, world!");

    console.log(response)
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    ```python
    from langchain_openai import ChatOpenAI, OpenAI
    import os

    model = ChatOpenAI(
        api_key=os.environ.get("GAIANET_API_KEY"),
        model="Llama-3-Groq-8B-Tool",
        base_url="gaia-node-url/v1"
    )

    response = model.invoke("Hello, world!")

    print(response)
    ```

  </TabItem>
</Tabs>

## Invoking Gaia models

Once you have the basic connection established, you can start using Langchain's powerful features. Start by making invocations to the model.

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
   
    // ...
    const response = await model.invoke("Hello, world!");

    console.log(response)
    ```

  </TabItem>
  <TabItem value="python" label="Python">
    ```python
    # ...
    response = model.invoke("Hello, world!")

    print(response)
    ```

  </TabItem>
</Tabs>

The LangChain support also opens up integrations with [LangGraph](https://www.langchain.com/langgraph) and [LangSmith](https://www.langchain.com/langsmith).
