---
sidebar_position: 3
---

# LobeChat + GaiaNet

You can configure [LobeChat](https://lobehub.com/) to use a GaiaNet node as its backend LLM API. It provides a richer and more customizable UI than the default GaiaNet chatbot UI.

## Steps

**Step 1: Set up the GaiaNet node API base url as the OpenAI provider**

Go to the [Language Model Setting page](https://chat-preview.lobehub.com/settings/modal?agent=&session=inbox&tab=llm) and choose OpenAI.

1. Enter a random string in the OpenAI API Key field. It does not matter what you enter here since we are going to ignore it on the backend.
2. Enter the GaiaNet node API base URL in the API Proxy Address field. For example, you can use `https://llama3.gaianet.network/v1` here.
3. Enable Use Client-Side Fetching Mode
4. Click on the Get Model List text and it will automatically fetch LLMs available on the GaiaNet node. Choose the chat model here.
5. Optional: click on the Check button to check the connection status.

![](lobechat-gaianet-01.png)


**Step 2: Start chatting via the LobeChat UI**

Next, let's go back to the chat page. Before start chatting, choose the model you just chose in the previous step around **Just Chat**.

Now you can chat with the GaiaNet node via LobeChat.

![](lobechat-gaianet-02.png)
