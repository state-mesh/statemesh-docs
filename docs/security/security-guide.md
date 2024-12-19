---
title: "Security Guide"
---

# Security Guide

## Zero-Trust Environment Overview

StateMesh operates as a permissionless system where anyone can contribute machines ranging from cloud VMs to personal laptops. This open nature necessitates a zero-trust environment for workload execution.

### Node Security Classification
StateMesh classifies nodes based on their security capabilities:
* **TPM-enabled nodes**: Machines with hardware TPM support
* **Weak nodes**: Machines without TPM, using vTPM emulation
* **Security flagging**: Transparent marking of weak nodes for customer awareness

## Node Security Implementation

### Installation Process Security
The StateMesh installation process implements several critical security measures:

1. **System Verification** 
* Checks for X environment presence
* Verifies no active shells
* Disables SSH access

* Check for X environment
```systemctl status display-manager ```

* Verify no active shells
``` w ```

* Disable SSH access
``` systemctl stop sshd ```
``` systemctl disable sshd ```

2. **Process Protection**
* Simulates dangling I/O task to prevent process termination
* Requires complete reboot for any installation interruption
* Disables interactive logins and single boot access

3. **Storage Security** 
* Creates encrypted block device for ``` `/var/lib/statemesh` ```
* Generates temporary encryption keys locally
* Immediately wipes keys from memory after mounting
* Encryption persists until next reboot

* Create encrypted block device
``` cryptsetup luksFormat /dev/sdX ```

* Mount to StateMesh directory
``` mount /dev/mapper/statemesh /var/lib/statemesh ```

### Network Security

#### aTLS Implementation
StateMesh uses attestation-enhanced TLS (aTLS) for secure communication:
* Embeds attestation statements in TLS handshake
* Utilizes TPM/vTPM for trust verification
* Prevents man-in-the-middle attacks
* Ensures node authenticity

#### Node Isolation 
* Firewall rules prevent unauthorized node-to-node communication
* All inter-node traffic is end-to-end encrypted
* Geographic zone assignment for network segmentation

* Configure firewall rules
``` default deny incoming ```
``` ufw enable ```

## Attack Surface Protection

### Known Attack Vectors and Mitigations

1. **Installation Interruption**
* Process resistant to termination through system calls
* Reboot requirement ensures clean state
* No partial installations allowed

2. **Root Access Attempts** 
* Active process monitoring for terminal devices
* Immediate termination of detected pty/tty sessions
* Prevention of persistent root access

* Check for unauthorized terminal sessions
``` ps aux | grep pts ```

* Monitor terminal devices
``` watch -n1 'ls -l /dev/pts/' ```

3. **Offline Disk Access**
* All sensitive data stored in encrypted block devices
* Temporary encryption keys never persist
* Resistant to offline mounting and single-user mode

4. **Network Attacks**
* All communication encrypted via aTLS
* TPM attestation prevents impersonation
* Firewall rules limit attack surface

## Best Practices

### For Node Operators
* Ensure clean Ubuntu 22.04 installation
* Maintain system updates
* Follow security configuration guidelines
* Monitor for security events

### For Application Owners
* Use TPM-enabled nodes for sensitive workloads
* Implement additional encryption for critical data
* Regular security audits
* Monitor workload behavior

## Security Recommendations

For optimal security:
* Avoid processing sensitive data on weak nodes
* Implement additional security measures for critical workloads
* Regular monitoring of node security status
* Follow security best practices for application deployment
