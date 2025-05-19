---
sidebar_position: 9
---

# System requirements

You can install the Gaia on a wide variety of devices and operating systems with or without GPUs. The node installing and operating instructions work on devices ranging from Raspberry Pi, MacBooks, Linux servers, Windows Desktop, to cloud-based Nvidia H100 clusters. For institutional operators, we recommend EITHER of the following for a Gaia node. 

* Mac desktop or server computers (i.e., iMac, Mini, Studio or Pro) with Apple Silicon (M1 to M4), and at least 16GB of RAM (32GB or more recommended).
* Ubuntu Linux 22.04 server with NVIDIA CUDA 12 SDK installed. At least 8GB of VRAM on the GPU is required (24GB or more recommended). On AWS and Azure, that means GPU instances with at least the Nvidia T4 GPU installed.

> Check out our [tutorial](advanced-deployment-options/cuda) on how to install the NVIDIA driver and the CUDA toolkit on a Ubuntu 22.04 machine.

If you are hosting the node in your home or office, it needs access to the public Internet to join the Gaia network.

## Supported on

Gaia node software is designed to be cross-platform, allowing it to run on various CPU and GPU architectures. The Gaia installer automatically detects the presence of NVIDIA CUDA drivers and leverages the power of GPU accelerators on the device. More hardware support is on the way.

### GPU

The Gaia node can run on all types of NVIDIA GPU products from H100 to NVIDIA Jetson series of hardware.
It also runs on all Apple Silicon M-series GPUs.

### CPU

* Arm-64 based on CPU chips
* X86 based on CPU chips
* Apple M1 chips
* Apple M1 Pro chips
* Apple M1 Max chips
* Apple M1 Ultra chips
* Apple M2 chips
* Apple M2 Pro chips
* Apple M2 Max chips
* Apple M2 Ultra chips
* Apple M3 chips
* Apple M3 Pro chips
* Apple M3 Max chips
* Apple M3 Ultra chips

### OSs

* macOS
* Linux-like OS

