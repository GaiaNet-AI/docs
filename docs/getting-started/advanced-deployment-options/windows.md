---
sidebar_position: 5
---

# Install Gaia on Windows

Here is the complete guide to installing and running your own decentralised AI inference using Gaia from a Windows machine.

## Prerequisites

- Windows Sub-system for Linux
- Ubuntu (Latest distribution)

Learn more about [system requirements](../system-requirements).

## Step 1

Install WSL by opening your Command Prompt or Powershell in your windows machine and running the following command:

```
wsl --install Ubuntu-24.04
```

Following is the progress that you should notice when WSL and Ubuntu-24.04 is being installed.

![](./wsl-ubuntu/wsl-install-ubuntu.png)
![](./wsl-ubuntu/wsl-installer.png)
![](./wsl-ubuntu/launching-ubuntu.png)
![](./wsl-ubuntu/installation-complete.png)

## Step 2

Make sure to: 
- [ ] Set your Unix user account
- [ ] Set a password
- [ ] Re-enter the password for confirmation

Once WSL is installed and your choice of Ubuntu is installed, you should see the following:

![Ubuntu-24.04 Installation Complete](./wsl-ubuntu/installation-complete.png)

## Step 3

Once you see the user account logged in as shown in the above screenshot, you can follow the Gaia CLI installation steps from [here](https://docs.gaianet.ai/getting-started/quick-start/#installing-the-node).

![Gaia CLI Installation](./gaia/gaia-cli-installation.png)
![Gaia CLI Installation Complete](./cli/cli-installation.png)
![Gaianet Init](./gaia/gaianet-init.png)
![Gaianet Start](./gaia/gaianet-start.png)

> That's it! Gaia now runs on your Windows machine!
