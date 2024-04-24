---
sidebar_position: 8
---

# Gaianet CLI options

After installing the Gaianet installer, you can use the `./gaianet` CLI to execute the GaiaNet node. Make sure you're in the `gaianet` folder. The following are the CLI options.

## `gaianet --help`

You can use `./gaianet --help` to check all the available CLI options.

```
./gaianet --help

## Output
Usage: ./gaianet {config|init|run|stop} [arg]

Subcommands:
  config <arg>  Update the configuration.
                Available args: list, chat_url, chat_ctx_size, embedding_url, embedding_ctx_size, prompt_template, port
  init [arg]    Initialize with optional argument.
                Available args: list, paris_guide, mua, gaia, <url-to-config.json>
  run           Run the program.
  start         Run the program.
  stop [arg]    Stop the program.
                Available args: --force

Options:
  --help        Show this help message
```

## `gaianet init`

You can use `gaianet init` to download the model files including the chat model like Llama-2-7b and the embedding model like all-MiniLM-L6-v2, the dataset for the RAG application, and init the node.

* `./gaianet init` will init the default node. It's an RAG application with Gaianet knowledge.
* `./gaianet init mua` will init a node with the MUA project knowledge.
* `./gaianet init paris` will init a node with the Paris guide knowledge.
* `./gaianet init list` to check out all the pre-fixed node settings

You can also use `./gaianet init url_your_config_json` to init your customized settings for the node. You can customize your node using the Gaianet node link. If you're familiar with the Gaianet config.json, you can create your own manually. See an example [here](https://github.com/GaiaNet-AI/gaianet-node/blob/main/config.json).

## `gaianet run`

Use `./gaianet run` to start the node after the initialization is done.

## `gaianet stop`

Use `./gaianet stop` to stop running the node.

## `gaianet config`

The `gaianet config` allows node runner to adjust some parameters in the `config.json` file.

* `./gaianet config list` will list all the available arguments
* `./gaianet config chat <url>` will change the download link of the chat model.
* `./gaianet config prompt_template <template>` will change the prompt_template of the chat model.
* `./gaianet config chat_ctx_size <size>` will change the context size of the chat model. The default value is 4096.
* `./gaianet config embedding <url>` will change the download link of the embedding model.
* `./gaianet config embedding_ctx_size <size>` will change the context size of the embedding model. The value here is associated with the embedding model you choose.
* `./gaianet config port <port>` will change the port of the Gaianet node API server.
* `./gaianet config system_prompt "<prompt>"` will change the system prompt.
* `./gaianet config rag_prompt "<prompt>"` will change the rag prompt.
* `./gaianet config reverse_prompt "<prompt>"` will change the reverse prompt.

After you use `gaianet conifg` to change some  parameters, please

1. use `./gaianet init` to make your settings take effect.
2. use `./gaianet run` to start your new node.
