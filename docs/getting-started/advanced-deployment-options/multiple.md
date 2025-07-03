---
sidebar_position: 103
---

# Install multiple nodes on a single machine

The [default Gaia installer](../quick-start/quick-start.md) installs the node into the `$HOME/gaianet` base directory. 
You could install multiple nodes on the same machine. Each node has its own "base directory".
To do that, you just need to use the `--base` option. 

Let's say that the base directory for your second node is `$HOME/node-2`.
You can install Gaia node software using the following command.

```
curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh' | bash -s -- --base $HOME/node-2
```

After that, you can specify the `gaianet` CLI to operate on `node-2` by appending the `--base` option as well.

```
gaianet init --base $HOME/node-2
gaianet start --base $HOME/node-2
```

