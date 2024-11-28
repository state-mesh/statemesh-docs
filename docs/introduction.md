---
title: "Introduction"
---
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Introduction

StateMesh is designed to be a permissionless and secure Kubernetes-compatible runtime. It is designed to be a drop-in replacement for Kubernetes, but with significant changes to the runtime model. Many changes were necessary to make StateMesh permissionless and secure, and this document will explain the rationale behind these changes.

## Architecture

### Time Towers
Each node operator must run the StateMesh [Tower Service](./time-towers.md) service on his machine to join the global miner pool. Being in the miner pool is necessary to be able to join a cluster. The higher the Time Tower, the more likely the node is to be elected for task execution.

### Blockchain

StateMesh uses its own L1 blockchain to store the miner states and miner registry. Miners regularly submit proofs to their miner state instance on the chain. At the end of each chain epoch, the miner registry is reconfigured for each cluster, to reflect jailed nodes, elected node operators for the next epoch and and to update rewards for active node operators.

### Agent registration
Each cluster publishes a fixed registration address for node operators to connect to the cluster. After registration, the agent nodes establish a connection directly to one of the server nodes.
N
