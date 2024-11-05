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
            ]
        }
    ],
};
