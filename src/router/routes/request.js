import BlankLayout from "../../components/layout/BlankLayout";
import Agreement from "../../pages/Request Form/Agreement/Agreement";
import Deeds from "../../pages/Request Form/Deeds/Deeds";
import DisputeSettlement from "../../pages/Request Form/Dispute Settlement/DisputeSettlement";
import IntellectualProperty from "../../pages/Request Form/Intellectual Property/IntellectualProperty";
import Letter from "../../pages/Request Form/Letter/Letter";
import License from "../../pages/Request Form/License/License";

const request = [
    {
        path: '/request',
        element: <BlankLayout />,
        children: [
            {
                path: '/request/agreement',
                element: <Agreement />,
            },
            {
                path: '/request/license',
                element: <License />,
            },
            {
                path: '/request/intellectualProperty',
                element: <IntellectualProperty />,
            },
            {
                path: '/request/letter',
                element: <Letter />,
            },
            {
                path: '/request/deeds',
                element: <Deeds />,
            },
            {
                path: '/request/disputeSettlement',
                element: <DisputeSettlement />,
            },
        ]
    }
]

export default request;