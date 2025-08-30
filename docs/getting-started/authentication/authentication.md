---
sidebar_position: 3
---

# Get your API key

We're introducing API keys for authentication. You can create API keys by following the steps below:

1. Go to https://gaianet.ai and click on **Launch App**
2. Click **CONNECT** and connect your Metamask Wallet
3. After connecting your wallet, click on the profile drop down and then click **Setting**
   
![](/img/docs/settings-for-api.png)

4. Under **Setting**, click on **Gaia API Keys** and then **Create API Key**
   
![Go to settings to get your API key](/img/docs/settings-for-api-keys.png)

5. Give your API Key a name and click **Create**

:::danger Important

Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.

:::

![Gaia API keys option under settings](/img/docs/create-api-key.png)

![API key is now created](/img/docs/api-key-created.png)

:::tip Tip

Your API Key is like a password and helps verify your usage. This will be one of the last times you‘ll see it displayed, so remember to save it in a safe place.

:::

:::warning

#### API Keys are now available for all your applications and usage.

Currently, we don't charge anything for usage or API key creation. However, it is highly recommended that you start using and updating your existing applications or new ones with your own API keys to avoid any disruption in the future.

Please refer to the [API Reference](../../getting-started/api-reference.md) page for the updated examples with the API keys usage.

:::

### Frequently Asked Questions

<details>
  <summary>When do I need an API key?</summary>

  There are two types of API Keys that you'll need to interact with Gaia Nodes & Gaia Domains. 
  - API Key for [Public Gaia Domains](../../nodes/nodes.md) (these are maintained by Gaia)
  - API Key for Domains on the network

  An API Key is required for all requests to the Gaia Node's OpenAI compatible endpoints.

</details>

<details>
  <summary>Error: Your API key doesn't match the type. Please apply for a Developer API key.</summary>

  To interact with the public [Gaia Domains](../../nodes/nodes.md), you'll need to apply for a Developer API key with Free Developer Credits. Apply for Developer Free Trial by clicking on the image as shown below:

  ![Free Developer Credits on Gaia](/img/docs/developer-free-trial.png)

  :::info

  All API keys created through an account that has been approved for free developer credits cannot be used to interact with other Gaia Domains on the network. Create a different account to interact with the Gaia Domains on the network (other than the public nodes maintained by Gaia)

  :::

</details>