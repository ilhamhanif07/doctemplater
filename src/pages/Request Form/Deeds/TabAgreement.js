import React, { useState } from "react";
import { Grid } from "@mui/material";
import Tabs, { TabItem } from "@mostrans/web-components/components/base/Tabs";
import styled from "@emotion/styled";
import BadgeMostrans from "../../../components/GeneralComponent/BadgeMostrans";

export default function TabAgreement() {
  const [curTab, setCurTab] = useState(1);

  const TabsWithMargin = styled(Tabs)`
    margin-bottom: 10px;
  `;

  return (
    <div style={{ marginTop: "10px" }}>
      <Grid container>
        <TabsWithMargin>
          <TabItem
            current={curTab === 1}
            onClick={() => {
              setCurTab(1);
            }}
          >
            Draft <BadgeMostrans className="ml-2" tipe="danger" text={"5"} />
          </TabItem>
          <TabItem
            current={curTab === 2}
            onClick={() => {
              setCurTab(2);
            }}
          >
            Waiting For Approval
          </TabItem>
          <TabItem
            current={curTab === 3}
            onClick={() => {
              setCurTab(3);
            }}
          >
            Waiting for Acknowledgement
          </TabItem>
          <TabItem
            current={curTab === 4}
            onClick={() => {
              setCurTab(4);
            }}
          >
            Waiting for Review
          </TabItem>
          <TabItem
            current={curTab === 5}
            onClick={() => {
              setCurTab(5);
            }}
          >
            Waiting for Confirmation
          </TabItem>
          <TabItem
            current={curTab === 6}
            onClick={() => {
              setCurTab(6);
            }}
          >
            Waiting for Finalization
          </TabItem>
          <TabItem
            current={curTab === 7}
            onClick={() => {
              setCurTab(7);
            }}
          >
            Done
          </TabItem>
          <TabItem
            current={curTab === 8}
            onClick={() => {
              setCurTab(8);
            }}
          >
            Waiting for Revision
          </TabItem>
          <TabItem
            current={curTab === 9}
            onClick={() => {
              setCurTab(9);
            }}
          >
            Rejected
          </TabItem>
        </TabsWithMargin>
      </Grid>
    </div>
  );
}
