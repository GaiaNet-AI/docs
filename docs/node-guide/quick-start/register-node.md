---
sidebar_position: 2
---

# Register Gaianet network and get rewards

After you running a GaiaNet node successfully on your machine, it's time to register the Gaianet Network and get rewards for sharing the comupting power with the whole world.

### Register the GaiaNet network

When you run a node with our Getting Stated guide, you may notice that the GaiaNet intsaller will generate a node id for you. The node is a ETH address. The easiest way to find the node id is from your node public URL.

```
https://0xf63939431ee11267f55a166e11cc44d24960c0.gaianet.xyz

https://nodeid.gaianet.xyz
```

To receive your rewards, all you need to do is to bind your node id and metamask via the GaiaNet web portal.

* Open https://www.gaianet.ai/ on your browser and log in the webiste with your metamask account
* Go to the Node Management section, copy and paste your node id in the reward part. Then, click on confirm
* After your node is verified successfully, you will receive reward from that moment.

That's all. After that, the reward for running a Gaianet node will be allcocated to your metamask wallet. You can claim your rewards at any time.

If you have more than one node id, you can also use this way to join the Gaianet network. If you don't change the logged Metamask address, the rewards will go to the same address.

### What is a node id

When you use `gaianet init` to init your node, the GaiaNet installer will generate a pair of ETH address and keystore and psaawords for your node automatically. These information is stored at the `gaianet/nodeid.json` file. Please keep the json file carefully.

* The ETH address is your node id. You will use this ETH address to join 
* The keystore and password is the private key of the ETH address.

The `nodeid.json` is the only proof to your node belongs to yourself. What if some bad pepple register your node before yourself, how should you deal with this situation?  The GaiaNet DAO will help solve this problme. And that's where `nodeid.json` (a pair of ETH address and keystore and psaawords) associated with your node comes into play. Please go to the Goverance section to learn more.



