---
sidebar_position: 6
---

# 🌐 Public Gaia Domain

Each Gaia node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](./agent-integrations/intro) section to see how
to use the Gaia API in your favorite agent frameworks or apps.

Gaia nodes are organized into Gaia domains to provide public services. Each domain has a single API endpoint that load-balances across multiple nodes to ensure service availability. 

Below are some Gaia domains we offer developers for free. **However, you must apply for a developer account to access these domains**.

## Public Gaia domains

### Voice-to-text: Whisper v2 large

This domain runs Whisper v2 Large agent nodes for voice to text transcription and translation.
Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://whisper.gaia.domains/v1 |
| Model Name | whisper |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |

### Text-to-image: Realistic vision

Coming soon!

### Text-to-voice: GPT-SoVITS

Coming soon!

## Coding assistant agents

### Coder

A general coding agent running a STOA coder LLM.
It is a highly capable but slow model.
[Chat with it](https://coder.gaia.domains/chatbot-ui/index.html) or use it from an IDE tool, such as [Cursor AI](./agent-integrations/cursor) or [Zed](./agent-integrations/zed). 
Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://coder.gaia.domains/v1 |
| Model Name (for LLM) | coder |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |

### Rust Coder

A coding agent supplemented with open-source [Rust content](https://huggingface.co/datasets/gaianet/learn-rust) from the Rust Foundation and published books.
[Chat with it](https://rustcoder.gaia.domains/chatbot-ui/index.html) or use it from an IDE tool, such as [Cursor AI](./agent-integrations/cursor) or [Zed](./agent-integrations/zed).
Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://rustcoder.gaia.domains/v1 |
| Model Name (for LLM) | rustcoder |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |

## Alternative LLM domains

<!-----
### Llama 3b

This domain runs plain Llama 3.2 3b agent nodes without any additional knowledge.
[Chat with it](https://llama3b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama3b.gaia.domains/v1 |
| Model Name (for LLM) | llama3b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |

----->

### Qwen 7b

The Qwen 7b LLM is great for non-English tasks such as translation.
[Chat with it](https://qwen7b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://qwen7b.gaia.domains/v1 |
| Model Name (for LLM) | qwen7b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |


### Qwen 72b

The Qwen 72b LLM is a top open source LLM. It is very capable but could also be slow.
It is capable of tool / function calling.
[Learn more](../tutorial/tool-call) how to use tool call models in your agent app.
[Chat with it](https://qwen72b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://qwen72b.gaia.domains/v1 |
| Model Name (for LLM) | qwen72b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |
