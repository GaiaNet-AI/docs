---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Langchain integration

:::note
Integrations with Langchain can be done with Python or Javascript.
:::

LangChain is a framework for developing large language model (LLM) powered applications.

You can configure Langchain to use any Gaia node as the LLM backend, that way you can build any AI agent or AI-powered application that uses Gaia for inferencing.

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can:

- [Run your own node](../../getting-started/quick-start)
- [Use a public node](../nodes)

If you are using a public node, you will need an [API key](https://www.gaianet.ai/setting/gaia-api-keys). Gaia overs free 50,000 API credits to use with the available services such as public nodes.

In this tutorial, we will be running our not need an API key, you can use a string like: "Gaia".

 To get started with running your node, you can follow the guide on the [Setting up your own node](/getting-started/quick-start) page first and then come back here for integrations.

## Integration with Gaia

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

    model = ChatOpenAI(
        api_key=os.environ.get("GAIANET_API_KEY"),
        model="Llama-3-Groq-8B-Tool",
        base_url="gaia-node-url/v1"
    )

    reponse = model.invoke("Hello, world!")

    print(response)
    ```
  </TabItem>
</Tabs>

From the above, you can then start making invocations to the model. The LangChain also opens up integrations with [LangGraph](https://www.langchain.com/langgraph) and [LangSmith](https://www.langchain.com/langsmith).