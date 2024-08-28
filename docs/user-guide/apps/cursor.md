---
sidebar_position: 4
---


# Cursor

Cursor is a programming pair assistant, powered by LLMs, for developers. It's an alternative to GitHub copilot. You can configure a Gaia node as the LLM backend to generate code for you.

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use a public codestral node to power the Cursor.

| Model type | API base URL | Model name |
|-----|--------|-----|
| Chat | https://llama.us.gaianet.network/v1/ | llama |

## Configure Cursor

Firstly, you will need to download [Cursor](https://www.cursor.com/).

After the installation, click the settings button on the top right button. Then, click on Models to configure the model.

Firstly, we will need to add a model named `llama` and turn off all the other models like gpt4O.

Secondly, go to the OpenAI API Key section and click on Override OpenAI Base URL. Type `https://llama.us.gaianet.network/v1` here.

As for the OpenAI key part, write several characters here. Click on Verfiy to test if the connection is correct.

![](cursor-01.png)


## Use Cursor

You can use 

* command + K to edit the specified code
* command + L to open the chat room and ask questions about the code.
  
![](cursor-02.png)
