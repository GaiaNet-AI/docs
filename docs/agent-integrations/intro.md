---
sidebar_position: 1
---

# OpenAI ecosystem apps

Since each Gaia node provides an OpenAI-compatible API service, it can be a drop-in replacement for OpenAI in almost all LLM applications and frameworks. Check out the articles in this section for instructions and examples for how to use Gaia in popular LLM apps.

## The OpenAI Python library

:::note

    Make sure to replace `YOUR_API_KEY_GOES_HERE` with your **own API key**. To get your own API key, follow [this](../getting-started/authentication) tutorial.

:::

You can install the [official OpenAI Python library](https://pypi.org/project/openai/) as follows.

```
pip install openai
```

When you create an OpenAI client using the library, you can pass in the API endpoint point as the `base_url`.
Remember to append the `/v1` after the host name. You can find a list of public nodes [here](../nodes.md).

```
import openai

client = openai.OpenAI(base_url="https://YOUR-NODE-ID.gaia.domains/v1", api_key="YOUR_API_KEY_GOES_HERE")
```

Alternatively, you could set an environment variables at the OS level.

```
export OPENAI_API_BASE=https://YOUR-NODE-ID.gaia.domains/v1
export OPENAI_API_KEY=YOUR_API_KEY_GOES_HERE
```

Then, when you make API calls from the `client`, make sure that the `model` is set to the model name
available on your node.

```py
response = client.chat.completions.create(
    model="Meta-Llama-3-8B-Instruct-Q5_K_M",
    messages=[
        {"role": "system", "content": "You are a strategic reasoner."},
            {"role": "user", "content": "What is the purpose of life?"}
        ],
        temperature=0.7,
        max_tokens=500
    ]
)
```

That's it! You can now take any application built with the official OpenAI Python library and use a Gaia node
as its backend!

## The OpenAI Node API library

:::note

    Make sure to replace `YOUR_API_KEY_GOES_HERE` with your **own API key**. To get your own API key, follow [this](../getting-started/authentication) tutorial.

:::

You can install the [OpenAI Node library](https://www.npmjs.com/package/openai) which provides convenient access to the OpenAI REST API from TypeScript or JavaScript as follows:

```
npm install openai
```

Import it into your project as:
```js
// Example usage in Node.js
const OpenAI = require('openai');
```

Create an OpenAI client with a custom base URL. Remember to append the `/v1` after the host name.

```js
const client = new OpenAI({
  baseURL: 'https://YOUR-NODE-ID.gaia.domains/v1',
  apiKey: 'YOUR_API_KEY_GOES_HERE'
});
```

Alternatively, you can set an environment variable using `dotenv` in Node.
```
process.env.OPENAI_API_BASE = 'https://YOUR-NODE-ID.gaia.domains/v1';
```

Then, when you make API calls from the `client`, make sure that the `model` is set to the model name
available on your node.

```js
async function callOpenAI() {
  try {
    const response = await client.chat.completions.create({
      model: "Meta-Llama-3-8B-Instruct-Q5_K_M",
      messages: [
        { role: "system", content: "You are a strategic reasoner." },
        { role: "user", content: "What is the purpose of life?" }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

//Usage
callOpenAI();
```
