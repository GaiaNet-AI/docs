---
sidebar_position: 6
---

# FlowiseAI + GaiaNet

FlowiseAI is a low-code tool for developers to build customized LLM orchestration flows & AI agents. You can configure the Flowise tool using any Gaianet Node as the backend LLM API.


## Start the FlowiseAI

Follow [the FlowiseAI guide](https://docs.flowiseai.com/getting-started) to install Flowise locally

```
npm install -g flowise
npx flowise start
```

After running successfully, you can open http://localhost:3000 to check out the Flowise AI tool.

## Steps

FlowiseAI allows you to combine all the components to build a workflow agent. If you're new to FlowiseAI, it's recommended to use a template quick start. In fact, there are lots of templates around OpenAI in the Flowise marketplace. All we need to do is to replace the ChatOpenAI component with the ChatLocalAI component.

Let's take the simple Advanced Structured Output Parser as an example. The original template was built with OpenAI and we will now change it to use an open source LLM on a GaiaNet node.

You will need to delete the ChatOpenAI component and click the + button to search ChatLocalAI and then drag the ChatLocalAI to the screen.

![](flowise-01.png)

Then, you will need to input the GaiaNet node base URL `https://node_id.us.gaianet.network/v1` and the model name. You can get the model via the following command line.

```
# Replace your node id here

curl -X POST https://node_id.us.gaianet.network/v1/models
```
Next, connect the ChatLocalAI component with the field `Language model` in the LLM chain component.

Let's go through the LLM chain component. You don't need to do anything here.

Finaly, send a question like "list the most popular 5 books in the world" after saving the current chatflow. 

![](flowise-02.png)

And you will get the answer in the JSON format.










