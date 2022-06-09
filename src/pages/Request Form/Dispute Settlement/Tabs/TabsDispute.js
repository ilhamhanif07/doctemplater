import React, { useState } from "react";
import { Grid } from "@mui/material";
import Tabs, { TabItem } from "@mostrans/web-components/components/base/Tabs";
import DetailTabs from "./DetailTabs";
import AttachmentTabs from "./AttachmentTabs";
import ReviewerTabs from "./ReviewerTabs";
import ApprovalTabs from "./ApprovalTabs";

export default function TabsDispute() {
  const [curTab, setCurTab] = useState("");

  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container>
        <Tabs>
          <TabItem
            current={curTab === 1}
            onClick={() => {
              setCurTab(1);
            }}
          >
            Detail
          </TabItem>
          <TabItem
            current={curTab === 2}
            onClick={() => {
              setCurTab(2);
            }}
          >
            Attachment
          </TabItem>
          <TabItem
            current={curTab === 3}
            onClick={() => {
              setCurTab(3);
            }}
          >
            Reviewer/Confirmation
          </TabItem>
          <TabItem
            current={curTab === 4}
            onClick={() => {
              setCurTab(4);
            }}
          >
            Approval Log
          </TabItem>
        </Tabs>
      </Grid>
      <Grid style={{ marginTop: "20px" }}>
        {curTab == "1" ? (
          <DetailTabs />
        ) : curTab == "2" ? (
          <AttachmentTabs />
        ) : curTab == "3" ? (
          <ReviewerTabs />
        ) : curTab == "4" ? (
          <ApprovalTabs />
        ) : null}
      </Grid>
    </div>
  );
}
