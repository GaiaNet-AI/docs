---
sidebar_position: 2
---

# Unprivileged install 

The [default GaiaNet installer](../quick-start) requires the super user / administrator (i.e., sudo)
privilege to install into `/usr/local/bin/gaianet`. But if you are not an admin, you can still install
a GaiaNet node as a local user. Just use the `--unprivileged` option in the installer.

```
curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh' | bash -s -- --unprivileged
```

In this case, the `gaianet` CLI tool will be installed into your home directory `$HOME/gaianet/gaianet`.
Subsequently, your will use the full path to use the `gaianet` command. For example,

```
cd ~/gaianet

./gaianet init
./gaianet start
```

