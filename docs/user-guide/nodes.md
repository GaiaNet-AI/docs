---
sidebar_position: 1
---

# Available GaiaNet nodes

Each GaiaNet node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](apps/intro) section to see how
to use the GaiaNet API in your favorite agent frameworks or apps.

## Llama 3 8b

This node runs a plain Llama 3 8b model without any additional knowledge. 
[Chat with it](https://llama3.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama3.gaianet.network/v1 |
| Model Name (for LLM) | Meta-Llama-3-8B-Instruct.Q5_K_M |
| Model Name (for Text embedding) | all-MiniLM-L6-v2-ggml-model-f16 |
| API key | Empty or any value |


## Llama 3 70b

This node runs a plain Llama 3 70b model without any additional knowledge. 
[Chat with it](https://0xf8bf989ce672acd284309bbbbf4debe95975ea77.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://0xf8bf989ce672acd284309bbbbf4debe95975ea77.gaianet.network/v1 |
| Model Name (for LLM) | Meta-Llama-3-70B-Instruct-Q5_K_M |
| Model Name (for Text embedding) | all-MiniLM-L6-v2-ggml-model-f16 |
| API key | Empty or any value |

## Chemistry teacher

This node runs a finetuned Llama 3 8b model with a knowledge base of chemical elements and high school chemistry.
[Chat with it](https://0xc5f90fa1812dd7e27a26f1699954fe2d72e72299.gaianet.network/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://0xc5f90fa1812dd7e27a26f1699954fe2d72e72299.gaianet.network/v1 |
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

