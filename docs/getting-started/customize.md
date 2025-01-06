---
sidebar_position: 4
---

# Customizing Your Gaia Node

A key goal of the Gaia project is to enable each individual to create and run his or her own agent service node using finetuned LLMs and proprietary knowledge. In all likelihood, you are not going to run a node with the [default](quick-start) Llama 3.2 LLM and Paris guidebook knowledge base.

In this chapter, we will discuss ways to customize your node.

## Pre-set configurations

All the node configuration options, such as LLM settings, vector collection for the knowledge base, and prompts,  are all in the `gaianet/config.json` file. You can edit this file directly to use your models and vector collections.

Or, you can select a different `config.json` when you initialize the node. Just pass in a URL to the `config.json` file 
in your `gaianet init` command.

We have several pre-set `config.json` files to choose from [in this repo](https://github.com/GaiaNet-AI/node-configs).

For example, the following command initialize a Gaia node with a Llama 3 8B model.

```
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3-8b-instruct/config.json
```

> The URL to the `config.json` must point to the actual text file. (i.e., the `raw.githubusercontent.com` URL for GitHub links) instead of the GitHub HTML page for that file.

## The config subcommand

After you have initialized the node, you can still make changes to its configuration by editing the `config.json` file
directly. But it is easier and safer to use the `gaianet` CLI to make changes.

:::note
You MUST run `gaianet init` and `gaianet start` again after you make any changes to the node configuration.
:::

The following command shows the `config.json` fields you can make changes to.

```
gaianet config list
```

Now, let's look at some examples.

### Select an LLM

There are over 10,000 finetuned open-source LLMs you can choose from on Huggingface. They each have different sizes (larger models are more capable but more expensive to run), unique capabilities (e.g., uncensored, to excel in math or reasoning, to support large context length etc), domain expertise (e.g., medicine, coding), and / or styles (e.g., to speak like a teacher or a pirate, to respond in code, to follow conversations).

To replace Gaia node's default LLM with an alternative
finetuned model, you will need to make changes to the model file, prompt template, and model context length parameters.
Those parameters vary depending on the model, but they can be found on the [Gaia Huggingface organization's](https://huggingface.co/gaianet) model cards. For example, the following command changes the LLM to a Llama 3 8B model.

```
gaianet config \
  --chat-url https://huggingface.co/gaianet/Llama-3-8B-Instruct-GGUF/resolve/main/Meta-Llama-3-8B-Instruct-Q5_K_M.gguf \
  --chat-ctx-size 4096 \
  --prompt-template llama-3-chat 
```

> The llama 3 8B model requires at least 16GB of RAM.

If none of the published finetuned models are perfect for your use case, you can also finetune your own LLM by following [these guides](../tutorial/llamacpp). Your Gaia node can run your own finetuned models. 

> The `--chat-url` argument could point to a local file under `$HOME/gaianet` instead of a public URL. That allows you to use a privately trained or finetuned LLM model file.

### Select a knowledge base

A key feature of Gaia is that users can create and deploy proprietary knowledge base on the node to supplement
the LLM. Each knowledge base is a snapshot file for a vector collection. 
We encourage you to [create your own knowledge base](../knowledge-bases/how-to). But you can also use 
ready-made knowledge bases. You will need to do the following.

* specify the URL to the vector collection (i.e., the `snapshot` or `snapshot.tar.gz` file) in the `snapshot` option.
* use the same embedding model that generated this vector collection.
* modify the `system_prompt` to give the model background knowledge.
* modify the `rag_prompt` to instruct the model to answer the question when context is retrieved from the vector collection.

The following example changes the knowledge base in the node from "Paris guidebook" to "London guidebook". 

```
gaianet config \
  --snapshot https://huggingface.co/datasets/gaianet/london/resolve/main/london_768_nomic-embed-text-v1.5-f16.snapshot.tar.gz \
  --embedding-url https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf \
  --embedding-ctx-size 8192 \
  --system-prompt "You are a tour guide in London, UK. Please answer the question from a London visitor accurately." \
  --rag-prompt "The following text is the context for the user question.\n----------------\n"
```

> The `--snapshot` could point to a local file under `$HOME/gaianet` instead of a public URL. That allows you to use a private vector collection snapshot.

Depending on the quality and size of the vectors, you might also need to change the `qdrant-` options to 
customize the retrieval behavior.

* `qdrant-limit` sets the max number of relevant context to add to the prompt. If your knowledge base consists of large sections of text (i.e., each book chapter is a vector), you should probably make this 1 or 2 to limit the prompt length to a reasonable size.
* `qdrant-score-threshold` is the min match "score" the knowledge content must meet in order to be considered "relevant". This depends on the quality of the knowledge text and the embedding model. In general, this score should be over 0.5 to reduce irrelevant context in the prompt.

> The embedding model encodes and transforms text into vectors so that the can be stored, searched and retrieved. For different
context material, you might need a different embedding model to achieve the optimal performance. 
The [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) is a good place to see the performance
benchmarks of embedding models. You can find many of them in the [gaia organization on Huggingface](https://huggingface.co/gaianet).
 
### Customize prompts

In `config.json`, you can also customize the prompts. 
Prompts are often tailored for the finetuned LLM or the knowledge
base to generate optimal responses from the node.

The `--system-prompt` option sets a system prompt. It provides the background and "personality" of the node.
Each API request can set its own system prompt.

The `--rag-prompt` is the prompt to be appended after the system prompt (or user query). 
It introduces the RAG context retrieved from the vector database, which follows it.

The `--rag-policy` option specifies where the `rag-prompt` and context should go. 
By default, its value is `system-message` and it puts the context in the system prompt. 
But you could also set it to `last-user-message`, which puts the `rag-prompt` and context in front of the latest message from the user.

## Next steps

Remember to re-initialize and re-start the node after you make configuration changes.

```
# If the node is running
# gaianet stop

gaianet init

gaianet start
```

Next, you can

* [Create a knowledge base](../knowledge-bases/how-to) from your proprietary knowledge or skills.
* [Finetune](../tutorial/llamacpp) your own LLM.

Have fun!

