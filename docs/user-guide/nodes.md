---
sidebar_position: 1
---

# Public GaiaNet nodes

Each GaiaNet node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](apps/intro) section to see how
to use the GaiaNet API in your favorite agent frameworks or apps.

## Llama

This node runs a plain Llama 3 8b model without any additional knowledge. 
[Chat with it](https://llama.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama.us.gaianet.network/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Tool use Llama

This node runs a Llama 3 Groq 8b model finetuned for tool use. 
You can send it a list of tools and a request. It will respond with a tool call to answer that request.
[Learn more](../tutorial/tool-call.md) how to use tool call models in your agent app.
Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llamatool.us.gaianet.network/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Phi

This node runs a plain Phi 3 mini model without any additional knowledge. 
[Chat with it](https://phi.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://phi.us.gaianet.network/v1 |
| Model Name (for LLM) | phi |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Gemma

This node runs a plain Gemma 2 27b model without any additional knowledge. 
[Chat with it](https://gemma.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://gemma.us.gaianet.network/v1 |
| Model Name (for LLM) | gemma |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Codestral

This node runs a plain Codestral model without any additional knowledge. 
[Chat with it](https://codestral.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://codestral.us.gaianet.network/v1 |
| Model Name (for LLM) | codestral |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |


## Chemistry teacher

This node runs a finetuned Llama 3 8b model with a knowledge base of chemical elements and high school chemistry.
[Chat with it](https://chemistry.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://chemistry.us.gaianet.network/v1 |
| Model Name (for LLM) | chemistry |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Bible pastor

This node runs a finetuned Llama 3 8b model with a knowledge base of Bible teachings of everyday events and emotions.
[Chat with it](https://bible.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://bible.us.gaianet.network/v1 |
| Model Name (for LLM) | pastor |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |


## Ethereum founder

This node runs a Llama 2 13b model finetuned with Ethereum founder Vitalik Buterin's blog posts. The finetuned model is supplemented by blockchain and crypto knowledge base.
[Chat with it](https://vitalik.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://vitalik.gaianet.network/v1 |
| Model Name (for LLM) | vitalik.eth-7b-q5_k_m |
| Model Name (for Text embedding) | all-MiniLM-L6-v2-ggml-model-f16 |
| API key | Empty or any value |

