---
sidebar_position: 3
---

# Customize Your GaiaNet Node

A key goal of the GaiaNet project is to enable each individual to create and run his or her own
agent service node using finetuned LLMs and proprietary knowledge. In all likelihood, 
you are not going to run a node with the [default](quick-start) Phi-3 LLM and Paris guidebook knowledge base.
In this chapter, we will discuss ways to customize your node.

## Pre-set configurations

All the node configuration options, such as LLM settings, vector collection for the knowledge base, and prompts, 
are all in the `gaianet/config.json` file. You can edit this file directly to use your models and vector collections.
Or, you can select a different `config.json` when you initialize the node. Just pass in a URL to the `config.json` file 
in your `gaianet init` command.
We have several pre-set `config.json` files to choose from [in this repo](https://github.com/GaiaNet-AI/node-configs).
For example, the following command initialize a GaiaNet node with a Llama 3 8B model.

```
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3-8b-instruct/config.json
```

> The URL to the `config.json` must point to the actual text file. (i.e., the `raw.githubusercontent.com` URL for GitHub links) instead of the GitHUb HTML page for that file.

## The config subcommand

After you have initialized the node, you can still make changes to its configuration by editing the `config.json` file
directly. But it is easier and safer to use the `gaianet` CLI to make changes.

> You MUST run `gaianet init` again after you make any changes to the node configuration.

The following command shows the `config.json` fields you can make changes to.

```
gaianet config list
```

Now, let's look at some examples.

### Select an LLM

There are over 10,000 finetuned open-source LLMs you can choose from on Huggingface. They each have different sizes (larger models are more capable but more expensive to run), unique capabilities (eg uncensored, to excel in math or reasoning, to support large context length etc), domain expertise (eg medicine, coding), and / or styles (eg to speak like a teacher or a pirate, to respond in code, to follow conversations).

To replace GaiaNet node's default LLM with an alternative
finetuned model, you will need to make changes to the model file, prompt template, and model context length parameters.
Those parameters vary depending on the model, but they can be found on the [gaianet Huggingface organization](https://huggingface.co/gaianet)'s model cards. For example, the following command changes the LLM to a Llama 3 8B model with an 8k (8192 tokens) context length.

```
gaianet config \
  --chat-url https://huggingface.co/gaianet/Llama-3-8B-Instruct-GGUF/resolve/main/Meta-Llama-3-8B-Instruct-Q5_K_M.gguf \
  --chat-ctx-size 8192 \
  --prompt-template llama-3-chat 
```

> The llama 3 8B model requires at least 16GB of RAM.

If none of the published finetuned models are perfect for your use case, you can also finetune your own LLM by following [these guides](../creator-guide/finetune/intro). Your GaiaNet node can run your own finetuned models. 

> The `--chat-url` argument could point to a local file under `$HOME/gaianet` instead of a public URL. That allows you to use a privately trained or finetuned LLM model file.

### Select a knowledge base

A key feature of GaiaNet is that users can create and deploy proprietary knowledge base on the node to supplement
the LLM. Each knowledge base is a snapshot file for a vector collection. 
We encourage you to [create your own knowledge base](../creator-guide/knowledge/concepts). But you can also use 
ready-made knowledge bases. You will need to do the following.

* specify the URL to the vector collection (i.e., the `snapshot` or 'snapshot.tar.gz` file) in the `snapshot` option.
* use the same embedding model that generated this vector collection.
* modify the `system_prompt` to instruct the model how to answer questions when NO context is found in the vector collection.
* modify the `rag_prompt` to instruct the model how to use the context retrieved from the vector collection.

The following example changes the knowledge base in the node from "Paris guidebook" to "London guidebook". 

```
gaianet config \
  --snapshot https://huggingface.co/datasets/gaianet/london/resolve/main/london_768_nomic-embed-text-v1.5-f16.snapshot.tar.gz \
  --embedding-url https://huggingface.co/gaianet/Nomic-embed-text-v1.5-Embedding-GGUF/resolve/main/nomic-embed-text-v1.5.f16.gguf \
  --embedding-ctx-size 512 \
  --system-prompt "You are a tour guide in London, UK. Please answer questions from London visitors and tourists accurately and help them enjoy their stay in London." \
  --rag-prompt "You are a tour guide in London, UK. Use information in the following context to answer questions from a London visitor.\n----------------\n"
```

> The `--snapshot` could point to a local file under `$HOME/gaianet` instead of a public URL. That allows you to use a private vector collection snapshot.

Depending on the quality and size of the vectors, you might also need to change the `qdrant-` options to 
customize the retrievial behavior.

* `qdrant-limit` sets the max number of relevant context to add to the prompt. If your knowledge base consists of large sections of text (i.e., each book chapter is a vector), you should probably make this 1 or 2 to limit the prompt length to a reasonable size.
* `qdrant-score-threshold` is the min match "score" the knowledge content must meet in order to be considerred "relevant". This depends on the quality of the knowledge text and the embedding model. In general, this score should be over 0.5 to reduce irrelevant context in the prompt.

> The embedding model encodes and transforms text into vectors so that the can be stored, searched and retrieved. For different
context material, you might need a different embedding model to achieve the optimal performance. 
The [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) is a good place to see the performance
benchmarks of embedding models. You can find many of them in the [gaianet organization on Huggingface](https://huggingface.co/gaianet).
 
### Customize prompts

In `config.json`, you can also customize the prompts. Prompts are often tailored for the finetuned LLM or the knowledge
base to generate optimal responses from the node.

The `--system-prompt` option sets a system prompt when the knowledge base search returns NO context. You can consider it to 
be the "default" system prompt. It is only useful in the node's built-in chatbot UI since an API request can set 
its own system prompt.

The `--rag-prompt` is the system prompt to be prefixed in front of the context from the vector search result. The combined
`rag-prompt` and context replaces any system prompt the user might set. When the user makes a request to the GaiaNet node, the node first searches the knowledge base for relevant text. It then puts the search result text into the LLM query as context. The `rag-prompt` is to introduce the context to the LLM. It is written in natural language. You can in fact put a lot of complex instructions into the prompt, such as how and when to answer questions, speaking styles, and overall background information about the task. 

The `--rag-policy` option specifies where the `rag-prompt` and context should go. By default, its value is `system-message`
and it puts the context in the system prompt as we discussed. But you could also set it to `last-user-message`, which
puts the `rag-prompt` and context in front of the latest message from the user.

## Next steps

Remember to re-initialize and re-start the node after you make configuration changes.

```
# If the node is running
# gaianet stop

gaianet init
gaianet start
```

Next, you can

* [Create a knowledge base](../creator-guide/knowledge/web-tool) from your proprietary knowledge or skills.
* [Finetune](../creator-guide/finetune/intro) your own LLM.

Have fun!

