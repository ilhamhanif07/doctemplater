import React, { useEffect, useState } from "react";
import { useApolloClient } from '@apollo/client';

import { Paper } from "@mui/material";
import Input from '@mostrans/web-components/components/base/Input'
import DataTable from '@mostrans/web-components/components/advanced/DataTable'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'

import { ToastContainer, toast } from 'react-toastify'
import Tabs, { TabItem, TabItemBadge } from '@mostrans/web-components/components/base/Tabs';
import Select from '@mostrans/web-components/components/base/Select';

import { getDocumentSubType, getDocumentType } from '../../../GQL/query';

function SubTypeDocument() {
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
			position: 'center',
			renderCell: (data) => {
				let btnColor;
				let btnText;
				if (data.status) {
					btnColor = 'primary';
					btnText = 'Active';
				} else {
					btnColor = 'danger';
					btnText = 'Inactive';
				}
				return <Button variant="contained" size="small" color={btnColor}>{btnText}</Button>
			}
		},
		{
			getCellKey: (data) => data.id,
			selector: 'action',
			header: 'Action',
			sortable: false,
			position: 'center',
		}
	]

	const client = useApolloClient();
	const [dataTable, setDataTable] = useState([]);
	const [docType, setDocType] = useState([]);
	const [fltDocType, setFltDocType] = useState(null);
	const [fltStatus, setFltStatus] = useState(null);
	const [fltSearch, setFfltSearch] = useState(null);

	const fetchDataSubTypeDoc = async () => {
		const res = await getDocumentSubType(client);
		const arr = []

		if (res.response.status === '000') {
			res.data.forEach((el, index) => {
				arr.push({
					id: el.id,
					document_subtype_name: el.document_subtype_name,
					document_type_id: el.documentType.id,
					document_type_name: el.documentType.document_type_name,
					status: el.status,
				})
			})

			setDataTable(arr);
		} else {
			toast.error('Gagal Fetch Data');
		}
	}

	const fetchDataDocType = async () => {
		const res = await getDocumentType(client);
		const arr = [];

		if (res.response.status === '000') {
			res.data.forEach((el, index) => {
				arr.push({
					label: el.document_type_name,
					value: el.id
				})
			})

			setDocType(arr);
		} else {
			toast.error('Gagal Fetch Document Type');
		}
	}

	useEffect(() => {
		if (client) {
			fetchDataSubTypeDoc();
			fetchDataDocType();
		}
	}, [])

	return (
		<React.Fragment>
			<Paper sx={{ p: 2 }}>
				<h1>Sub Type Document</h1>
				<div className="row mt-1">
					<div className="col-md-3">
						<Select
							options={docType}
							placeholder="Document Type..."
							value={fltDocType} />
					</div>
					<div className="col-md-3">
						<Select
							options={[{ label: 'Active', value: true }, { label: 'Inactive', value: false }]}
							placeholder="Status..."
							value={fltStatus} />
					</div>
					<div className="col-md-3">
						<Input
							type="text"
							placeholder="Search..."
							style={{ width: '100%' }}
							value={fltSearch} />
					</div>
					<div className="col-md-3 d-flex justify-content-end">
						<Button variant="contained" color="primary" startIcon={<Icon>add</Icon>}>Tambah</Button>
					</div>
				</div>

				<DataTable
					className="mt-1"
					data={dataTable}
					columns={column}
					getRowKey={(data) => data.id}
					hasPagination={true}
				/>
			</Paper>
		</React.Fragment>
	);
}

export default SubTypeDocument;
