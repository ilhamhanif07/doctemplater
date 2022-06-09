import { Paper } from "@mui/material";
import React from "react";

import Input from '@mostrans/web-components/components/base/Input'
import DataTable from '@mostrans/web-components/components/advanced/DataTable'

function Attachments() {

	const column = [
		{
			getCellKey: (data) => data.document_subtype_name,
			selector: 'document_subtype_name',
			header: 'Document Subtype',
			sortBy: 'document_subtype_name',
			sortable: true,
			position: 'center'
		},
		{
			getCellKey: (data) => data.document_type_name,
			selector: 'document_type_name',
			header: 'Document Type',
			sortBy: 'document_type_name',
			sortable: true,
			position: 'center'
		},
		{
			getCellKey: (data) => data.status,
			selector: 'status',
			header: 'Status',
			sortBy: 'status',
			sortable: true,
			position: 'center'
		}
	]

	return (
		<React.Fragment>
			<Paper sx={{ p: 2 }}>
				<h1 className="ml-1">Attachments</h1>
				<div className="row">
					<div className="col-md-10">

					</div>
					<div className="col-md-2 d-flex justify-content-end">
						<Input type="text" placeholder="Search..." />
					</div>
				</div>

				<DataTable
					className="mt-1"
					data={[]}
					columns={column}
					getRowKey={(data) => data.id}
					hasPagination={true}
				/>
			</Paper>
		</React.Fragment>
	);
}

export default Attachments;
