import { Icon } from '@mui/material';

export default [
    {
        title: 'MasterData',
        icon: <Icon className="material-icon-outlined">inventory</Icon>,
        link: '',
        children: [
            {
                title: 'Sub Type Document',
                icon: <Icon className="material-icon-outlined">article</Icon>,
                link: '/masterData/subTypeDocument',
            },
            {
                title: 'Attachments',
                icon: <Icon className="material-icon-outlined">attachment</Icon>,
                link: '/masterData/attachments',
            },
            {
                title: 'Reason Reject',
                icon: <Icon className="material-icon-outlined">dangerous</Icon>,
                link: '/masterData/reasonReject',
            },
            {
                title: 'Approval Mapping',
                icon: <Icon className="material-icon-outlined">dashboard</Icon>,
                link: '/masterData/approvalMapping'
            }
        ]
    }
]