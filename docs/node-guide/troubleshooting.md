---
sidebar_position: 8
---

# Troubleshooting


## Resolving "Too many open files" Error on macOS when Initializing Gaianet Node

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

This will temporarily set the FD limit to 10,000. Next, use `gaianet init` to init your Gaianet node.


