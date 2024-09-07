---
sidebar_position: 10
---

# Zed


[Zed](https://zed.dev/) is a next-generation code editor designed for high-performance collaboration with humans and AI, and it is written in Rust.  You can use Zed with your own Gaia node as the LLM backend. There are two big reasons for that

* Your Gaia node could be supplemented by a knowledge base that is specific to your proprietary code repository, programming language choices, and coding guidelines/styles.
* Your Gaia node could ensure that your code stays private within your organization.

## Prerequisites

You will need a Gaia node to provide LLM services to Zed. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use the public [Yi-coder-9B node](https://github.com/GaiaNet-AI/node-configs/tree/main/yi-coder-9b-chat) to power Zed.

| Model type | API base URL | Model name |
|-----|--------|-----|
| Chat | https://yicoder9b.us.gaianet.network/v1 | yicoder9b |

> You can start a local LLM service using [Gaia](https://github.com/GaiaNet-AI/node-configs/tree/main/yi-coder-9b-chat) or [LlamaEdge](https://llamaedge.com/docs/user-guide/quick-start-command) or [Moxin](https://github.com/moxin-org/moxin), and then use `http://localhost:8080/v1/` as the LLM API service endpoint URL.

## Configure Zed

First, download and install [Zed](https://zed.dev/). Click on your profile on the top right and choose **Setting**. Then a new tab called `settings.json` will be opened. You can configure your Zed by editing this file.

![](zed-01.png)

Below is the `settings.json` we used. You can copy and paste sections `language_models` and `assistant` to your own. They configure Zed to use an OpenAI-compatible API provider and then specify the API endpoint URL and model name for that provider.

```
{
  "features": {
    "inline_completion_provider": "none"
  },
  "language_models": {
    "openai": {
      "version": "1",
      "api_url": "https://yicoder9b.us.gaianet.network/v1",
      "low_speed_timeout_in_seconds": 60,
      "available_models": [
        {
          "name": "yicoder9b",
          "max_tokens": 8096
        }
      ]
    }
  },
  "assistant": {
    "provider": "openai",
    "default_model": {
      "provider": "openai",
      "model": "yicoder9b"
    },
    "version": "2"
  },
  "ui_font_size": 16,
  "buffer_font_size": 16,
  "theme": {
    "mode": "system",
    "light": "One Light",
    "dark": "One Dark"
  }
}
```

Next we will configure the API key to access this Gaia node.

Go back to the folder you opened. Click on the Star icon at the bottom to turn on the Assistant panel.
  
![](zed-02.png)

Click on **Open configuration** to set up the API Key.
  
![](zed-03.png)

Since we are using a free public Gaia node, you can use any API key in the OpenAI section at the bottom of the screen. For example, you can enter `GAIA`.

Now, we have everything ready.

# Use Zed

You can

* Edit the highlighted code by selecting the code and clicking on the **Inline Assistant** button.

![](zed-04.png)

* Open the Assistant panel by clicking on the **Assistant** icon at the bottom to turn on the Assistant panel.

![](zed-05.png)





