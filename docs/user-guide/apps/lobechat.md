---
sidebar_position: 3
---

# LobeChat + GaiaNet

You can configure the LobeChat UI/framework use any GaiaNet node as the backend LLM API. 

## Steps

**Step 1: Set up the GaiaNet node API base url as the OpenAI provider**

Go to the [Language Model Setting page](https://chat-preview.lobehub.com/settings/modal?agent=&session=inbox&tab=llm) and choose OpenAI.

1. Input some random characters in the OpenAI API Key field.
2. Input the GaiaNet node API base URL in the API Proxy Address field. For example, you can input `https://llama3.gaianet.network/v1` here.
3. Enable Use Client-Side Fetching Mode
4. Click on the Get Model List text and it will automatically fetch 
the LLM along with the GaiaNet node. Choose the chat model here.
5. Optional: click the Check button to check the connection status.

![](lobechat-gaianet-01.png)


**Step 2: Start chatting via the LobeChat UI**

Next, let's go back to the chat page. Before start chatting, choose the model you just chose in the previous step around **Just Chat**.

Now you can chat with the node via LobeChat.

![](lobechat-gaianet-02.png)
