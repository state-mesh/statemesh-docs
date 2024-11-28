---
title: "Node Registration"
---

[//]: # (import Figure from '@site/src/components/figure';)

# Node Registration

Node registration in StateMesh can be accomplished through two primary methods: registering a new virtual machine or registering an existing machine. This guide covers both processes in detail.

## Registering a New Virtual Machine

The process of registering a new VM consists of several steps:

1. **Provider Selection**
* From the Dashboard, select "Register node"
* Choose "Register new VM"
* Select your preferred cloud provider
* Choose the region closest to your location

2. **VM Configuration**
* Select instance type based on your needs
* Configure basic settings:
    * CPU allocation
    * Memory size
    * Storage capacity
    * Network requirements

3. **Node Setup**
* Follow provider-specific VM creation steps
* Wait for VM provisioning to complete
* System will configure necessary components:
    * Operating system setup
    * Network configuration
    * Security settings

## Registering an Existing Machine

For operators with existing infrastructure:

1. **Prerequisites Check**
* Ensure SSH access with root or sudoers privileges
* Verify machine meets minimum requirements
* Check network connectivity

2. **Registration Process**
* Select "Register existing machine" option
* Follow the machine connection instructions
* * Run the registration command:
```bash
curl -sfLH "SM_ID: your_key" http://86.125.10.243:8080/api/start | sh - 
```
3. **Verification**
* Wait for the installer to complete
* System will automatically disconnect
* Node will appear in your Dashboard

## Post-Registration Steps

After successful registration:

1. **Node Verification**
* Check node status in Dashboard
* Verify connectivity
* Test basic operations

2. **Initial Configuration**
* Set pricing parameters
* Configure workload preferences
* Setup monitoring

3. **Tower Service Activation**
* Verify Tower Service is running
* Monitor initial proof submissions
* Check tower height growth

## Common Issues

If you encounter issues during registration:

* **Connection Failures**
* Verify network connectivity
* Check firewall settings
* Ensure proper SSH access

* **Registration Timeout**
* Check system requirements
* Verify machine resources
* Retry registration process

* **Dashboard Detection**
* Allow up to 5 minutes for appearance
* Verify registration command execution
* Check for error messages in logs

## Next Steps

Once registration is complete:

1. Move to node configuration
2. Set up your pricing strategy
3. Begin accepting workloads

For detailed configuration instructions, proceed to the [Node Configuration](./node-configuration) guide.
