---
sidebar_position: 1
---

# Quick start with GaiaNet Node

## Quick start

> After this tutorial, you will master how to run a default GaiaNet node on your own machine, even on your own computer.

First, let's install the required GaiaNet software with the GaiaNet installer on Mac, Linux, or Windows WSL.


```
bash <(curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh')
```

After installed successfully, you can use `gaianet init` to init the required models and knowledge along with your node. The default Gaianet node is a Paris guide.

```
gaianet init
```

Then, use `gaianet run` to start your node.

```
gaianet run
```

After it runs successfully, you can click on the link printed on your screen to chat with your node. The link should be look like the following.

> Add a screenshot here

If you want to stop running your node, use `gaianet stop`.

```
gaianet stop
```

### Advanced

The above steps show how to quick start with the default GaiaNet node. Next, let's try another node with different domain knowledge.  There are three kinds of nodes for you to choose.

*  `paris_guide`  can start a node with Paris knowledge.
*  `vitalik_buterin`  can start a node with Vitalik Buterin knowledge.
*  `gaianet_knowledge` can start a node with GaiaNet knowledge.

Let’s take `gaianet_knowledge` as an example. Use `gaianet init gaianet_knowledge` to init the required models and knowledge along with this specific node. 

```
gaianet init gaianet_knowledge
```

After initialized successfully, you can also use `gaianet run` to start your node.

```
gaianet run
```

From this article, we learned how to quick start a Gaianet node on your machine. As we mentioned before, running a GaiaNet node can get rewards for contributing computing power for the community. Next article will walk you through how to register your node into the Gaianet network and win rewards.


