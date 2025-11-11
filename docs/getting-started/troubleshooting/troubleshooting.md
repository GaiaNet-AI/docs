---
sidebar_position: 6
---

# Troubleshooting

### The system cannot find CUDA libraries {#hidden-headings}
<details>
  <summary>The system cannot find CUDA libraries</summary>

  Sometimes, the CUDA toolkit is installed in a non-standard location. The error message here is often not able to find `libcu*12`. For example, you might have CUDA installed with your Python setup. The following command would install CUDA into Python's environment.

  ```bash
  sudo apt install python3-pip -y
  pip3 install --upgrade fschat accelerate autoawq vllm
  ```

  The easiest way to fix is simply to link those non-standard CUDA libraries to the standard location, like this.

  ```bash
  ln -s /usr/local/lib/python3.10/dist-packages/nvidia/cublas/lib/libcublas.so.12 /usr/lib/libcublas.so.12
  ln -s /usr/local/lib/python3.10/dist-packages/nvidia/cuda_runtime/lib/libcudart.so.12 /usr/lib/libcudart.so.12
  ln -s /usr/local/lib/python3.10/dist-packages/nvidia/cublas/lib/libcublasLt.so.12 /usr/lib/libcublasLt.so.12
  ```

</details>

### Failed to recover from collection snapshot on Windows WSL {#hidden-headings}
<details>
  <summary>Failed to recover from collection snapshot on Windows WSL</summary>

  On Windows WSL, you could see this error while running `gaianet init`.

  ```bash
    * Import the Qdrant collection snapshot ...
        The process may take a few minutes. Please wait ...
      * [Error] Failed to recover from the collection snapshot. {"status":{"error":"Service internal error: Tokio task join error: task 1242 panicked"},"time":0.697784244}
  ```

  When you look into the `~/gaianet/log/init-qdrant.log` file, you could see this line of error

  ```bash
  2024-05-20T07:24:52.900895Z ERROR qdrant::startup: Panic occurred in file /home/runner/.cargo/registry/src/index.crates.io-6f17d22bba15001f/cgroups-rs-0.3.4/src/memory.rs at line 587: called `Result::unwrap()` on an `Err` value: Error { kind: ReadFailed("/sys/fs/cgroup/memory.high"), cause: Some(Os { code: 2, kind: NotFound, message: "No such file or directory" }) }  
  ```

  The solution is to disable the `autoMemoryReclaim` feature in WSL. Step to turn on/off this feature:

  1. Edit `C:\Users<Your user name>.wslconfig`
  2. Remove or comment out `autoMemoryReclaim` in `[experimental]` section.

  ![](/img/docs/disable_autoMemoryReclaim_wsl.png)

  Thanks to [RoggeOhta](https://github.com/RoggeOhta) for discovering this. You can learn more about it [here](https://github.com/GaiaNet-AI/gaianet-node/issues/46).

</details>

### Failed to start the node with an error message `Port 8080 is in use. Exit ...` {#hidden-headings}
<details>
  <summary>Failed to start the node with an error message `Port 8080 is in use. Exit ...`</summary>

  You may see the following error when you run `gaianet start`. 

  ```bash
  gaianet start
  [+] Checking the config.json file ...

  You already have a private key.
  [+] Starting LlamaEdge API Server ...

      Port 8080 is in use. Exit ...
  ```

  The solution is to run `gaianet stop`  first to kill all processes, and then run `gaianet start` to start the node.

</details>

### Load library failed: libgomp.so.1: cannot open shared object file: No such file or directory {#hidden-headings}
<details>
  <summary>Load library failed: libgomp.so.1: cannot open shared object file: No such file or directory</summary>

  On Windows WSL, you may see this error when running `curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash`

  ```bash
  * Generate node IS
  [2024-07-02 17:50:55.175] [error] loading failed: invalid path, Code: 0x20
  [2024-07-02 17:50:55.175] [error]   Load library failed: libgomp.so.1: cannot open shared object file: No such file or directory
  [2024-07-02 17:50:55.176] [error] loading failed: invalid path, Code: 0x20
  [2024-07-02 17:50:55.176] [error]   Load library failed: libgomp.so.1: cannot open shared object file: No such file or directory
  ```
  The error is caused by the lack of `libgomp.so.1`, a library that should be automatically installed on Ubuntu by default.

  To solve this, you must install the `libgomp.so.1` library.

  ```bash
  sudo apt-get update
  sudo apt-get install libgomp1
  ```

  If you're using CentOS, you can use

  ```bash
  yum install libgomp
  ```

  This issue was fixed in `version 0.2.2`.

</details>

### Failed to remove the default collection {#hidden-headings}
<details>
  <summary>Failed to remove the default collection</summary>

  ```bash
  Failed to remove the default collection. {"status":{"error":"Service internal error: No such file or directory (os error 2)"},"time":0.050924542}
  ```

  It typically indicates that the Qdrant instance was not shut down properly before you try to init it again with a new snapshot. The solution is to stop the GaiaNet node first.

  ```bash
  gaianet stop
  ```

  Alternatively, you could manually kill the processes from the terminal or in the OS's Activity Monitor.

  ```bash
  sudo pkill -9 qdrant
  sudo pkill -9 wasmedge
  sudo pkill -9 frpc
  ```

  Then you can run `gaianet init` and then `gaianet start` again.

</details>

### File I/O error {#hidden-headings}
<details>
  <summary>File I/O error</summary>

  ```bash
      * Import the Qdrant collection snapshot ...
        The process may take a few minutes. Please wait ...
      * [Error] Failed to recover from the collection snapshot. An error occurred processing field `snapshot`: File I/O error: Operation not permitted (os error 1) 
  ```

  It typically indicates that the Qdrant instance was not shut down properly before you try to init it again with a new snapshot. The solution is to stop the GaiaNet node first. 

  ```bash
  gaianet stop
  ```

  Alternatively, you could manually kill the processes from the terminal or in the OS's Activity Monitor.

  ```bash
  sudo pkill -9 qdrant
  sudo pkill -9 wasmedge
  sudo pkill -9 frpc
  ```

  Then you can run `gaianet init` and then `gaianet start` again.

</details>

### The "Failed to open the file" Error {#hidden-headings}
<details>
  <summary>The "Failed to open the file" Error</summary>

  ```bash
  Warning: Failed to open the file 
  Warning: https://huggingface.co/datasets/max-id/gaianet-qdrant-snapshot/resolve
  Warning: /main/consensus/consensus.snapshot: No such file or directory
  curl: (23) Failure writing output to destination
  ```

  The reason for this type of error is a misconfigured `config.json` file. The solution is to delete the comments in `config.json` and re-run the `gaianet init` command.

</details>



### The "Too many open files" Error on macOS {#hidden-headings}
<details>
  <summary>The "Too many open files" Error on macOS</summary>

  When running `gaianet init` to initialize a new node on macOS, you may encounter an error related to snapshot recovery if your snapshot contains a large amount of text. The error message may be the following:

  ```bash
  * [Error] Failed to recover from the collection snapshot. {"status":{"error":"Service internal error: Too many open files (os error 24)"},"time":1.574064833}
      * [Error] Failed to recover from the collection snapshot. {"status":{"error":"Service internal error: Too many open files (os error 24)"},"time":1.574064833}
  ```

  This issue is caused by the default file descriptor (FD) limit on macOS, which is set to a relatively low value of 256.

  To resolve this issue, you can increase the default FD limit on your system. To do so, run the following command:

  ```bash
  ulimit -n 10000
  ```

  This will temporarily set the FD limit to 10,000. Next, use `gaianet init` and `gaianet start` commands in the SAME terminal.

</details>

### Permission denied when use the installer script to install WasmEdge {#hidden-headings}
<details>
  <summary>Permission denied when use the installer script to install WasmEdge</summary>

  When running `curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash` to install GaiaNet node software, you may meet the permission denied error especially installing the WasmEdge runtime. 

  ![](/img/docs/troubleshooting-01.png)

  This error is caused by the lack of `/tmp` write permission. You can use `--tmpdir` to specify where you want to install the WasmEdge runtime. Please note, you will need to have written permission to the `<YOUR_PATH>` folder.

  ```bash
  curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s -- --tmpdir YOUR_PATH
  ```

  This problem is fixed in `version 0.2.3`.

</details>

### gaia-nexus is not ready (exit status: 56) {#hidden-headings}
<details>
  <summary>gaia-nexus is not ready (exit status: 56)</summary>

  If you see the following error message, please use `gaianet start --wait 60` and try again. 

  ![gaia-nexus is not ready (exit status: 56)](/img/docs/gaia-nexus-exit-56.png)

  Alternatively, you should try reducing the `chat_ctx_size` value in the `config.json` to a smaller number like 8192 or 4096 as the default value may be too large for your machine.

  ![context size too large](/img/docs/ctx-size-too-large.png)

</details>

### My node response is slow {#hidden-headings}
<details>
  <summary>My node response is slow</summary>

  You should try reducing the `chat_ctx_size` value in the `config.json` to a smaller number like 8192 or 4096 as the default value may be too large for your machine.

  ![context size too large](/img/docs/ctx-size-too-large.png)

  If you still have slow response, you should use a higher end machine.

</details>

## Node Setup Problems

### "Illegal instruction (core dumped)" Error

Problem: Your CPU doesn't support modern AVX instructions.
Solution: Install WasmEdge no-AVX version:
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install_v2.sh | bash -s -- -v 0.13.5 --noavx
Then restart your GaiaNet node:
bashgaianet stop
gaianet start
Port Already in Use

Problem: Port 8080 is already occupied.
Solution: Check what's using the port:
bashsudo netstat -tulpn | grep :8080
Kill the process or use a different port in your config.
Memory Issues

Problem: Node crashes with out of memory errors.
Solution: Ensure you meet minimum requirements:
4GB RAM minimum (8GB recommended)
10GB free disk space
RAG-Related Issues
Node Responds to General Queries but Not Specific Ones

Problem: RAG database retrieval issues with domain-specific questions.
Solution:
Check your snapshot was properly imported
Review logs: ~/gaianet/log/start-llamaedge.log
Verify your knowledge base was correctly processed

