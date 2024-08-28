---
sidebar_position: 103
---

# Agent Zero on Gaia

The Agent Zero framework is designed to be dynamic, organically growing, and learning as users use it. It also can leverage your computer as a tool to accomplish your tasks.

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use the public Llama-3.1-8B nodes to power the Agent Zero framework.

| Model type | API base URL | Model name |
|-----|--------|-----|
| Chat | https://llama.us.gaianet.network/v1/ | llama |

**You will also need to make sure your Docker engine is running.** Because the Agent Zero framework will leverage Docker to execute the generated code.

## Run the agent

First, we will need to get the source code of the forked Agent-Zero.

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
