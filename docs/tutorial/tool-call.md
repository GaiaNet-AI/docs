---
sidebar_position: 1
---

# Calling external tools

Tool calling is one of the truly "LLM native" interaction modes that has never existed before. 
It gives the "thinking" LLMs the ability to "act" -- both in acquiring new knowledge and in performing real world actions. It is a crucial part of any agentic application.

Open source LLMs are increasingly good at using tools. The Llama 3 models have now made it possible to have reliable tool calling performance on 8b class of LLMs running on your own laptop!

In this tutorial, we will show you a simple Python program that allows a local LLM to run code and manipulate data on the local computer!

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can

* [run your own node](../getting-started/quick-start). You will need to start a Gaia node for the [Llama 3.3 70B model](https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.3-70b-instruct) or the [Llama 3.1 8B model](https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct) or the [Llama 3 Groq 8B model](https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3-groq-8b-tool). You can then use the node's API URL endpoint and model name in your tool call apps.
* [use a public node](../nodes)

In this tutorial, we will use a public Llama 3.3 node with the function call support.

| Attribute | Value |
|-----|--------|
| API endpoint URL | https://llama70b.gaia.domains/v1 |
| Model Name | llama70b |
| API KEY | gaia |


## Run the demo agent

The [agent app](https://github.com/second-state/llm_todo) is written in Python. It demonstrates how the LLM could use tools to operate a SQL database. In this case, it starts and operates an in-memory SQLite database. The database stores a list of todo items. 

Download the code and install the Python dependencies as follows. 

```
git clone https://github.com/second-state/llm_todo
cd llm_todo
pip install -r requirements.txt
```

Set the environment variables for the API server and model name we just set up. 

```
export OPENAI_MODEL_NAME="llama"
export OPENAI_BASE_URL= "https://llamatool.us.gaianet.network/v1"
```

Run the `main.py` application and bring up the command line chat interface. 

```
python main.py
```

## Use the agent

Now, you can ask the LLM to perform tasks. For example, you can say 

```
User: 
Help me to write down it I'm going to have a meeting with the marketing team.
```

The LLM understands that you need to insert a record into the database and returns a tool call response in JSON. 

```
Assistant:
<tool_call>
{"id": 0, "name": "create_task", "arguments": {"task": "have a meeting with the marketing team"}}
</tool_call>
```

The agent app (i.e., `main.py`) executes the tool call `create_task` in the JSON response, and sends back the results as role `Tool`. You do not need to do anything here as it happens automatically in `main.py`. The SQLite database is updated when the agent app executes the tool call. 

```
Tool:
[{'result': 'ok'}]
```

The LLM receives the execution result and then answers you. 

```
Assistant:
I've added "have a meeting with the marketing team" to your task list. Is there anything else you'd like to do?
```

You can continue the conversation. 

To learn more about how tool calling works, see [this article](https://github.com/LlamaEdge/LlamaEdge/blob/main/api-server/ToolUse.md).

## Make it robust 

One of the major challenges for LLM applications is the frequent unreliability of their responses. For example:

*If the LLM generates an incorrect tool call that fails to address the user’s query,*

you can refine and optimize the descriptions for each tool call function. The LLM chooses its tools based on these descriptions, so it's vital to craft them in a way that aligns with typical user queries.

*If the LLM hallucinates and produces tool calls with non-existent function names or incorrect parameters,*

the agent app should identify this issue and prompt the LLM to create a new response.

Tool calling is a fundamental feature in the evolving field of agentic LLM applications. We’re eager to see the innovative ideas you bring forward!
