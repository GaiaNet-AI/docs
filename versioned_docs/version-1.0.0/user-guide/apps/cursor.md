---
sidebar_position: 4
---

# Cursor AI IDE

[Cursor](https://www.cursor.com/) is an AI-powered code editor / IDE. Using LLMs to generate and review code, Cursor is an alternative to the very popular GitHub Copilot. 
You can use Cursor with your own Gaia node as the LLM backend. There are two big reasons for that

* Your Gaia node could be supplemented by a knowledge base that is specific to your proprietary code repository, programming language choices, and coding guidelines / styles.
* Your Gaia node could ensure that your code stays private within your organization.

<iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://www.youtube.com/embed/RwS6DZQBJ7A" title="A Rust coding assistant on Cursor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Prerequisites

You will need a Gaia node to provide LLM API services. You can

* [Run your own node](../../node-guide/quick-start.md)
* [Use a public node](../nodes.md)

In this tutorial, we will use public [Qwen 2.5 Coder](https://github.com/QwenLM/Qwen2.5-Coder) nodes to power Cursor.

| Model type | API base URL | Model name |
|-----|--------|-----|
| General coding assistant | `https://coder.gaia.domains/v1` | coder |
| Coding assistant with Rust knowledge | `https://rustcoder.gaia.domains/v1` | rustcoder |
| Rust expert (slower but more accurate) | `https://rustexpert.gaia.domains/v1` | rustexpert |

> A limitation of Cursor is that it does not support local LLM services. A Gaia node comes with a default networking tunnel that turns your local LLM service into a HTTPS service accessible from the Internet. That allows Cursor to use your own private LLM for coding. Start your own [Qwen Coder](https://github.com/GaiaNet-AI/node-configs/tree/main/qwen-2.5-coder-7b-instruct) or [Qwen Coder with Rust](https://github.com/GaiaNet-AI/node-configs/tree/main/qwen-2.5-coder-7b-instruct_rustlang) nodes today!

## Configure Cursor

First, download and install [Cursor](https://www.cursor.com/). Click on the **Settings** button on the top right. Then, click on **Models** to configure the backend LLM service.

Second, add a model named `coder` and turn off all the other models like `gpt-4o`.

Third, go to the OpenAI API Key section,

* Click on **Override OpenAI Base URL**. Type `https://coder.gaia.domains/v1` here.
* For the OpenAI API key, you can get a API Key following the [instruction here](https://docs.gaianet.ai/getting-started/authentication). Click on **Verify** to test if the connection is correct.

![](cursor-01.png)

## Use Cursor

You can use 

* **command + K** to edit the highlighted code
* **command + L** to open the chat room and ask questions about the code.
  
![](cursor-02.png)
