---
sidebar_position: 1
---

# Public GaiaNet nodes

Each GaiaNet node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](apps/intro) section to see how
to use the GaiaNet API in your favorite agent frameworks or apps.

## Llama

This node runs a plain Llama 3 8b model without any additional knowledge. 
[Chat with it](https://llama.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama.us.gaianet.network/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Gemma

This node runs a plain Gemma 2 27b model without any additional knowledge. 
[Chat with it](https://gemma.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://gemma.us.gaianet.network/v1 |
| Model Name (for LLM) | gemma |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Codestral

This node runs a plain Codestral model without any additional knowledge. 
[Chat with it](https://codestral.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://codestral.us.gaianet.network/v1 |
| Model Name (for LLM) | codestral |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |


## Chemistry teacher

This node runs a finetuned Llama 3 8b model with a knowledge base of chemical elements and high school chemistry.
[Chat with it](https://chemistry.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://chemistry.us.gaianet.network/v1 |
| Model Name (for LLM) | Meta-Llama-3-8B-Instruct-Q5_K_M |
| Model Name (for Text embedding) | nomic-embed-text-v1.5-f16 |
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

