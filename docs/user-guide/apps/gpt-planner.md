---
sidebar_position: 10
---

# A planning agent

The [gpt planner](https://github.com/mshumer/gpt-prompt-engineer/blob/main/gpt_planner.ipynb) is a Python
application that demonstrate the planning capabilities of LLMs. When you run it, it will ask the LLM
to generate multiple action plans for a goal or a query. It will then ask the LLM to compare and select
the best plan, and then rewrite it to answer the user query.

Since the program uses the official OpenAI Python library, we can [easily change it to use a Gaia node](intro.md).

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use a public node.

| Attribute | Value |
|-----|--------|
| API endpoint URL | https://llama-3-8b.us.gaianet.network/v1 |
| Model Name | Meta-Llama-3-8B-Instruct-Q5_K_M |

## Run the agent

First, [load the nodebook in colab](https://colab.research.google.com/github/mshumer/gpt-prompt-engineer/blob/main/gpt_planner.ipynb).

Edit the code to create an OpenAIT client. We will pass in the `base_url` here.

```
client = openai.OpenAI(base_url="https://llama-3-8b.us.gaianet.network/v1", api_key=OPENAI_API_KEY)
```

Next, replace all the `gpt-4o-mini` model name with the `Meta-Llama-3-8B-Instruct-Q5_K_M` model name in the code. 
Here is an example.

```
response = client.chat.completions.create(
    model="Meta-Llama-3-8B-Instruct-Q5_K_M",
    messages=[
        {"role": "system", "content": "You are a helpful assistant. Use the given plan to create a detailed and high-quality response to the user's query."},
        {"role": "user", "content": f"User Query: {user_query}\n\nPlan: {best_plan}\n\nGenerate a detailed response based on this plan."}
    ],
    temperature=0.5,
    max_tokens=2000
)
```

Change the query to your own.

```
user_query = "How do I debug a TLS connection timeout?"
```

Finally, run the notebook to see the results!
