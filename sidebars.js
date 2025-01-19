module.exports = {
    mySidebar: [
        {
            type: 'category',
            label: 'About',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'about/welcome',
                    label: 'Welcome'
                },
            ]
        },
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'getting-started/overview',
                    label: 'Overview'
                },
                {
                    type: 'doc',
                    id: 'getting-started/concepts',
                    label: 'Concepts'
                },
                {
                    type: 'doc',
                    id: 'getting-started/node-classes',
                    label: 'Node Classes'
                },
                {
                    type: 'doc',
                    id: 'getting-started/quickstart',
                    label: 'Quickstart Guide'
                },
            ]
        },
        {
            type: 'category',
            label: 'Architecture',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'architecture/global',
                    label: 'Global Architecture',
                },
                {
                    type: 'doc',
                    id: 'architecture/blockchain',
                    label: 'Blockchain Architecture',
                },
                {
                    type: 'doc',
                    id: 'architecture/time-towers',
                    label: 'Time Towers',
                }
            ]
        },
        {
            type: 'category',
            label: 'Applications ',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'applications/intro',
                    label: 'Introduction'
                },
                {
                    type: 'doc',
                    id: 'applications/create',
                    label: 'Create an App'
                },
                {
                    type: 'doc',
                    id: 'applications/configure',
                    label: 'Configure an App'
                },
                {
                    type: 'doc',
                    id: 'applications/manage',
                    label: 'Manage an App'
                },{
                    type: 'doc',
                    id: 'applications/storage-providers',
                    label: 'Storage Providers'
                },
                {
                    type: 'doc',
                    id: 'applications/marketplace',
                    label: 'Marketplace'
                }
            ]
        },
        {
            type: 'category',
            label: 'Node Operators',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'node-operators/intro',
                    label: 'Getting Started'
                },
                {
                    type: 'doc',
                    id: 'node-operators/onboarding',
                    label: 'Become an Operator'
                }
            ]
        },
        {
            type: 'category',
            label: 'Blockchain',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'blockchain/info',
                    label: 'Introduction'
                },
                {
                    type: 'doc',
                    id: 'blockchain/evm-diff',
                    label: 'EVM Differences'
                },
                {
                    type: 'doc',
                    id: 'blockchain/wallet',
                    label: 'Wallet'
                },
                {
                    type: 'doc',
                    id: 'blockchain/staking',
                    label: 'Staking, Locking and Rewards'
                },
                {
                    type: 'doc',
                    id: 'blockchain/validator',
                    label: 'Become a Validator'
                }
            ]
        },
        {
            type: 'category',
            label: 'Support',
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
