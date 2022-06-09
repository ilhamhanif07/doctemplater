import React from "react";
import Table, {
  TableContainer,
  TablePaginationContainer,
  TableHeadData,
  PaginationWrapper,
} from "@mostrans/web-components/components/base/Table";

export default function ReviewerTabs() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>Action</th>
            <th>Status</th>
            <th>Name</th>
            <th>Notes</th>
            <th>File Name</th>
            <th>Date</th>
            <th>Lead Time</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
