---
sidebar_position: 2
---

# Register Gaianet network and get rewards

After successfully running a GaiaNet node on your machine, it's time to register the Gaianet Network and get rewards for sharing the computing power with the world.

### Register the GaiaNet network

When you run a node with our Getting Started guide, you may notice that the GaiaNet installer will generate a node id for you. The node is an ETH address. The easiest way to find the node ID is from your node's public URL.

```
https://0xf63939431ee11267f55a166e11cc44d24960c0.gaianet.xyz

https://nodeid.gaianet.xyz
```

To receive your rewards, all you need to do is to bind your node ID and metamask via the GaiaNet web portal.

* Open https://www.gaianet.ai/ on your browser and log in to the website with your Metamask account
* Go to the Node Management section, copy and paste your node ID in the reward part. Then, click on Confirm button.
* After your node is verified successfully, you will receive the reward from that moment.

That's all. After that, the reward for running a Gaianet node will be allocated to your Metamask wallet. You can claim your rewards at any time.

If you have more than one node id, you can also use this way to join the Gaianet network. If you don't change the logged Metamask address, the rewards will go to the same address.

### What is a node id

When you use `gaianet init` to init your node, the GaiaNet installer will generate a pair of ETH address and keystore and password for your node automatically. This information is stored in the `gaianet/nodeid.json` file. Please keep the JSON file carefully.

* The ETH address is your node ID. You will use this ETH address to join 
* The Keystore and password are the private key of the ETH address.

The `nodeid.json` is the only proof that your node belongs to you. What if some bad people register your node before yourself, how do you think you could deal with this situation?  The GaiaNet DAO will help solve this problem. And that's where `nodeid.json` (a pair of ETH address and keystore and password) associated with your node comes into play. Please go to the Governance section to learn more.



