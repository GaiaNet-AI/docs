---
sidebar_position: 2
---

# Install and uninstall

The GaiaNet node utilizes version control from [its source GitHub repo](https://github.com/GaiaNet-AI/gaianet-node). You check out the GaiaNet node versions from [the release page](https://github.com/GaiaNet-AI/gaianet-node/releases).

## Install

You can install the WasmEdge Runtime on any generic Linux and MacOS platform.

### Install the latest version of GaiaNet node

To install the most recent version of GaiaNet node, run the following command line.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash
```

The GaiaNet node will be installed in your `$HOME/gaianet` folder by default. If you want to install gaianet in a different directory, you will can use `curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s --  --base <Path> ` to specify where you want to install GaiaNet. Once you use `--base`

### Install the specific version of GaiaNet Node

If you want to install a particular GaiaNet node version, run the following command line.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/v0.1.1/install.sh' | bash
```

## Update the current Gaianet node

Simply run the following nodes to upgrade your node.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s -- --reinstall
```

## Uninstall

To uninstall or clear the environment, run the following command line.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/uninstall.sh' | bash
```

## What's installed

If you install the GaiaNet node in the `$HOME/gaianet` directory by default, you will have the following directories and files after installation:

* The `$HOME/gaianet/bin` directory contains the GaiaNet CLI tool, frpc binary and Qdrant Vector database binary.
* The `$HOME/gaianet/` directory contains the `llamaedge-api-server.wasm` and `rag-api-server.wasm` for the LLM inference, dashboard (chatbot ui), nodeid.json for the registering your node, and gaianet-domain binary.
* The `$HOME/.wasmedge/bin` directory contains the WasmEdge Runtime CLI executable files, which serve as the LLM runtime.

## CLI options for the installer

You can use the following command line to check out all the avaible CLI options

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s -- --help
```

The output should be as the following. You can use the following options to customize your installation.

```
Usage:
  ./install.sh [Options]

Options:
  --config <Url>     Specify a url to the config file
  --base <Path>      Specify a path to the gaianet base directory
  --reinstall        Install and download all required deps
  --tmpdir <Path>    Specify a path to the temporary directory [default: /tmp]
  --ggmlcuda [11/12] Install a specific CUDA enabled GGML plugin version [Possible values: 11, 12].
  --enable-vector:   Install vector log aggregator
  --version          Print version
  --help             Print usage
```


