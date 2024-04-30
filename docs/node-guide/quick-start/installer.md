---
sidebar_position: 1
---

# Quick start with GaiaNet Node


> After this tutorial, you will master how to run a default GaiaNet node on your machine, even on your computer.

First, let's install the required GaiaNet software with the GaiaNet installer on Mac, Linux, or Windows WSL.


```
curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh' | bash
```

After being installed successfully, you can use `gaianet init` to download the default models and knowledge with your node in the `$HOME/gaianet/config.json` file. The default Gaianet node is a Paris guide. For more preset settings, please check out The Preset Config article. You can also use `gaianet init list` to check out more pre-set configs.
 
```
gaianet init
```

Then, use `gaianet start` to start your node.

```
gaianet start
```

After it runs successfully, you can click on the link printed on your screen to chat with your node. The link should look like the following.


![](https://github.com/GaiaNet-AI/docs/assets/45785633/15bf1032-dfc8-46be-82ed-08d1c40432f3)


If you want to stop running your node, use `gaianet stop`.

```
gaianet stop
```

### Supervise

If you're a frequent Gaianet node runner, we recommend using the supervise tool to manage nodes effectively.

For macOS users, you can install the daemontools tool by running the following command:

```
brew install daemontools
```

For Linux users, please refer to [the installation guide](https://cr.yp.to/daemontools/install.html) to install the `daemontools` tool.

