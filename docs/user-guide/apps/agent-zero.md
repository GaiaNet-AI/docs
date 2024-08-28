---
sidebar_position: 103
---

# Agent Zero

[Agent Zero](https://github.com/frdel/agent-zero) is a general purpose AI agent application. You can simply ask it to accomplish tasks on the command line. 
It is designed to be dynamic, organically growing, and learning as users use it. It leverages your computer as a tool to accomplish your tasks.

## Prerequisites

You will need a Gaia node to provide LLM services to the agent app. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use the public [Llama-3.1-8B node](https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct) to power the Agent Zero.

| Model type | API base URL | Model name |
|-----|--------|-----|
| Chat | https://llama.us.gaianet.network/v1/ | llama |

**You will also need to make sure your Docker engine is running.** Because the Agent Zero framework will leverage Docker to execute the generated code.

> You can start a local LLM service using [Gaia](https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct) or [LlamaEdge](https://llamaedge.com/docs/user-guide/quick-start-command) or [Moxin](https://github.com/moxin-org/moxin), and then use `http://localhost:8080/v1` as the LLM API service endpoint URL.

## Run the agent

First, we will need to get the source code of a Gaia compatible version of Agent Zero.

```
git clone https://github.com/JYC0413/agent-zero-gaia.git
cd agent-zero-gaia
```

Then, we will need to install the required dependencies.

```
pip install -r requirements.txt
```

Next, let's run the application locally.

```
python main.py
```

Finally, you can interact with Agent Zero via the command line. You will see the Agent Zero framework will call the related tools and execute some code to complete your task.

![](agent zero.png)
