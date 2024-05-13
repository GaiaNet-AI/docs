---
sidebar_position: 4
---

# Join the GaiaNet Protocol

After successfully running a GaiaNet node on your machine, it's time to join the GaiaNet protocol network and get rewards for sharing the computing power with the world.

When you run a node with the Getting Started guide, you may notice that the GaiaNet software has generated a node id for you. The node id is an ETH address. The easiest way to find the node ID is from your node's public URL.

```
https://0xf63939431ee11267f55a166e11cc44d24960c0.gaianet.network

https://nodeid.gaianet.network
```

To receive your rewards, all you need to do is to bind your node ID and metamask via the GaiaNet web portal.

* Open https://www.gaianet.ai/ on your browser and log in to the website with your Metamask account
* Go to the Node Management section, copy and paste your node ID in the reward part. Then, click on Confirm button.
* After your node is verified successfully, you will receive the reward from that moment.
* You can bind multiple node IDs to your MetaMask wallet address if you are running multiple nodes.

You will then be able to use your MetaMask Wallet address to claim your rewards or earnings from running
the GaiaNet node.

### Protect your node id

The GaiaNet installer generates a pair of ETH address and keystore and password for your node automatically. This information is stored in the `gaianet/nodeid.json` file. Please keep the JSON file carefully.

* The ETH address is your node ID. You will use this ETH address to join the GaiaNet network.
* The keystore stores the private key associated with the ETH address encrypted by the password.

The `nodeid.json` is the only proof that your node belongs to you. 
IN many protocol operations, you will need this private key to sign request messages to send to the protocol smart contracts.

### Select a different domain

By default, a new GaiaNet node joins the `gaianet.network` domain. You can select a different domain to join by putting
the GaiaNet doamin's public DNS name in the `domain` field in the `config.json`. Please note that most GaiaNet domains
require approval for nodes to join. You have to abide by the doamin's rules before your node becomes publically accessible
on the domain URL.

