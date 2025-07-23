---
sidebar_position: 1
---

# 👋 Welcome to Gaia

Gaia is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise.

It allows individuals and businesses to create AI agents. Each Gaia node provides:

* a web-based chatbot UI [Chat with a Gaia node](https://rustcoder.gaia.domains/chatbot-ui/index.html) that is an expert on the Rust programming language.
* an OpenAI compatible API. [See how](/agent-integrations/intro) to use a Gaia node as a drop-in OpenAI replacement in your favorite AI agent app. 

100% of today's AI agents are applications in the OpenAI ecosystem. With our API approach, Gaia is an alternative to OpenAI. Each Gaia node has the ability to be customized with a fine-tuned model supplemented by domain knowledge which eliminates the generic responses many have come to expect. For example, a Gaia node for a financial analyst agent can write SQL code to query SEC 10K filings to respond to user questions. 

Similar Gaia nodes are organized into Gaia domains, to provide stable services by load balancing across the nodes. Gaia domains have public-facing URLs and promote agent services to their communities. When a user or an agent app sends an API request to the domain's API endpoint URL, the domain is responsible for directing the request to a node that is ready. 

## Next steps:

### Users

If you are an end user of AI agent applications, you can:

* [Find a list of interesting Gaia nodes you can chat with on the web, or access via API](/nodes).
* [Use a Gaia node as the backend AI engine for your favorite AI agent apps](/agent-integrations). 

### Node operators

If you are interested in running Gaia nodes, you can

* [Get started with a Gaia node](/getting-started/quick-start).
* [Customize the Gaia node with a finetuned model and custom knowledge base](/getting-started/customize).
* [Join the Gaia Protocol](/getting-started/register)
* [Explore the Gaia CLI toolkit](/getting-started/gaia-toolkit)

### Domain operators

If you are a Gaia Domain Name owner, you can

* [Launch your domain](/domain-guide/quick-start)


### Creators

If you are a creator or knowledge worker interested in creating your own AI agent service, you can:

* [Create your own knowledge base](/knowledge-bases).
* [Finetune a model to "speak" like you](/tutorial/llamacpp).