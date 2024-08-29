---
sidebar_position: 1
---

# Quick start with GaiaNet Node
This guide provides the requisite knowledge necessary to quickly get started with installing a GaiaNet node. 

### Prerequisites
Before you get started, ensure that you have the following on your system:

| System | Minimum Requirements |
|---|---|
| OSX with Apple Silicon (M1-M4 chip) | 16GB RAM (32GB recommended) |
| Ubuntu Linux 20.04 with Nvidia CUDA 12 SDK | 8GB VRAM on GPU |
| Azure/AWS | Nvidia T4 GPU Instance |

Learn more about [system requirements](system-requirements).

### Installing the node

1.  Use the following command to download the latest version of the GaiaNet node:

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash
```

2.  Run the command printed on the terminal to set up the environment path, it is started with `source`.
![](quick-start.png)

3. Use the following command to initialize the GaiaNet node according to the configuration options 
in `$HOME/gaianet/config.json`.
By default, the GaiaNet is initialized with a [Phi-3](https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/) LLM and a [knowledge base about Paris](https://huggingface.co/datasets/gaianet/paris). 
This command could take some time since it will download a very large LLM file.

```
gaianet init
```

4. Use the following command to start your node:

```
gaianet start
```

#### After starting your node

- A successful start prints a public URL for the node. Opening a browser to that URL will display the node information and allow you to chat with the AI agent on the node. 

```
... ... https://0xf63939431ee11267f4855a166e11cc44d24960c0.gaianet.xyz
```

- To stop the node: `gaianet stop`

## Next steps

- [Customize](customize.md) your node. You probably do not wish to just run the default Phi-3 model and Paris knowledge base. 
- [Register](register.md) and join the GaiaNet protocol network to receive payments.
- [Protect](tasks/protect.md) the node server to ensure stable service.
- Install and manage [multiple nodes](tasks/multiple.md) on a single machine.

