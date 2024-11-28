module.exports = {
    mySidebar: [
        {
            type: 'doc',
            label: 'StateMesh',
            id: 'main'
        },
        {
            type: 'doc',
            label: 'Intro',
            id: 'introduction'
        },
        {
            type: 'doc',
            label: 'Time Towers',
            id: 'time-towers'
        },
        {
            type: 'category',
            label: 'Architecture',
            link: {
                type: 'generated-index',
            },
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    label: 'Overview',
                    id: 'architecture/overview',
                },
                {
                    type: 'doc',
                    label: 'Network Architecture',
                    id: 'architecture/network-architecture',
                },
                {
                    type: 'doc',
                    label: 'Technical Requirements',
                    id: 'architecture/technical-requirements',
                }
            ]
        },
        {
            type: 'category',
            label: 'Installation',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'Installation Guide',
                    id: 'installation/installation-guide',
                },
                {
                    type: 'doc',
                    label: 'Quick Start Guide',
                    id: 'installation/quick-start-guide',
                }
            ]
        },
        {
            type: 'category',
            label: 'Advanced Configuration',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'Advanced Configuration Guide',
                    id: 'advanced-configuration/advanced-configuration-guide',
                },
                {
                    type: 'doc',
                    label: 'Backup and Recovery',
                    id: 'advanced-configuration/backup-and-recovery',
                },
                {
                    type: 'doc',
                    label: 'Monitoring Guide',
                    id: 'advanced-configuration/monitoring-guide',
                },
                {
                    type: 'doc',
                    label: 'Logging Guide',
                    id: 'advanced-configuration/logging-guide',
                }
            ]
        },
        {
            type: 'category',
            label: 'Operations',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'Operations Guide',
                    id: 'operations/operations-guide',
                },
                {
                    type: 'doc',
                    label: 'Troubleshooting Guide',
                    id: 'operations/troubleshooting-guide',
                }
            ]
        },
        {
            type: 'category',
            label: 'Node Operations',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'Node Operations',
                    id: 'node-operations/index',
                },
                {
                    type: 'doc',
                    label: 'Becoming an Operator',
                    id: 'node-operations/becoming-an-operator',
                },
                {
                    type: 'doc',
                    label: 'Node Registration',
                    id: 'node-operations/node-registration',
                },
                {
                    type: 'doc',
                    label: 'Node Configuration',
                    id: 'node-operations/node-configuration',
                },
                {
                    type: 'doc',
                    label: 'Wallet Management',
                    id: 'node-operations/wallet-management',
                }
            ]
        },
        {
            type: 'category',
            label: 'Application Management',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'Application Deployment',
                    id: 'application-management/application-deployment',
                },
                {
                    type: 'doc',
                    label: 'Application Monitoring',
                    id: 'application-management/application-monitoring',
                }
            ]
        },
        {
            type: 'category',
            label: 'Security',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'Security Guide',
                    id: 'security/security-guide',
                },
                {
                    type: 'doc',
                    label: 'Compliance Guide',
                    id: 'security/compliance-guide',
                }
            ]
        },
        {
            type: 'category',
            label: 'Reference',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'CLI Reference Guide',
                    id: 'reference/cli-reference-guide',
                },
                {
                    type: 'doc',
                    label: 'API Documentation',
                    id: 'reference/api-documentation',
                }
            ]
        },
        {
            type: 'category',
            label: 'Support',
            link: {
                type: 'generated-index',
            },
            items: [
                {
                    type: 'doc',
                    label: 'FAQs',
                    id: 'support/faqs',
                },
                {
                    type: 'doc',
                    label: 'Glossary',
                    id: 'support/glossary',
                }
            ]
        }
    ],
};
