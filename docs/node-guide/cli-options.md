---
sidebar_position: 8
---

# WIP: Gaianet CLI options

After installing the Gaianet installer, you can use the `./gaianet` CLI to execute the GaiaNet node. The following are the CLI options.

## `gaianet init`

You can use `gaianet init` to download the model files including the chat model like Llama-2-7b and the embedding model like all-MiniLM-L6-v2, the dataset for the RAG application, and init the model.

* `gaianet init` will init the default node. It's an RAG application with Gaianet knowledge.
* `gaianet init mua` will init a node with the MUA project knowledge.
* `gaianet init paris` will init a node with the Paris guide knowledge.

You can also use `gaianet init url_your_config_json` to init your customized settings for the node. You can customize your node using the Gaianet node link. If you're familiar with the gaianet's config.json, you can also create your own one. See an example here.

