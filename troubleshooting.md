# 🔧 Troubleshooting Common Issues

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
