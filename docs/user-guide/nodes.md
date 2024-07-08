---
sidebar_position: 1
---

# Public GaiaNet nodes

Each GaiaNet node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](apps/intro) section to see how
to use the GaiaNet API in your favorite agent frameworks or apps.

## Llama 3 8b

This node runs a plain Llama 3 8b model without any additional knowledge. 
[Chat with it](https://llama-3-8b.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama-3-8b.us.gaianet.network/v1 |
| Model Name (for LLM) | Meta-Llama-3-8B-Instruct.Q5_K_M |
| Model Name (for Text embedding) | nomic-embed-text-v1.5.f16 |
| API key | Empty or any value |

## Gemma 2 9b

This node runs a plain Gemma 2 9b model without any additional knowledge. 
[Chat with it](https://gemma-2-9b.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://gemma-2-9b.us.gaianet.network/v1 |
| Model Name (for LLM) | gemma-2-9b-it-Q5_K_M |
| Model Name (for Text embedding) | nomic-embed-text-v1.5.f16 |
| API key | Empty or any value |

## Gemma 2 27b

This node runs a plain Gemma 2 27b model without any additional knowledge. 
[Chat with it](https://gemma-2-27b.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://gemma-2-27b.us.gaianet.network/v1 |
| Model Name (for LLM) | gemma-2-27b-it-Q5_K_M |
| Model Name (for Text embedding) | nomic-embed-text-v1.5.f16 |
| API key | Empty or any value |

## Codestral 22B v0.1

This node runs a plain Codestral 22B v0.1 model without any additional knowledge. 
[Chat with it](https://codestral-01-22b.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://codestral-01-22b.us.gaianet.network/v1 |
| Model Name (for LLM) | Codestral-22B-v0.1-hf-Q5_K_M |
| Model Name (for Text embedding) | nomic-embed-text-v1.5.f16 |
| API key | Empty or any value |

## Phi 3 Medium 128k

This node runs a plain Phi 3 Medium 128k model without any additional knowledge. 
[Chat with it](https://phi-3-medium-128k.us.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://phi-3-medium-128k.us.gaianet.network/v1 |
| Model Name (for LLM) | Phi-3-medium-128k-instruct-Q5_K_M |
| Model Name (for Text embedding) | nomic-embed-text-v1.5.f16 |
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

