---
sidebar_position: 6
---

# 🌐 Public Gaia Domain

Each Gaia node provides a web-based chatbot UI and an OpenAI compatible web service.
Here are some popular nodes. Please refer to the [agent apps](../agent-integrations/intro) section to see how
to use the Gaia API in your favorite agent frameworks or apps.

Gaia nodes are organized into Gaia domains to provide public services. Each domain has a single API endpoint that load-balances across multiple nodes to ensure service availability. 

Below are some Gaia domains we offer developers for free. **However, you must apply for a developer account to access these domains**.

## Public Gaia domains

### Voice-to-text: Whisper v2 large

This domain runs Whisper v2 Large agent nodes for voice to text transcription and translation.
Replace OpenAI configuration in [your app](../agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://whisper.gaia.domains/v1 |
| Model Name | whisper |
| API key | [Get your API Key here](../getting-started/authentication/authentication.md) |

### Text-to-image: Realistic vision

Coming soon!

### Text-to-voice: GPT-SoVITS

Coming soon!

<!-----
## Coding assistant agents

### Coder

A general coding agent running a STOA coder LLM.
It is a highly capable but slow model.
[Chat with it](https://coder.gaia.domains/chatbot-ui/index.html) or use it from an IDE tool, such as [Cursor AI](../agent-integrations/cursor/cursor.md) or [Zed](../agent-integrations/zed/zed.md). 
Replace OpenAI configuration in [your app](../agent-integrations/intro.md) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://coder.gaia.domains/v1 |
| Model Name (for LLM) | coder |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](../getting-started/authentication/authentication.md) |

### Rust Coder

A coding agent supplemented with open-source [Rust content](https://huggingface.co/datasets/gaianet/learn-rust) from the Rust Foundation and published books.
[Chat with it](https://rustcoder.gaia.domains/chatbot-ui/index.html) or use it from an IDE tool, such as [Cursor AI](../agent-integrations/cursor/cursor.md) or [Zed](../agent-integrations/zed/zed.md).
Replace OpenAI configuration in [your app](../agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://rustcoder.gaia.domains/v1 |
| Model Name (for LLM) | rustcoder |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](../getting-started/authentication/authentication.md) |

----->

## LLM domains

<!-----
### Llama 3b

This domain runs plain Qwen3 0.6b agent nodes without any additional knowledge.
[Chat with it](https://0x0c82e25e1f996fa3d227d23e83cef721ee42ff69.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](./agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama3b.gaia.domains/v1 |
| Model Name (for LLM) | llama3b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](/docs/getting-started/authentication.md) |

----->

### Qwen 7b

The Qwen3 0.6b LLM is great for non-coding tasks such as translation.
[Chat with it](https://0x0c82e25e1f996fa3d227d23e83cef721ee42ff69.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](../agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://0x0c82e25e1f996fa3d227d23e83cef721ee42ff69.gaia.domains/v1 |
| Model Name (for LLM) | qwen3 0.6b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](../getting-started/authentication/authentication.md) |


### GPT OSS 20b

The GPT OSS 20b LLM is the first open sourced LLM by OpenAI. It is very capable with a thinking proces.

[Chat with it](https://0xfa1fc68813d687215be75fba4fffb60f184590bc.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](../agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://0xfa1fc68813d687215be75fba4fffb60f184590bc.gaia.domains/v1 |
| Model Name (for LLM) | qwen72b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](../getting-started/authentication/authentication.md) |

### Mistral

The Mistral 3.1 24b LLM is a top open source LLM. It is very capable but could also be slow.
It is capable of tool / function calling.
[Learn more](../tutorial/tool-call/tool-call.md) how to use tool call models in your agent app.
[Chat with it](https://0x3b70c030a2baaa866f6ba6c03fde87706812d920.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](../agent-integrations/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://0x3b70c030a2baaa866f6ba6c03fde87706812d920.gaia.domains/v1 |
| Model Name (for LLM) | qwen72b |
| Model Name (for Text embedding) | nomic-embed |
| API key | [Get your API Key here](../getting-started/authentication/authentication.md) |
