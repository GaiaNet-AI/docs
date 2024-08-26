---
sidebar_position: 1
---

# Overview

GaiaNet is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise.
It allows individuals and businesses to create AI agents. Each GaiaNet node provides:

* a web-based chatbot UI [Chat with a GaiaNet node](https://vitalik.gaianet.network/chatbot-ui/index.html) that is an expert on Ethereum.
* an OpenAI compatible API. [See how](user-guide/apps/dify) to use a GaiaNet node as a drop-in OpenAI replacement in your favorite AI agent app. 

100% of today's AI agents are applications in the OpenAI ecosystem. With our API approach, GaiaNet is an alternative to OpenAI. Each GaiaNet node has the ability to be customized with a fine-tuned model supplemented by domain knowledge which eliminates the generic responses many have come to expect. For example, a GaiaNet node for a financial analyst agent can write SQL code to query SEC 10K filings to respond to user questions. 

Similar GaiaNet nodes are organized into GaiaNet domains, to provide stable services by load balancing across the nodes. GaiaNet domains have public-facing URLs and promote agent services to their communities. When a user or an agent app sends an API request to the domain's API endpoint URL, the domain is responsible for directing the request to a node that is ready. 

## Next steps:

### Users

If you are an end user of AI agent applications, you can:

* [Find a list of interesting GaiaNet nodes you can chat with on the web, or access via API](./user-guide/nodes.md).
* [Use a GaiaNet node as the backend AI engine for your favorite AI agent apps](./category/agent-frameworks-and-apps). 

### Node operators

If you are interested in running GaiaNet nodes, you can

* [Get started with a GaiaNet node](./node-guide/quick-start.md).
* [Customize the GaiaNet node with a finetuned model and custom knowledge base](./node-guide/customize.md).

### Creators

If you are a creator or knowledge worker interested in creating your own AI agent service, you can:

* [Create your own knowledge base](./category/knowledge-bases).
* [Finetune a model to "speak" like you](./category/gaianet-node-with-finetuned-llms).


