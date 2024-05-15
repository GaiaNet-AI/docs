---
sidebar_position: 8
---

# GaiaNet CLI options

After installing the GaiaNet software, you can use the `gaianet` CLI to manage the node. The following are the CLI options.

## help

You can use `gaianet --help` to check all the available CLI options.

```
gaianet --help

## Output
Usage: gaianet {config|init|run|stop|OPTIONS}

Subcommands:
  config             Update the configuration.
  init               Initialize the GaiaNet node.
  run|start          Start the GaiaNet node.
  stop               Stop the GaiaNet node.

Options:
  --help             Show this help message
```

## init

The `gaianet init` command initializes the node according to the `$HOME/gaianet/config.json` file. You can use some of our [pre-set configurations](https://github.com/GaiaNet-AI/node-configs).

* `gaianet init` will init the default node. It's an RAG application with Gaianet knowledge.
* `gaianet init --config mua` will init a node with the MUA project knowledge.
* `gaianet init --base <path>` will init a node in an alternative directory.

You can also use `gaianet init url_your_config_json` to init your customized settings for the node. You can customize your node using the Gaianet node link. If you're familiar with the Gaianet config.json, you can create your own manually. See an example [here](https://github.com/GaiaNet-AI/gaianet-node/blob/main/config.json).

```
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/pure-llama-3-8b/config.json
```

## start

The `gaianet start` is to start running the node.

* Use `gaianet start` to start the node according to the `$HOME/gaianet/config.json` file.
* Use `gaianet start --base $HOME/gaianet-2.alt ` to start the node according to the `$HOME/gaianet-2/config.json` file.
* Use `gaianet start --local-only` to start the node for local use according to the `$HOME/gaianet/config.json` file. 
 

## stop

The `gaianet stop` is to stop the running node.

* Use `gaianet stop` to stop running the node.
* Use `gaianet stop --force` to force stop the GaiaNet node.
* Use `gaianet stop --base $HOME/gaianet-2.alt` to stop the node according to the `$HOME/gaianet-2/config.json` file.

## config

The `gaianet config` can update the key fields defined in the `config.json` file.

* `gaianet config --help` will list all the available arguments
* `gaianet config --chat-url <url>` will change the download link of the chat model.
* `gaianet config --prompt-template <template>` will change the prompt_template of the chat model.
* `gaianet config --chat-ctx-size <size>` will change the context size of the chat model. The default value is 4096.
* `gaianet config --embedding-url <url>` will change the download link of the embedding model.
* `gaianet config --embedding-ctx-size <size>` will change the context size of the embedding model. The value here is associated with the embedding model you choose.
* `gaianet config --port <port>` will change the port of the Gaianet node API server.
* `gaianet config --system-prompt "<prompt>"` will change the system prompt.
* `gaianet config --rag-prompt "<prompt>"` will change the rag prompt.
* `gaianet config --reverse-prompt "<prompt>"` will change the reverse prompt.
* `gainet config --base <path> ` will modify the `<path>/config.json` parameters.

After you use `gaianet conifg` to change some parameters, please

1. use `gaianet init` to make your settings take effect.
2. use `gaianet start` to start your new node.

If you use `gaianet config --base $HOME/gaianet-2.alt` to update some settings, please

1. use `gaianet init --base $HOME/gaianet-2.alt` to make your settings take effect.
2. use `gaianet start --base $HOME/gaianet-2.alt` to start your new node.

The `gaianet config` supports multiple parameters in one command. The example below will change the download link and prompt template of the chat model at the same time.

```
gaianet config --chat-url https://huggingface.co/gaianet/gemma-1.1-2b-it-GGUF/resolve/main/gemma-1.1-2b-it-Q5_K_M.gguf --prompt-template gemma-chat
```

The output is the following.

```
[+] Updating the url of chat model ...
    * Old url: https://huggingface.co/gaianet/Llama-3-8B-Instruct-GGUF/resolve/main/Meta-Llama-3-8B-Instruct-Q5_K_M.gguf
    * New url: https://huggingface.co/gaianet/gemma-1.1-2b-it-GGUF/resolve/main/gemma-1.1-2b-it-Q5_K_M.gguf

[+] Updating the prompt template of chat model ...
    * Old template: llama-3-chat
    * New template: gemma-chat

[+] COMPLETED! The config.json is updated successfully.
```

## base

The `--base` option is global. You can combine it with other subcommands to specify a base directory for the GaiaNet node other than the `$HOME/gaianet`.

