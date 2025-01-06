---
sidebar_position: 105
---

# Ensuring Gaia Node Reliability

## Protect the server process

Sometimes, the OS could kill the `wasmedge` process on the Gaia node if it consumes too much resources. For production
servers, you should protect the server process.

## Use Supervise

The `supervise` tool can help us monitor the `wasmedge` process, and automatically restart the process
in case the process dies or is killed.
The `gaianet` CLI will make use of `supervise` automatically if it is installed on the system.

For macOS users, you can install `supervise` via the daemontools tool by running the following command.

```
brew install daemontools
```

For Linux users, please refer to [the installation guide](https://cr.yp.to/daemontools/install.html) to install the `daemontools` tool.

## Reduce the nice value

If the `supervise` tool is too heavy handed, we could also increase the priority of the `wasmedge` process. The OS
will try NOT to kill high priority processes until it absolutely has to. We do that by reducing the `nice` value
of the `wasmedge` process.

```
sudo renice -n -19 $(cat $HOME/gaianet/llamaedge.pid)
```