---
sidebar_position: 8
---

# Troubleshooting

## The system cannot find CUDA libraries

Sometimes, the CUDA toolkit is installed in a non-standard location. The error message here is often not able to find `libcu*12`. For example, you might have CUDA installed with your Python setup. The following command would install CUDA into Python's enviornment.

```
sudo apt install python3-pip -y
pip3 install --upgrade fschat accelerate autoawq vllm
```

The easiest way to fix is simply to link those non-standard CUDA libraries to the standard location, like this.

```
ln -s /usr/local/lib/python3.10/dist-packages/nvidia/cublas/lib/libcublas.so.12 /usr/lib/libcublas.so.12
ln -s /usr/local/lib/python3.10/dist-packages/nvidia/cuda_runtime/lib/libcudart.so.12 /usr/lib/libcudart.so.12
ln -s /usr/local/lib/python3.10/dist-packages/nvidia/cublas/lib/libcublasLt.so.12 /usr/lib/libcublasLt.so.12
```

## The "Too many open files" Error on macOS

When running `gaianet init` to initialize a new node on macOS, you may encounter an error related to snapshot recovery if your snapshot contains a large amount of text. The error message may be the following:

```
 * [Error] Failed to recover from the collection snapshot. {"status":{"error":"Service internal error: Too many open files (os error 24)"},"time":1.574064833}
    * [Error] Failed to recover from the collection snapshot. {"status":{"error":"Service internal error: Too many open files (os error 24)"},"time":1.574064833}
```

This issue is caused by the default file descriptor (FD) limit on macOS, which is set to a relatively low value of 256.

To resolve this issue, you can increase the default FD limit on your system. To do so, run the following command:

```
ulimit -n 10000
```

This will temporarily set the FD limit to 10,000. Next, use `gaianet init` and `gaianet start` commands in the SAME terminal.

## File I/O error

```
    * Import the Qdrant collection snapshot ...
      The process may take a few minutes. Please wait ...
    * [Error] Failed to recover from the collection snapshot. An error occurred processing field `snapshot`: File I/O error: Operation not permitted (os error 1) 
```

It typically indicates that the Qdrant instance was not shut down properly before you try to init it again with a new snapshot. The solution is to stop the GaiaNet node first. 

```
gaianet stop
```

Alternatively, you could mannually kill the processes from the terminal or in the OS's Actvity Monitor.

```
sudo pkill -9 qdrant
sudo pkill -9 wasmedge
sudo pkill -9 frpc
```

Then you can run `gaianet init` and then `gaianet start` again.

## The "Failed to open the file" Error

```
Warning: Failed to open the file 
Warning: https://huggingface.co/datasets/max-id/gaianet-qdrant-snapshot/resolve
Warning: /main/consensus/consensus.snapshot: No such file or directory
curl: (23) Failure writing output to destination
```

The reason for this type of error is that when executing `gaianet init`, the comments in `config.json` are run. The solution is to delete the comments in `config.json` and re-run the `gaianet init` command.
