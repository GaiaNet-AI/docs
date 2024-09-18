---
sidebar_position: 1
---

# Public GaiaNet nodes

Each GaiaNet node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](apps/intro) section to see how
to use the GaiaNet API in your favorite agent frameworks or apps.

## Llama

This node runs an Llama 3.1 8b model without additional knowledge base. 
[Chat with it](https://llama.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama.us.gaianet.network/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Tool use Llama

This node runs an Llama 3 Groq 8b model finetuned for tool use. 
You can send it a list of tools and a request. It will respond with a tool call to answer that request.
[Learn more](../tutorial/tool-call.md) how to use tool call models in your agent app.
Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llamatool.us.gaianet.network/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Yi Coder

This node runs a Yi Coder 9b model without additional knowledge base. 
[Chat with it](https://yicoder.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://yicoder.us.gaianet.network/v1 |
| Model Name (for LLM) | yicoder |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Phi

This node runs a Phi 3 mini model without additional knowledge base. 
[Chat with it](https://phi.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://phi.us.gaianet.network/v1 |
| Model Name (for LLM) | phi |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Gemma

This node runs a Gemma 2 9b model without additional knowledge base. 
[Chat with it](https://gemma.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://gemma.us.gaianet.network/v1 |
| Model Name (for LLM) | gemma |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Chemistry teacher

This node runs a finetuned Llama 3.1 8b model with a knowledge base of chemical elements and high school chemistry.
[Chat with it](https://chemistry.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://chemistry.us.gaianet.network/v1 |
| Model Name (for LLM) | chemistry |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Bible pastor

This node runs a finetuned Llama 3,1 8b model with a knowledge base of Bible teachings of everyday events and emotions.
[Chat with it](https://bible.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://bible.us.gaianet.network/v1 |
| Model Name (for LLM) | pastor |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |


