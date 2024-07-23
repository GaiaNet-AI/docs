---
sidebar_position: 11
---

# AI coding assistant: Continue

[Continue](https://github.com/continuedev/continue) is the leading open-source AI code assistant.
It is a copilot-like plugin for VSCode and JetBrains to provide custom autocomplete and chat experiences inside 
those IDEs. You can easily configure it to use Gaia nodes as LLM backends. In fact, you can choose different Gaia 
nodes for

* the autocomplete model for coding tasks
* the chat model for understanding and discussing code
* the embedding model to provide chat context based on local files

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use public nodes to power the Continue plugin.

| Model type | API base URL | Model name |
|-----|--------|-----|
| Chat | https://gemma-2-27b.us.gaianet.network/v1/ | gemma-2-27b-it-Q5_K_M |
| Embedding | https://gemma-2-27b.us.gaianet.network/v1/ | nomic-embed-text-v1.5.f16 |
| Autocompletion | https://codestral-01-22b.us.gaianet.network/v1/ | Codestral-22B-v0.1-hf-Q5_K_M |

> It is important to note that Continue requires the API endpoint to include a `/` at the end.

## Install Continue

[Load this link](https://marketplace.visualstudio.com/items?itemName=Continue.continue) to install the Continue IDE plugin.  
It will open up your VSCode when you click on the **Install** button on the web page. When you are
asked to configure Continue, just click on **Skip** and finish the installation without selecting a local model.

## Configure Continue

Click on the gear icon on the toolbar to load the `config.json` file for the Continue plugin. The file is located
in your own home directory `$HOME/.continue/config.json`.
You can now change the `config.json` file as follows. 
It asks the Continue plugin to use different public Gaia nodes and models for 
chat, code autocomplete and embeddings.

```
{
  "models": [
    {
      "model": "gemma-2-27b-it-Q5_K_M",
      "title": "LlamaEdge",
      "apiBase": "https://gemma-2-27b.us.gaianet.network/v1/",
      "provider": "openai"
    }
  ],
  "tabAutocompleteModel": {
      "title": "Autocomplete",
      "apiBase": "https://codestral-01-22b.us.gaianet.network/v1/",
      "model": "Codestral-22B-v0.1-hf-Q5_K_M",
      "provider": "openai"
  },
  "embeddingsProvider": {
    "provider": "openai",
    "model": "nomic-embed-text-v1.5.f16",
    "apiBase": "https://gemma-2-27b.us.gaianet.network/v1/"
  },
  "customCommands": [
    {
      "name": "test",
      "prompt": "{{{ input }}}\n\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      "description": "Write unit tests for highlighted code"
    }
  ],
  "allowAnonymousTelemetry": true
}
```

Save the `config.json` file and you are done!

## Use the plugin

The following screenshot shows how you can chat with an error message
inside the IDE.

![](continue-01.png)



