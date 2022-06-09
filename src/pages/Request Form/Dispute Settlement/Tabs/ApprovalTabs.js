import React from "react";
import Table, {
  TableContainer,
  TablePaginationContainer,
  TableHeadData,
  PaginationWrapper,
} from "@mostrans/web-components/components/base/Table";

export default function ApprovalTabs() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Status</th>
            <th>User</th>
            <th>Message</th>
            <th>Date</th>
            <th>Lead Time</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
