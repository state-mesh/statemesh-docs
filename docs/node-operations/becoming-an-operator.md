---
title: "Becoming an Operator"
---

[//]: # (import Figure from '@site/src/components/figure';)

# Becoming a Node Operator

StateMesh offers a permissionless environment where anyone can become a node operator. This guide walks you through the process of joining the network as an operator and understanding the requirements and benefits.

## Prerequisites

Before registering as a node operator, ensure you have:

* A machine meeting minimum requirements:
    * 2 CPU cores
    * 4 GB RAM
    * 50 GB storage
    * Stable internet connection
* SSH access with root or sudo privileges
* Basic understanding of Linux systems
* USDT balance for operational costs

## Registration Methods

StateMesh supports two primary methods of registering as a node operator:

### 1. New VM Registration
Best for operators starting with cloud infrastructure:
* Select from supported cloud providers
* Follow guided VM creation process
* Automatic setup and configuration

### 2. Existing Machine Registration
Suitable for operators with existing infrastructure:
* Use existing virtual machines
* Register bare metal servers
* Convert existing Kubernetes nodes

## Registration Process

1. **Initial Setup**
    * Navigate to the Dashboard
    * Click "Become a Node Operator"
    * Choose your registration method

2. **Machine Configuration**
    * For new VMs: Select provider and instance type
    * For existing machines: Prepare SSH access
    * Configure basic settings

3. **Node Registration**
    * Run the registration command:
   ```bash
   curl -sfLH "SM_ID: your_key" http://<region-address>:8080/api/start | sh -
