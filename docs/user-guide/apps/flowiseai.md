---
sidebar_position: 6
---

# FlowiseAI + GaiaNet

FlowiseAI is a low-code tool for developers to build customized LLM orchestration flows & AI agents. You can configure the Flowise tool using any Gaianet Node as the backend LLM API.

## Start a FlowiseAI server

Follow [the FlowiseAI guide](https://docs.flowiseai.com/getting-started) to install Flowise locally

```
npm install -g flowise
npx flowise start
```

After running successfully, you can open http://localhost:3000 to check out the Flowise AI tool.

## Build a documents QnA chatbot

FlowiseAI allows you to visualy set up all the workflow components for an AI agent. If you're new to FlowiseAI, it's recommended to use a template quick start. In fact, there are lots of templates around OpenAI in the Flowise marketplace. All we need to do is to replace the ChatOpenAI component with the ChatLocalAI component.

Let's take the ***Flowise Docs QnA* as an example. You can build a QnA chatbot based on your documents. In this example, we would like to chat with a set of documents in a GitHub repo. The default template was built with OpenAI and we will now change it to use an open-source LLM on a GaiaNet node. Of course, you must have access to a 
[GaiaNet node](https://github.com/GaiaNet-AI/gaianet-node/blob/main/README.md). I recommend running the 
[Llama-3-8b + monic-embed](https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3-8b-instruct) models on your GaiaNet node.

### Connect the chat model API

You will need to delete the ChatOpenAI component, and click the + button to search ChatLocalAI and then drag the ChatLocalAI to the screen.

![](flowise-03.png)

Then, you will need to input the GaiaNet node base URL `https://node_id.us.gaianet.network/v1` and the model name. You can get the model via the following command line.

```
# Replace your node id here

curl -X POST https://node_id.us.gaianet.network/v1/models
```

Next, connect the ChatLocalAI component with the field `Chat model` in the **Conversational Retrieval QA Chain** component.

### Connect the embedding model API

The default template uses the OpenAI Embeddings component to create embeddings for your documents. We need to replace the **OpenAI Embeddings** component with the **LocalAI Embeddings** component.

* Use the GaiaNet node base URL `https://node_id.us.gaianet.network/v1` in the Base Path field.
* Input the model name in the Model Name field.

Next, connect the **LocalAI Embeddings** component with the field `embedding` in the **In-Memory Vector Store** component.

### Set up your documents

Then, let's go through the GitHub component to connect the chat application to our documents on GitHub. You will need to put your docs GitHub link into the **Repo Link** field. For example, you can put GaiaNet's docs link: `https://github.com/GaiaNet-AI/docs/tree/main/docs`.

### Give it a try

You can send a question like "How to install a GaiaNet node" after saving the current chatflow. 

![](flowise-04.png)

And you will get the answer based on the GaiaNet docs, which is more accurate.

## More examples

There are lots of examples on the Flowise marketplace. To build a Flowise agent based on GaiaNet, simply replace the **Chat OpenAI** and **OpenAI Embeddings** component with the GaiaNet base URL.
