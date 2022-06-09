import { Icon } from '@mui/material';

const masterData = [
    {
        title: 'Master Data',
        icon: <Icon className="material-icon-outlined">inventory</Icon>,
        link: '',
        children: [
            {
                title: 'MasterData',
                subTitle: 'Sub Type Document',
                icon: <Icon className="material-icon-outlined">article</Icon>,
                link: '/masterData/subTypeDocument',
            },
            // {
            //     title: 'MasterData',
            //     subTitle: 'Attachments',
            //     icon: <Icon className="material-icon-outlined">attachment</Icon>,
            //     link: '/masterData/attachments',
            // },
            {
                title: 'MasterData',
                subTitle: 'Mapping Approval',
                icon: <Icon className="material-icon-outlined">map</Icon>,
                link: '/masterData/MappingApproval'
            }
        ]
    }
]

export default masterData;