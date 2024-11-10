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

### Llama 8b

This node runs a plain Llama 3.1 8b model without any additional knowledge. 
[Chat with it](https://llama8b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama8b.gaia.domains/v1 |
| Model Name (for LLM) | llama |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Llama 3b

This node runs a plain Llama 3.2 3b model without any additional knowledge.
[Chat with it](https://llama3b.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://llama3b.gaia.domains/v1 |
| Model Name (for LLM) | llama3b |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Coder

This node runs a Qwen 2.5 Coder model.
[Chat with it](https://coder.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://coder.gaia.domains/v1 |
| Model Name (for LLM) | coder |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Rust Coder

This node runs a Qwen 2.5 Coder model with open-source Rust content from the Rust Foundation.
[Chat with it](https://rustcoder.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://rustcoder.gaia.domains/v1 |
| Model Name (for LLM) | rustcoder |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Bible pastor

This node runs a finetuned Llama LLM with a knowledge base of Bible teachings of everyday events and emotions.
[Chat with it](https://pastor.gaia.domains/chatbot-ui/index.html) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://pastor.gaia.domains/v1 |
| Model Name (for LLM) | pastor |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

## Public Gaia nodes

The standalone Gaia nodes are maintained by individuals and hence are less stable. Use them at your own risk!

### Tool use Llama

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

### Phi

This node runs a plain Phi 3 mini model without any additional knowledge. 
[Chat with it](https://phi.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://phi.us.gaianet.network/v1 |
| Model Name (for LLM) | phi |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Gemma

This node runs a plain Gemma 2 27b model without any additional knowledge. 
[Chat with it](https://gemma.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://gemma.us.gaianet.network/v1 |
| Model Name (for LLM) | gemma |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

### Codestral

This node runs a plain Codestral model without any additional knowledge. 
[Chat with it](https://codestral.us.gaianet.network/) or use it from another app. Replace OpenAI configuration in [your app](apps/intro) with the following.

|Config option | Value |
|-----|--------|
| API endpoint URL | https://codestral.us.gaianet.network/v1 |
| Model Name (for LLM) | codestral |
| Model Name (for Text embedding) | nomic-embed |
| API key | Empty or any value |

