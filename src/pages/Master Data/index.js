import { Divider, Paper } from "@mui/material";
import React, { useState } from "react";

import Tabs, { TabItem, TabItemBadge } from '@mostrans/web-components/components/base/Tabs';
import SubTypeDocument from "./Sub Type Document/SubTypeDocument";
import Attachments from "./Attachments/Attachments";
import MappingApproval from "./Mapping Approval/MappingApproval";

export default function MasterData() {
    const [stdTab, setStdTab] = useState(true);
    const [attTab, setAttTab] = useState(false);
    const [maTab, setMaTab] = useState(false);
    const [mfaTab, setMfaTab] = useState(false);

    const handleStdTab = () => {
        setStdTab(true);
        setAttTab(false);
        setMaTab(false);
        setMfaTab(false);
    }

    const handleAttTab = () => {
        setStdTab(false);
        setAttTab(true);
        setMaTab(false);
        setMfaTab(false);
    }

    const handleMaTab = () => {
        setStdTab(false);
        setAttTab(false);
        setMaTab(true);
        setMfaTab(false);
    }

    const handleMfaTab = () => {
        setStdTab(false);
        setAttTab(false);
        setMaTab(false);
        setMfaTab(true);
    }

    return (
        <React.Fragment>
            <Paper sx={{ p: 2 }}>
                <Tabs className="mb-2">
                    <TabItem current={stdTab} onClick={handleStdTab}>
                        Sub Type Document
                    </TabItem>
                    <TabItem current={attTab} onClick={handleAttTab}>
                        Attachments
                    </TabItem>
                    <TabItem current={maTab} onClick={handleMaTab}>
                        Mapping Approval
                    </TabItem>
                    <TabItem current={mfaTab} onClick={handleMfaTab}>
                        Mapping Final Approver
                    </TabItem>
                </Tabs>

                {
                    stdTab && <SubTypeDocument />
                }

                {
                    attTab && <Attachments />
                }

                {
                    maTab && <MappingApproval />
                }
            </Paper>
        </React.Fragment>
    )
}