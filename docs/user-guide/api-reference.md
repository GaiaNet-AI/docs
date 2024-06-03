---
sidebar_position: 4
---

# API Reference

## Introduction

Each GaiaNet node is an OpenAI compatibale API server. You can build your application based on the GaiaNet node API. You
can also replace OpenAI API configuration with the GaiaNet node API in other AI agent frameworks.

The base URL to send all API requests is `https://node_id.gaianet.network/v1`.

## Endpoints

### Chat

The `chat/completions` endpoint returns an LLM response based on the system prompt and user query.

#### Non-streaming

By default, the API responds with a full answer in the HTTP response. 

**Request**

```
curl -X POST https://node_id.gaianet.network/v1/chat/completions \
  -H 'accept:application/json' \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "What is the capital of France?"}], "model": "model_name"}'
```

**Response:**

```
{"id":"chatcmpl-bcfeebe0-5372-42c0-ac92-0615213e1c97","object":"chat.completion","created":1716380086,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","choices":[{"index":0,"message":{"role":"assistant","content":"Paris."},"finish_reason":"stop"}],"usage":{"prompt_tokens":61,"completion_tokens":4,"total_tokens":65}}%  
```

#### streaming

Add `"stream":true` in your request to make the API send back partial responses as the LLM generates its answer. 

**Request:**

```
curl -X POST https://node_id.gaianet.network/v1/chat/completions \
  -H 'accept:application/json' \
  -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "What is the capital of France?"}], "model": "model_name", "stream":true}'
```

**Response:**

```
data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":"I"},"logprobs":null,"finish_reason":null}],"created":1716381054,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}

data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" am"},"logprobs":null,"finish_reason":null}],"created":1716381054,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}

data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" a"},"logprobs":null,"finish_reason":null}],"created":1716381054,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}

...

data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" an"},"logprobs":null,"finish_reason":null}],"created":1716381055,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}

data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":" AI"},"logprobs":null,"finish_reason":null}],"created":1716381055,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}

data: {"id":"chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4","choices":[{"index":0,"delta":{"role":"assistant","content":"."},"logprobs":null,"finish_reason":null}],"created":1716381055,"model":"Llama-3-8B-Instruct-262k-Q5_K_M","system_fingerprint":"fp_44709d6fcb","object":"chat.completion.chunk"}

data: [DONE]
```

#### Request body

| Field             | Type    | Required | Description                                                                                                                                                                                                                                                                                               | Default | Example                                                                                                                                                                                                                                                |
|-------------------|---------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| messages          | List    | Required | A list of messages for the conversation.<br/>1 . System message (depends on the large language mode you use) <br/>* `content` of the system messages is required <br/> * `"role":"system"` is required<br/> 2. User message (required) <br/> * `content` is required. <br/> * `"role":"user"` is required | N/A     | "messages": &#91;&quot;role&quot;&#58; &quot;system&quot;&#44;&quot;content&quot;&#58; &quot;You are a helpful assistant.&quot;&#125;&#44;&#123;&quot;role&quot;&#58; &quot;user&quot;&#44;<br/>&quot;content&quot;&#58; &quot;Hello!&quot;&#125;&#93; |
| model             | String  | Required | The chat model you used                                                                                                                                                                                                                                                                                   | N/A     | Llama-3-8B-262k-Q5_K_M                                                                                                                                                                                                                                 |
| top_p             | Number  | Optional | An alternative to sampling with temperature. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                                                                                            | 1       | Number between 0 and 1.                                                                                                                                                                                                                                |
| Temperature       | Number  | Optional | Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                                                                                                                                         | 1       | Number between 0 and 2.                                                                                                                                                                                                                                |
| presence_penalty  | Number  | Optional | Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.                                                                                                                                                          | 0       | Number between -2.0 and 2.0.                                                                                                                                                                                                                           |
| stream            | boolean | Optional | Make the answer streaming output                                                                                                                                                                                                                                                                          | FALSE   | "stream":true                                                                                                                                                                                                                                          |
| frequency_penalty | Number  | Optional | Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim.                                                                                                                                          | 0       | Number between -2.0 and 2.0.                                                                                                                                                                                                                           |

#### Response body

| Field   | Type    | Streaming or non-streaming | Description                                                                                                | Default                                                                                          | Example                                                                                                                                                                                                                                      |
|---------|---------|----------------------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id      | string  | Both                       | A unique identifier for the chat completion.                                                               | Generated randomly                                                                               | chatcmpl-73a1f57d-185e-42c2-b8a6-ba0bae58f3b4                                                                                                                                                                                                |
| object  | string  | Both                       | The object type                                                                                            | `chat.completion.chunk` in the streaming mode.<br/> `chat.completion` in the non-streaming mode. | `chat.completion.chunk` in the streaming mode.<br/> `chat.completion` in the non-streaming mode.                                                                                                                                             |
| choices | array   | Both                       | A list of chat completion choices.                                                                         |                                                                                                  | "choices":&#91;&#123;&quot;index&quot;&#58;0&#44;&quot;message&quot;&#58;&#123;&quot;role&quot;&#58;&quot;assistant&quot;&#44;&quot;content&quot;&#58;&quot;Paris.&quot;&#125;&#44;&quot;finish_reason&quot;&#58;&quot;stop&quot;&#125;&#93; |
| created | integer | Both                       | The Unix timestamp (in seconds) of when the chat completion was created.                                   | N/A                                                                                              | 1716380086                                                                                                                                                                                                                                   |
| model   | string  | Both                       | The model used for the chat completion.                                                                    | Depends on the model you use.                                                                    | Llama-3-8B-Instruct-Q5_K_M                                                                                                                                                                                                                   |
| usage   | object  | Both                       | Usage statistics for the completion request, including completion_tokens, prompt_tokens, and total_tokens. | N/A                                                                                              | "usage":&#123;&quot;prompt_tokens&quot;&#58;61&#44;&quot;completion_tokens&quot;&#58;4&#44;&quot;total_tokens&quot;&#58;65&#125;                                                                                                             |

### Embedding

The `embeddings` endpoint computes embeddings for user queries or file chunks.

**Request**

```
curl -X POST https://node_id.gaianet.network/v1/embeddings \
    -H 'accept:application/json' \
    -H 'Content-Type: application/json' \
    -d '{"model": "nomic-embed-text-v1.5.f16", "input":["Paris, city and capital of France, ..., for Paris has retained its importance as a centre for education and intellectual pursuits.", "Paris’s site at a crossroads ..., drawing to itself much of the talent and vitality of the provinces."]}'
```

**Response:**

```
{
    "object": "list",
    "data": [
        {
            "index": 0,
            "object": "embedding",
            "embedding": [
                0.1428378969,
                -0.0447309874,
                0.007660218049,
                ...
                -0.0128974719,
                -0.03543198109,
                0.03974733502,
                0.00946635101,
                -0.01531364303
            ]
        },
        {
            "index": 1,
            "object": "embedding",
            "embedding": [
                0.0697753951,
                -0.0001159032545,
                0.02073983476,
                ...
                0.03565846011,
                -0.04550019652,
                0.02691745944,
                0.02498772368,
                -0.003226313973
            ]
        }
    ],
    "model": "nomic-embed-text-v1.5.f16",
    "usage": {
        "prompt_tokens": 491,
        "completion_tokens": 0,
        "total_tokens": 491
    }
}
```

### Retrieve

The `retrieve` endpoint can retrieve text from the node's vector collection based on the user's query.

**Request:**

```
curl -X POST https://node_id.gaianet.network/v1/retrieve \
    -H 'accept:application/json' \
    -H 'Content-Type: application/json' \
    -d '{"messages":[{"role":"system", "content": "You are a helpful assistant."}, {"role":"user", "content": "What is the location of Paris?"}], "model":"nomic-embed-text-v1.5.f16"}'
```

**Response:**

```
{
    "points": [
        {
            "source": "\"Paris is located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the Île Saint-Louis and the larger Île de la Cité, which form the oldest part of the city. The river's mouth on the English Channel is about 233 mi downstream from the city. The city is spread widely on both banks of the river. Overall, the city is relatively flat, and the lowest point is 35 m above sea level. Paris has several prominent hills, the highest of which is Montmartre at 130 m.\\n\"",
            "score": 0.74011195
        },
        {
            "source": "\"The Paris region is the most active water transport area in France, with most of the cargo handled by Ports of Paris in facilities located around Paris. The rivers Loire, Rhine, Rhône, Me\\n\"",
            "score": 0.63990676
        },
        {
            "source": "\"Paris\\nCountry\\tFrance\\nRegion\\nÎle-de-France\\r\\nDepartment\\nParis\\nIntercommunality\\nMétropole du Grand Paris\\nSubdivisions\\n20 arrondissements\\nGovernment\\n • Mayor (2020–2026)\\tAnne Hidalgo (PS)\\r\\nArea\\n1\\t105.4 km2 (40.7 sq mi)\\n • Urban\\n (2020)\\t2,853.5 km2 (1,101.7 sq mi)\\n • Metro\\n (2020)\\t18,940.7 km2 (7,313.0 sq mi)\\nPopulation\\n (2023)\\n2,102,650\\n • Rank\\t9th in Europe\\n1st in France\\r\\n • Density\\t20,000/km2 (52,000/sq mi)\\n • Urban\\n (2019)\\n10,858,852\\n • Urban density\\t3,800/km2 (9,900/sq mi)\\n • Metro\\n (Jan. 2017)\\n13,024,518\\n • Metro density\\t690/km2 (1,800/sq mi)\\nDemonym(s)\\nParisian(s) (en) Parisien(s) (masc.), Parisienne(s) (fem.) (fr), Parigot(s) (masc.), \\\"Parigote(s)\\\" (fem.) (fr, colloquial)\\nTime zone\\nUTC+01:00 (CET)\\r\\n • Summer (DST)\\nUTC+02:00 (CEST)\\r\\nINSEE/Postal code\\t75056 /75001-75020, 75116\\r\\nElevation\\t28–131 m (92–430 ft)\\n(avg. 78 m or 256 ft)\\nWebsite\\twww.paris.fr\\r\\n1 French Land Register data, which excludes lakes, ponds, glaciers > 1 km2 (0.386 sq mi or 247 acres) and river estuaries.\\n\"",
            "score": 0.62259054
        },
        {
            "source": "\" in Paris\\n\"",
            "score": 0.6152092
        },
        {
            "source": "\"The Parisii, a sub-tribe of the Celtic Senones, inhabited the Paris area from around the middle of the 3rd century BC. One of the area's major north–south trade routes crossed the Seine on the île de la Cité, which gradually became an important trading centre. The Parisii traded with many river towns (some as far away as the Iberian Peninsula) and minted their own coins.\\n\"",
            "score": 0.5720232
        }
    ],
    "limit": 5,
    "score_threshold": 0.4
}
```

### Get the model

The `models` endpoint provides the chat and embedding models available on the node.

**Request:**

```
curl -X POST https://node_id.gaianet.network/v1/models
```

**Response:**

```
{"object":"list","data":[{"id":"Llama-3-8B-Instruct-262k-Q5_K_M","created":1716383261,"object":"model","owned_by":"Not specified"},{"id":"nomic-embed-text-v1.5.f16","created":1716383261,"object":"model","owned_by":"Not specified"}]}%   
```

### Get the node info

The `info` endpoint provides detailed information about the node.

**Request:**

```
curl -X POST https://node_id.gaianet.network/v1/info
```

**Response:**

```
{
    "version": "0.5.0",
    "plugin_version": "b2694 (commit 0d56246f)",
    "port": "8080",
    "models": [
        {
            "name": "Llama-2-7b-chat-hf-Q5_K_M",
            "type": "chat",
            "prompt_template": "Llama2Chat",
            "n_predict": 1024,
            "n_gpu_layers": 100,
            "ctx_size": 4096,
            "batch_size": 512,
            "temperature": 1.0,
            "top_p": 1.0,
            "repeat_penalty": 1.1,
            "presence_penalty": 0.0,
            "frequency_penalty": 0.0
        },
        {
            "name": "all-MiniLM-L6-v2-ggml-model-f16",
            "type": "embedding",
            "prompt_template": "Llama2Chat",
            "n_predict": 1024,
            "n_gpu_layers": 100,
            "ctx_size": 384,
            "batch_size": 512,
            "temperature": 1.0,
            "top_p": 1.0,
            "repeat_penalty": 1.1,
            "presence_penalty": 0.0,
            "frequency_penalty": 0.0
        }
    ],
    "qdrant_config": {
        "url": "http://localhost:6333",
        "collection_name": "default",
        "limit": 5,
        "score_threshold": 0.4
    }
} 
```

## Status Codes

| HTTP response code | Description           | Reason                      | Solutions                        |
|--------------------|-----------------------|-----------------------------|----------------------------------|
| 404                | Not found             | The endpoint URL is invalid | Please check the endpoint URL    |
| 500                | Internal Server Error | Model is not found.         | Please check out the model name. |
| 400                | Bad request           |                             |                                  |
