import BlankLayout from "../../components/layout/BlankLayout";
import Attachments from "../../pages/Master Data/Attachments/Attachments";
import MappingApproval from "../../pages/Master Data/Mapping Approval/MappingApproval";
import SubTypeDocument from "../../pages/Master Data/Sub Type Document/SubTypeDocument";

const masterData = [
    {
        path: '/masterData',
        element: <BlankLayout />,
        children: [
            {
                path: '/masterData/subTypeDocument/',
                element: <SubTypeDocument />
            },
            {
                path: '/masterData/attachments',
                element: <Attachments />
            },
            {
                path: '/masterData/mappingApproval',
                element: <MappingApproval />
            }
        ]
    },
]

export default masterData;