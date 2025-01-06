---
sidebar_position: 8
---

# Uninstalling the Gaia CLI

To uninstall or clear the environment, run the following command.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/uninstall.sh' | bash
```

:::danger

**Important Reminder: This command will remove all the Gaia-related files, including the `nodeid.json`. It's your responsibility to keep your nodeid.json safe. If you want to run the same node after reinstalling, please save the `nodeid.json` file and `frpc.toml` file carefully.**

:::

# Update the current Gaia node

Simply run the following command to upgrade your node.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s -- --upgrade
```

:::tip

The `upgrade` option will keep your node id.

:::