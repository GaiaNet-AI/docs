---
sidebar_position: 1
---

# Overview

GaiaNet is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise.
It allows individuals and businesses to create AI agents. Each GaiaNet node provides 

* a web-based chatbot UI. [Chat with a GaiaNet node](https://vitalik.gaianet.network/chatbot-ui/index.html) that is an expert on Ethereum.
* an OpenAI compatible API. [See how](user-guide/apps/dify) to use a GaiaNet node as a drop-in OpenAI replacement in your favorite AI agent app. 

The API approach allows any agent application in the OpenAI ecosystem, which is 100% of AI agents today, to use GaiaNet as an alternative to OpenAI. Furthermore, while the OpenAI API is backed by a handful of models to give generic responses, each GaiaNet node can be heavily customized with a finetuned model supplemented by domain knowledge. For example, a GaiaNet node for a financial analyst agent can write SQL code to query SEC 10K filings to respond to user questions. 

Similar GaiaNet nodes are organized into GaiaNet domains, which provide stable services by load balancing across the nodes. GaiaNet domains have public facing URLs and promote agent services to their communities. When a user or an agent app send an API request to the domain's API endpoint URL, the domain is responsible for directing the request to a node that is ready. 

## Next steps:

### Users

If you are an end user of AI agent applications, you can

* Find a list of interesting GaiaNet nodes you can chat with on the web, or access via API.
* Use a GaiaNet node as the backend AI engine for your favorite AI agent apps. 

### Node operators

If you are interested in running GaiaNet nodes and make money, you can

* Get started with a GaiaNet node.
* Customize the GaiaNet node with a finetuned model and custim knowledge base.

### Creators

If you are a creator or knowledge worker interested in creating your own AI agent serveice, you can

* Create your own knowledge base.
* Finetune a model to "speak" like you.


