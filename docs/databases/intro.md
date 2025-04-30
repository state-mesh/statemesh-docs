---
title: Managed databases in StateMesh
---

Please familiarize yourself with the [StateMesh Concepts](../getting-started/concepts.mdx) before proceeding.

:::info
Databases are in Early Access Preview. This means that the feature is still in development and may change before it is fully released.
:::

Databases in StateMesh are a fast and secure way to spin-up relational DBMS for your apps. They are PostgreSQL databases managed by a performant Kubernetes operator. Our managed databases feature:
* Fast deployment
* Multiple replicas
* Accessible only from inside the cluster with an option to make them available via a public ingress
* Resource requirements configuration
* Logical backups
* Benefits from the flexible project and [deployment profile](../projects/profiles.mdx) setup  


## Entrypoints
Entrypoints expose databases to the outside world using a public DNS name. They are TCP ingresses which use the SNI (Server Name Indication) to route traffic to the correct resource.

:::tip
A typical entrypoint is a FQDN in the form `https://db-<db-name>-<db-id>.<zone>.statemesh.net`
:::


## Volumes
The root disk bound to the lifecycle of the node the database is running on. If the respective node is decommissioned, any user data stored on the root disk will be lost. While node decommissioning is rare, users are advised to attach additional volumes to the database to store persistent data.

Volumes are the preferred way to persist data in StateMesh. Volumes are mounted into containers and are backed by a storage provider. StateMesh supports the following types of storage providers:

- **S3 Bucket**: volumes are stored in an S3 bucket that you provide. This is call Bring Your Own Storage (BYOS) and is useful for storing sensitive data. StateMesh does not access any data from your S3 bucket.
- **StateMesh**: volumes are provided by StateMesh using our network storage system. The data we store is encrypted and replicated across multiple machines for fault tolerance. This is typically used for sensitive data, because nodes never have access to this data.
