---
sidebar_position: 2
---

# Dify + GaiaNet

You can configure the Dify framework using any GaiaNet node as the backend LLM API. That allows you to use your own
or community GaiaNet nodes in any application built on Dify. It supports

* The hosted [Dify.ai](https://dify.ai/) service.
* Products and services with embedded Dify framework, such as the [Terminus](https://www.jointerminus.com/) project.
* Any product that is built on the open source [Dify framework](https://github.com/langgenius/dify).

## Steps

First, log into Dify's web portal and select `Settings | Model Provider`. From the list, you can add an OpenAI-API-compatible provider.

Add an LLM model with the model name and API endpoint listed on your GaiaNet node's web dashboard. Or, you can just add [a popular GaiaNet node](../nodes).
Leave the API Key field empty.

![Configure a GaiaNet Llama3 8b model in Dify](dify_chat.png)

Most Dify applications also require an embedding model to search text in the vector space.
Add an embedding model with the model name and API endpoint listed on your GaiaNet node's web dashboard. Or, you can just add [a popular GaiaNet node](../nodes).
Leave the API Key field empty.

![Configure a GaiaNet embedding model in Dify](dify_embedding.png)

That's it. You can now see that the new models are available at the top panel of Dify for every chatbot or agent. Just select your GaiaNet models for chat or embedding, and the Dify app will automatically use it!

![Select a GaiaNet node as backend model in Dify](dify_select.png)

![Chat with the GaiaNet Llama3 8b model in Dify](dify_chatbot_ui.png)

