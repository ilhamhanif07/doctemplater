import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Tabs, {
  TabItem,
  TabItemBadge,
} from "@mostrans/web-components/components/base/Tabs";
import styled from "@emotion/styled";

export default function TabAgreement({ handleChangeTab, counts }) {
  const [curTab, setCurTab] = useState("");

  useEffect(() => {
    handleChangeTab(curTab);
  }, [curTab]);

  const GreenTabItemBadge = styled(TabItemBadge)`
    color: green;
  `;

  return (
    <Tabs>
      <TabItem
        current={curTab === 1}
        onClick={() => {
          setCurTab(1);
        }}
      >
        Draft <GreenTabItemBadge>{counts?.draft}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 2}
        onClick={() => {
          setCurTab(2);
        }}
      >
        Waiting For Approval
        <GreenTabItemBadge>{counts?.wfApp}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 3}
        onClick={() => {
          setCurTab(3);
        }}
      >
        Waiting for Acknowledgement
        <GreenTabItemBadge>{counts?.wfAck}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 4}
        onClick={() => {
          setCurTab(4);
        }}
      >
        Waiting for Review
        <GreenTabItemBadge>{counts?.wfView}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 5}
        onClick={() => {
          setCurTab(5);
        }}
      >
        Waiting for Confirmation
        <GreenTabItemBadge>{counts?.wfCon}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 6}
        onClick={() => {
          setCurTab(6);
        }}
      >
        Waiting for Finalization
        <GreenTabItemBadge>{counts?.wfFin}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 7}
        onClick={() => {
          setCurTab(7);
        }}
      >
        Done
        <GreenTabItemBadge>{counts?.done}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 8}
        onClick={() => {
          setCurTab(8);
        }}
      >
        Waiting for Revision
        <GreenTabItemBadge>{counts?.wfRev}</GreenTabItemBadge>
      </TabItem>
      <TabItem
        current={curTab === 9}
        onClick={() => {
          setCurTab(9);
        }}
      >
        Rejected
      </TabItem>
    </Tabs>
  );
}
