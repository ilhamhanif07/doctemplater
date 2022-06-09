import BlankLayout from "../../components/layout/BlankLayout";
import Deeds from "../../pages/Request Form/Deeds/Deeds";
import ShipperAgreements from "../../pages/Request Form/Shipper Agreement/ShipperAgreements";

const request = [
    {
        path: '/request',
        element: <BlankLayout />,
        children: [
            // {
            //     path: '/request/agreement',
            //     element: <Agreement />,
            // },
            // {
            //     path: '/request/license',
            //     element: <License />,
            // },
            // {
            //     path: '/request/intellectualProperty',
            //     element: <IntellectualProperty />,
            // },
            // {
            //     path: '/request/letter',
            //     element: <Letter />,
            // },
            {
                path: '/request/transporterAgreements',
                element: <Deeds />,
            },
            {
                path: '/request/shipperAgreements',
                element: <ShipperAgreements />
            }
            // {
            //     path: '/request/disputeSettlement',
            //     element: <DisputeSettlement />,
            // },
        ]
    }
]

export default request;