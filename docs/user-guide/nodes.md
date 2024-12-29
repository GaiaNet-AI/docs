---
sidebar_position: 1
---

# Public GaiaNet nodes

Each GaiaNet node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](apps/intro) section to see how
to use the GaiaNet API in your favorite agent frameworks or apps.

Gaia nodes are organized into Gaia domains to provide public services. Each domain has a single
API endpoint that load-balances across multiple nodes to ensure service availability. Below are some
Gaia domains we provider for free to the public.

## Public Gaia domains

### LLM: Llama 8b

This domain runs Llama 3.1 8b agent nodes without any additional knowledge. 
It is capable of tool / function calling.
[Learn more](../tutorial/tool-call.md) how to use tool call models in your agent app.
[Chat with it](https://llama8b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama8b.gaia.domains/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Voice-to-text: Whisper v2 large

This domain runs Whisper v2 Large agent nodes for voice to text transcription and translation.
Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://whisper.gaia.domains/v1 |
| Model Name | whisper |
| API key | Empty or any value |

### Text-to-image: Realistic vision

This domain runs stable diffusion agent nodes fine-tuned to generate realistic portraits.
The model is [Realistic Vision V6.0 B1](https://civitai.com/models/4201/realistic-vision-v60-b1).
Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://portrait.gaia.domains/v1 |
| Model Name | portrait |
| API key | Empty or any value |

### Text-to-voice: GPT-SoVITS

Coming soon!

## Coding assistant agents

### Coder

A general coding agent running a STOA coder LLM.
It is a highly capable but slow model.
[Chat with it](https://coder.gaia.domains/chatbot-ui/index.html) or use it from an IDE tool, such as [Cursor AI](apps/cursor) or [Zed](apps/zed). 
Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://coder.gaia.domains/v1 |
| Model Name (for LLM) | coder |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Rust Coder

A coding agent supplemented with open-source [Rust content](https://huggingface.co/datasets/gaianet/learn-rust) from the Rust Foundation and published books.
[Chat with it](https://rustcoder.gaia.domains/chatbot-ui/index.html) or use it from an IDE tool, such as [Cursor AI](apps/cursor) or [Zed](apps/zed).
Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://rustcoder.gaia.domains/v1 |
| Model Name (for LLM) | rustcoder |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Alternative LLM domains

### Llama 3b

This domain runs plain Llama 3.2 3b agent nodes without any additional knowledge.
[Chat with it](https://llama3b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama3b.gaia.domains/v1 |
| Model Name (for LLM) | llama3b |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Qwen 7b

The Qwen 7b LLM is great for non-English tasks such as translation.
[Chat with it](https://qwen7b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://qwen7b.gaia.domains/v1 |
| Model Name (for LLM) | qwen7b |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |


### Qwen 72b

The Qwen 72b LLM is a top open source LLM. It is very capable but could also be slow.
It is capable of tool / function calling.
[Learn more](../tutorial/tool-call.md) how to use tool call models in your agent app.
[Chat with it](https://qwen72b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://qwen72b.gaia.domains/v1 |
| Model Name (for LLM) | qwen72b |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

