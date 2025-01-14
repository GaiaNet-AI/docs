---
sidebar_position: 8
---

# 📄 Litepaper

# GaiaNet: GenAI Agent Network

## Abstract

Specialized, finetuned and RAG-enhanced open-source Large Language Models are key elements in emerging AI agent applications. However, those agent apps also present unique challenges to the traditional cloud computing and SaaS infrastructure, including new requirements for application portability, virtualization, security isolation, costs, data privacy, and ownership. 

GaiaNet is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise. A GaiaNet node consists of a high-performance and cross-platform application runtime, a finetuned LLM, a knowledge embedding model, a vector database, a prompt manager, an open API server, and a plugin system for calling external tools and functions using LLM outputs. It can be deployed by any knowledge worker as a digital twin and offered as a web API service. A new class of tradeable assets and a marketplace could be created from individualized knowledge bases and components. Similar GaiaNet nodes are organized into GaiaNet domains, which offer trusted and reliable AI agent services to the public. The GaiaNet node and domains are governed by the GaiaNet DAO (Decentralized Autonomous Organization). Through Purpose Bound Money smart contracts, the GaiaNet network is a decentralized marketplace for AI agent services. 

## Introduction

The emergence of ChatGPT and Large Language Model (LLM) has revolutionized how humans produce and consume knowledge. Within a year, AI-native applications have evolved from chatbots to copilots, to agents.

> AI agents would increasingly evolve from supportive tools (akin to Copilots) to autonomous entities capable of completing tasks independently. — Dr. Andrew Ng at Sequoia Capital AI Ascent 2024 Summit

Agents are software applications that can complete tasks on its own autonomously like a human. The agent can understand the task, plan the steps to complete the task, execute all the steps, handle errors and exceptions, and deliver the results. While a powerful LLM could act as the “brain” for the agent, we need to connect to external data sources (eyes and ears), domain-specific knowledge base and prompts (skills), context stores (memory), and external tools (hands). For agent tasks, we often need to customize the LLM itself 

* to reduce hallucinations in a specific domain. 
* to generate responses in a specific format (e.g., a JSON schema). 
* to answer “politically incorrect” questions (e.g., to analyze CVE exploits for an agent in the security domain). 
* and to answer requests in a specific style (e.g., to mimic a person). 

![What is a GaiaNet agent](gaianet_agent.png)

Agents are complex software that require significant amount of engineering and resources. Today, most agents are close-source and hosted on SaaS-based LLMs. Popular examples include GPTs and Microsoft/GitHub copilots on OpenAI LLMs, and Duet on Google’s Gemini LLMs. 

However, as we discussed, a key requirement for agents is to customize and adapt its underlying LLM and software stack for domain-specific tasks — an area where centralized SaaS perform very poorly. For example, with ChatGPT, every small task must be handled by a very large model. It is also enormously expensive to fine-tune or modify any ChatGPT models. The one-size-fits-all LLMs are detrimental to the agent use case in capabilities, alignment, and cost structure. Furthermore, the SaaS hosted LLMs lack privacy controls on how the agent’s private knowledge might be used and shared. Because of these shortcomings, it is difficult for individual knowledge workers to create and monetize agents for his or her own domain and tasks on SaaS platforms like OpenAI, Google, Anthropic, Microsoft and AWS. 

In this paper, we propose a decentralized software platform and protocol network for AI agents for everyone. Specifically, our goals are two-folds. 

**Goal #1:** Empower individuals to incorporate his/her private knowledge and expertise into personal LLM agent apps. Those apps aim to perform knowledge tasks and use tools just as the individual would, but also reflect the individual’s style and values.

**Goal #2:** Enable individuals to provide and scale their LLM agents as services, and get compensated for their expertise and work.

> GaiaNet is “YouTube for knowledge and skills.”

## Open-source and decentralization

As of April 2024, there are over 6000 open-source LLMs published on Hugging face. Compared with close-source LLMs, such as GPT-4, open-source LLMs offer advantages in privacy, cost, and systematic bias. Even with general QA performance, open-source LLMs are closing the gap with close-source counterparties quickly. 

![Open vs close source LLMs](closed_vs_open.jpg)

For AI agent use cases, it has been demonstrated that smaller but task-specific LLMs often outperform larger general models. 

However, it is difficult for individuals and businesses to deploy and orchestrate multiple finetuned LLMs on their own heterogeneous GPU infrastructure. The complex software stack for agents, as well as the complex interaction with external tools, are fragile and error-prone. 

Furthermore, LLM agents have entirely different scaling characteristics than past application servers. LLM is extremely computationally intensive. A LLM agent server can typically only serve one user at a time, and it often blocks for seconds at a time. The scaling need is no longer to handle many async requests on a single server, but to load balance among many discrete servers on the internet scale.

The GaiaNet project provides a cross-platform and highly efficient SDK and runtime for finetuned open-source LLMs with proprietary knowledge bases, customized prompts, structured responses, and external tools for function calling. A GaiaNet node can be started in minutes on any personal, cloud, or edge device. It can then offer services through an incentivized web3 network. 

## GaiaNet node

The basic operational unit in the GaiaNet network is a node. A GaiaNet node is a streamlined software stack that allows any technically competent person to run an AI agent of his own. The software stack on the GaiaNet node consists of the following 7 key components.

![GaiaNet node architecture](gaianet_node.png)

**1 Application runtime.** GaiaNet applications run in a lightweight, secure and high-performance sandbox called WasmEdge. As an open-source project managed by the Linux Foundation and CNCF, WasmEdge runtime works seamlessly with leading cloud native tools such as Docker, containerd, CRI-O, Podman and Kubernetes. It is also the virtual machine of choice by leading public blockchains to securely and efficiently execute on-chain and off-chain smart contracts. 

WasmEdge is a high-performance and cross-platform runtime. It can run AI models on almost all CPUs, GPUs, and AI accelerators at native speed, making it an ideal runtime for decentralized AI agents.

**2 Finetuned LLM.** The GaiaNet node supports almost all open-source LLMs, multimodal models (eg Large Vision Models or LVMs), text-to-image models (eg Stable Diffusion) and text-to-video models. That includes all finetuned models using personal or proprietary data. 

The node owner can finetune open-source models using a wide variety of tools. For example, the node owner can finetune an LLM using personal chat histories so that the finetuned LLM can mimic his own speaking style. He can also finetune an LLM to focus it on a specific knowledge domain to reduce hallucinations and improve answer quality for questions in that domain. A finetuned LLM can guarantee to output JSON text that matches a pre-determined schema for use with external tools.

Besides LLMs, the node owner could finetune Stable Diffusion models with her own photos to generate images that look like her. 

**3 Embedding model.** The GaiaNet node needs to manage a body of public or proprietary knowledge for the AI agent. It is a key feature that enables the agent to specialize and outperform much larger models in a specific domain.  The embedding models are specially trained LLMs that turns input sentences into a vector representation, instead of generating completions. Since the embedding models are trained from LLMs, they can “embed” the “meaning” of the sentences into the vectors so that similar sentences are located close together in the high dimensional space occupied by those vectors.

With the embedding model, a GaiaNet node can ingest a body of text, images, PDFs, web links, audio and video files, and generate a collection of embedding vectors based on their contents. The embedding model also turns user questions and conversations into vectors, which allows the GaiaNet node to quickly identify contents in its knowledge base that are relevant to the current conversation. 

**4 Vector database.** The embedding vectors that form GaiaNet node’s knowledge base are stored on the node itself for optimal performance and maximum privacy. The GaiaNet node includes a Qdrant vector database. 

**5 Custom prompts.** Besides finetuning and knowledge arguments, the easiest way to customize an LLM for new applications is simply to prompt it. Like humans, LLMs are remarkable one-shot learners. You can simply give it an example of how to accomplish a task, and it will learn and do similar tasks on its own. Prompt engineering is a practical field to research and develop such prompts.

Furthermore, effective prompts could be highly dependent on the model in use. A prompt that works well for a large model, such as Mixtral 8x22b, is probably not going to work well for a small model like Mistral 7b.

The GaiaNet node can support several different prompts that are dynamically chosen and used in applications. For example,

* The `system_prompt` is a general introduction to the agent task the node is supposed to perform. It often contains a persona to help the LLM respond with the right tone. For example, the `system_prompt` for a college teaching assistant could be: “You are a teaching assistant for UC Berkeley’s computer science 101 class. Please explain concepts and answer questions in detail. Do not answer any question that is not related to math or computer science.”
* The `rag_prompt` is a prefix prompt to be dynamically inserted in front of knowledge base search results in an RAG chat. It could be something like this: “Please answer the question based on facts and opinions in the context below. Do not make anything that is not in the context. ---------”

The LLM community has developed many useful prompts for different application use cases. GaiaNet node allows you to easily manage and experiment with them. 

Through the our developer SDK, GaiaNet owners and operators could customize the logic of dynamic prompt generation in their own way. For example, a GaiaNet node could perform a Google search for any user question, and add the search results into the prompt as context.

**6 Function calls and tool use.** The LLM not only is great at generating human language, but also excels at generating machine instructions. Through finetuning and prompt engineering, we could get some LLMs to consistently generate structured JSON objects or computer code in many language tasks, such as summarizing and extracting key elements from a paragraph of text.

The GaiaNet node allows you to specify the output format of the generated text. You can give it a grammar specification file to enforce that responses will always conform to a pre-defined JSON schema.

Once the LLM returns a structured JSON response, the agent typically need to pass the JSON to a tool that performs the task and comes back with an answer. For example, the user question might be. 

```
What is the weather like in Singapore?
```

The LLM generates the following JSON response. 

```
{"tool":"get_current_weather", "location":"Singapore","unit":"celsius"}
```

The GaiaNet node must know what is the tool associated with get_current_weather and then invoke it. GaiaNet node owners and operators can configure any number of external tools by mapping a tool name with a web service endpoint. In the above example, the get_current_weather tool might be associated with a web service that takes this JSON data. The GaiaNet node sends the JSON to the web service endpoint via HTTPS POST and receives an answer. 

```
42
```

It then optionally feeds the answer to the LLM to generate a human language answer. 

```
The current weather in Singapore is 42C. 
```

Through the GaiaNet node SDK, developers are not limited to using web services. They can write plugins to process LLM responses locally on the node. For example, the LLM might return Python code, which can be executed locally in a sandbox and for the GaiaNet node to perform a complex operation. 

**7 The API server.** All GaiaNet nodes must have the same API for questions and answers. That allows front-end applications to work with, and potentially be load-balanced to any GaiaNet node. We choose to support the OpenAI API specification, which enables GaiaNet nodes to become drop-in replacements for OpenAI API endpoints for a large ecosystem of applications.

The API server runs securely and cross-platform on the WasmEdge runtime. It ties together all the other components in the GaiaNet node. It receives user requests, generates an embedding from the request, searches the vector database, adds search results to the prompt context, generates an LLM response, and then optionally uses the response to perform function calling. The API server also provides a web-based chatbot UI for users to chat with the RAG-enhanced finetuned LLM on the node.

## GaiaNet network

While each GaiaNet node is already a powerful AI agent capable of answering complex questions and performing actions, individual nodes are not suitable for providing public services. There are several important reasons.

* For the public consumers and users, it is very hard to judge the trustworthiness of individual GaiaNet nodes. Harmful misinformation could be spread by malicious node operators.
* For GaiaNet node owners and operators, there is no economic incentive to provide such services to the public, which could be very costly to run.
* The AI agent servers have very different scaling characteristics than traditional internet application servers. When the agent is processing a user request, it typically takes up all the computing resources on the hardware. Instead of using software to scale concurrent users on a single server, the challenge of GaiaNet is to scale to many different identical nodes for a large application. 

Those challenges have given rise to the GaiaNet domain, which forms the basis of the GaiaNet web3 network. A GaiaNet domain is a collection of GaiaNet nodes available under a single Internet domain name. The domain operator decides which GaiaNet nodes can be registered under the domain and makes the node services available to the public. For example, a GaiaNet domain might be a Computer Science teaching assistant for UC Berkeley. The domain could provide services through `https://cs101.gaianet.berkeley.edu`. The domain operator needs to do the following. 

* Verify and admit individual nodes to be registered under the domain. Those nodes must all meet requirements, such as the LLM, knowledge base, and prompts, set by the domain operator to ensure service quality. The node registration on a domain could be done via a whitelist or blacklist. It is up to the domain operator.
* Monitor each node’s performance at real time and remove inactive ones.
* Promotes the “teaching assistant” chatbot apps to the target audience.
* Set the price for the API services. 
* Load balance between active nodes.
* Getting paid by users. 
* Pay nodes for their services.

![GaiaNet network architecture](gaianet_eco.png)

Each GaiaNet node has an unique node ID in the form of an ETH address. The private key associated with the ETH address is stored on the node. Once a node is successfully registered with a domain, it is entitled to receive payments from both service revenue and network awards from the domain. The domain could send payments directly to the node's ETH address. Or, the domain could provide a mechanism for a node operator to register multiple nodes under a single Metamask address, such as signing a challenge phrase using the node private keys. In that case, the node operator will receive aggregated payments in his Metamask account for all associated nodes.

Each GaiaNet domain has an associated smart contract that is used for escrow payments. It is similar to OpenAI’s credit payment model, where users purchase credits first, and then consume them over time. When the user pays into the smart contract, an access token will be automatically issued to him. He uses this token to make API calls to the domain, which is then load-balanced to random nodes in the domain. As the user consumes those services, his fund in the contract depletes and the access token stops working if he no longer has any balance. 

The pricing and payment of the API service are determined by the domain operator. It is typically denominated in USD stable coins. The domain operator pays a share of the revenue to node operators who provided the services. The GaiaNet network is a decentralized marketplace of agent services.

> The funds locked in GaiaNet domain contracts are for a single purpose of consuming API services. It is called Purpose Bound Money. 

A key aspect of the GaiaNet protocol is that the domain operators are “trust providers” in the ecosystem of decentralized nodes. The protocol network is designed to incentivize the trust of the operators through tokenomics designs such as mining and staking. GaiaNet nodes, domains, users, and developers form a DAO to grow the network and benefit all contributors.

## GaiaNet token

The GaiaNet token is a utility token designed to facilitate transactions, support governance, and foster trust in the network. It serves three primary purposes.

* As a DAO governance token, holders can participate in setting the rules of the network.
* As a staking token, holders vouch for domain operators’ trustworthiness. Stakers get a cut from the domain operator’s service revenue. But they could also be slashed if the domain operator misbehave, such as spreading misinformation or providing unreliable services.
* As a payment token, the GaiaNet token could be deposited into the domain’s escrow contract and be used to pay for services over time. 

The payment utility of the GaiaNet token is designed to balance the network supply and demand. The value of the GaiaNet token asset is determined at the time when it enters or leaves the escrow smart contract based on real-time exchange rates.

Service consumers could lock in savings from the potential appreciation of the token. For example, if a user deposits $100 worth of GaiaNet tokens into the contract, and when the domain and nodes get paid, the token value has gone up to $110, he would have received $110 worth of agent services. 

Conversely, if the token price drops, the service providers (domains and nodes) now have an opportunity to “mine” the tokens on the cheap. If the $100 initial tokens is only worth $90 now, service providers will get more tokens for each unit of electricity and compute they provide. That incentivizes more nodes to join the network and speculate on a later rise in token value.

> An exercise: OpenAI is projected to reach $5 billion in ARR in 2024. Assume that most enterprise customers pay quarterly, that is $1.25 billion of circulation market cap in addition to OpenAI’s current enterprise value if they were to issue a payment token. The overall AI services market size is projected to reach $2 trillion in a few years. That translates to $500 billion market cap for a payment utility token alone. 

## Component marketplace for AI assets

GaiaNet is a developer platform to create your agent services. We provide tools for you to do these. 

* Tools to generate finetuning datasets and perform finetuning on CPU and GPU machines.
* Tools to ingest documents and create vector embeddings for the knowledge base. 
* Rust-based SDK to dynamically generate and manage prompts. 
* Rust-based SDK to extend the agent’s capability for invoking tools and software on the node.

For developers who do not wish to operate nodes, we are building a marketplace for 

* finetuned models
* knowledge bases and datasets
* function-calling plugins

All those components are blockchain-based assets represented by NFTs. A node operator could purchase NFTs for the components it wishes to use, and share service revenue with the component developers. That enables diverse and cashflow-generating assets to be issued from the GaiaNet ecosystem.

## Conclusion

GaiaNet provides open-source tools for individuals and teams to create agent services using their proprietary knowledge and skills. Developers could create finetuned LLMs, knowledge collections, and plugins for the agent, and issue assets based on those components. The GaiaNet protocol makes those nodes discoverable and accessible through GaiaNet domains.


