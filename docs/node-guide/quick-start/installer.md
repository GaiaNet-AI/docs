---
sidebar_position: 1
---

# Quick start with GaiaNet Node


> After this tutorial, you will master how to run a default GaiaNet node on your machine, even on your computer.

First, let's install the required GaiaNet software with the GaiaNet installer on Mac, Linux, or Windows WSL.


```
bash <(curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh')
```

After being installed successfully, you can use `gaianet init` to init the required models and knowledge along with your node. The default Gaianet node is a Paris guide. For more preset settings, please check out The Preset Config article. You can also use `gaianet list` to check out more configs.
 
```
cd ~/gaianet
./gaianet init
```

Then, use `gaianet run` to start your node.

```
,/gaianet run
```

After it runs successfully, you can click on the link printed on your screen to chat with your node. The link should be look like the following.

> Add a screenshot here

If you want to stop running your node, use `gaianet stop`.

```
./gaianet stop
```

### Spuervise

If you're a frequent Gaianet node runner, we recommend you run the GaiaNet node with the supervise tool.

More details to be added.


