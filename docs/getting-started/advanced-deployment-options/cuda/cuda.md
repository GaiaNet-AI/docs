---
sidebar_position: 101
---

# Install CUDA on Linux

If you are using an Nvidia-enabled VM instance from a public cloud, you should probably use the VM image provided by the cloud. It typically has the correct versions of Nvidia driver and CUDA toolkit already installed.
Read on if you need to install Nvidia driver and CUDA toolkit on your own machine.

## Ubuntu 22.04

### 1 Install the Nvidia driver.

Rebuild the grub configuration:

```
sudo apt-get install -y gcc make linux-headers-$(uname -r)
cat << EOF | sudo tee --append /etc/modprobe.d/blacklist.conf
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
EOF
sudo sed -i 's/GRUB_CMDLINE_LINUX=""/GRUB_CMDLINE_LINUX="rdblacklist=nouveau"/' /etc/default/grub
sudo update-grub
```

Download and install the Nvidia driver

```
wget https://storage.googleapis.com/nvidia-drivers-us-public/GRID/vGPU16.1/NVIDIA-Linux-x86_64-535.104.05-grid.run
sudo sh NVIDIA-Linux-x86_64-535.104.05-grid.run
```

Confirm the driver is installed successfully

```
nvidia-smi -q | head

==============NVSMI LOG==============

Timestamp                                 : Fri Oct 27 21:54:05 2023
Driver Version                            : 535.104.05
CUDA Version                              : 12.2

Attached GPUs                             : 1
GPU 00000000:00:1E.0
    Product Name                          : NVIDIA A10G
```

Disable GSP and reboot.

```
sudo touch /etc/modprobe.d/nvidia.conf
echo "options nvidia NVreg_EnableGpuFirmware=0" | sudo tee --append /etc/modprobe.d/nvidia.conf
sudo reboot
```

### 2 Install the CUDA toolkit.

```
wget https://developer.download.nvidia.com/compute/cuda/12.2.2/local_installers/cuda_12.2.2_535.104.05_linux.run
sudo sh cuda_12.2.2_535.104.05_linux.run --silent --override --toolkit --samples --toolkitpath=/usr/local/cuda-12 --samplespath=/usr/local/cuda --no-opengl-libs
```

Confirm that CUDA is installed.

```
/usr/local/cuda/bin/nvcc --version

nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2023 NVIDIA Corporation
Built on Tue_Aug_15_22:02:13_PDT_2023
Cuda compilation tools, release 12.2, V12.2.140
Build cuda_12.2.r12.2/compiler.33191640_0
```

After that, use the following two commands to set up the environment path. You should probably add these two lines to your `~/.bashrc` and `~/.bash_profile` (or `~/.zshrc` and `~/.profile`) files so that new terminals and future logins will still be able to find these CUDA library files.

```
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:${LD_LIBRARY_PATH}
export PATH=/usr/local/cuda/bin:${PATH}
```

## More resources

Here are more scripts that could help you in case you are stuck.

* The [Nvidia official install guide](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/) for Linux.
* [Yam Peleg's popular script](https://x.com/yampeleg/status/1751823896800583924) for Ubuntu 22.04
* [Make CUDA available in Docker containers](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)