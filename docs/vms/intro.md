---
title: Virtual Machines in StateMesh
---

Please familiarize yourself with the [StateMesh Concepts](../getting-started/concepts.mdx) before proceeding.

:::info
Virtual Machines are in Early Access Preview. This means that the feature is still in development and may change before it is fully released.
:::

Virtual Machines in StateMesh are a way to run your own operating system on the StateMesh network. Virtual Machines are the lowest-level concept in StateMesh, and they are the unit of deployment.

We currently support the following 64-bit Operating Systems:

- Ubuntu 20.04, 22.04, 24.02
- Fedora 40, 41
- CentOS 9

Due to the architecture of the network, Virtual Machines behave a bit differently compared to other cloud providers:

- The provide an adequate level of performance, Virtual Machines only run on the following [types of nodes](../getting-started/node-classes.mdx): **Bare-metal nodes**, and **Datacenter nodes**. This is because they require virtualization support from the hardware.
- The root disk bound to the lifecycle of the node the VM is running on. If the respective node is decommissioned, any user data stored on the root disk will be lost. While node decommissioning is rare, users are advised to attach additional volumes to the VM to store persistent data.
- Live migration of VMs is not yet supported. If a node is decommissioned, the VM will be terminated and will resurface on another node.
- Virtual Machines are not exposed directly to the public network, which means they don't have a public routable IP address. However, users can publish ports to the public network.

## Entrypoints
Entrypoints expose VMs to the outside world using a public DNS name. They are typically HTTPS, but StateMesh supports TCP and UDP as well. For HTTPS and TCP traffic, entrypoints use the SNI (Server Name Indication) to route traffic to the correct application. UDP traffic does not support SNI, so the entrypoint uses the port to route traffic.

:::tip
A typical entrypoint is a FQDN in the form `https://vm-<vm-name>-<vm-id>.<zone>.statemesh.net`
:::


## Volumes
The root disk bound to the lifecycle of the node the VM is running on. If the respective node is decommissioned, any user data stored on the root disk will be lost. While node decommissioning is rare, users are advised to attach additional volumes to the VM to store persistent data.

Volumes are the preferred way to persist data in StateMesh. Volumes are mounted into containers and are backed by a storage provider. StateMesh supports the following types of storage providers:

- **S3 Bucket**: volumes are stored in an S3 bucket that you provide. This is call Bring Your Own Storage (BYOS) and is useful for storing sensitive data. StateMesh does not store any data from your S3 bucket.
- **StateMesh**: volumes are provided by StateMesh using our network storage system. The data we store is encrypted and replicated across multiple machines for fault tolerance. This is typically used for sensitive data, because nodes never have access to this data.
