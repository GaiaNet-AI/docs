---
sidebar_position: 3
---

# Customized your node

From the Quick Start guide, we learned how to run a GaiaNet node and get the reward. This article will show you how to run a customized node based on your needs. 

### Customized your node from the Gaianet Node Generator tool

To make running a node easy, the Node Generator tool from the Gaianet website is designed to generate special installation  command lines including all the customized settings based on your choices. 

> To use the Node Generator, you must log in to the GaiaNet website with your Metamask first.


First, you will need a chat model as the foundation of your node. The default chat model is the Llama-2-7b model. GaiaNet supports all the open-source models. You can choose one model that you like. 

Next, input your special system prompts. If you have no idea about it, don't worry, we have set up default prompts for you.

Then, you will choose whether you want to build a RAG agent or not. If you choose yes, then you will need to choose the embedding model and the dataset. The default embedding model will be all-MiniLM-L6-v2 and the default dataset is a Paris guide. 

> If you don’t want to create RAG agents, click Skip to skip this step.

Then, choose a domain to join. The default domain is gaianet.xyz. Learn more about domain and subdomain here.

Finally, click on confirm, the GaiaNet installer will generate all the steps to run a customized node.

### Run the command lines generated from the Gaianet Node Generator tool

First of all, run the following command line on your terminal to install the required software. If you have done this before, you can skip this step.

```
bash <(curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh')
```
Then, run the following command line to init your customized node.

```
cd $HOME/gaianet
./gaianet init https://huhiohuhi-config.json
```

After the installation is successful, run the following command line to run your node.

```
./gaianet run 
```

If you want to stop the node, simply use `gaianet stop`.

```
./gaianet stop
```


### Customized some settings

If you just want to adjust some settings, you can use `gaianet config`  command line to update the local `config.json` to new settings.

`./gaianet config chat_ctx_size 4096` is to adjust the context length of the chat model.

`./gaianet config embedding url-to-embedding-gguf-file` is to adjust the embedding model

`./gaianet config system_prompt “you are a helpful assistant"` is to adjust the system prompt.

`./gaianet config rag_prompt “you are a helpful assistant"` is to adjust the rag prompt.





