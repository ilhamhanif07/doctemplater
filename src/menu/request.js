import { Icon } from '@mui/material';

const request = [
    {
        title: 'Request Form',
        icon: <Icon className="material-icon-outlined">document</Icon>,
        link: '',
        children: [
            // {
            //     title: 'Request Form',
            //     subTitle: 'Agreement',
            //     icon: <Icon className="material-icon-outlined">gavel</Icon>,
            //     link: '/request/agreement'
            // },
            // {
            //     title: 'Request Form',
            //     subTitle: 'License',
            //     icon: <Icon className="material-icon-outlined">grade</Icon>,
            //     link: '/request/license'
            // },
            // {
            //     title: 'Request Form',
            //     subTitle: 'Intellectual Property',
            //     icon: <Icon className="material-icon-outlined">apartment</Icon>,
            //     link: '/request/intellectualProperty'
            // },
            // {
            //     title: 'Request Form',
            //     subTitle: 'Comp. Docs. Letter',
            //     icon: <Icon className="material-icon-outlined">email</Icon>,
            //     link: '/request/letter'
            // },
            {
                title: 'Request Form',
                subTitle: 'Transporter Agreements',
                icon: <Icon className="material-icon-outlined">copyright</Icon>,
                link: '/request/transporterAgreements'
            },
            {
                title: 'Request Form',
                subTitle: 'Shipper Agreements',
                icon: <Icon className="material-icon-outlined">handshake</Icon>,
                link: '/request/shipperAgreements'
            },
        ]
    }
]

export default request;