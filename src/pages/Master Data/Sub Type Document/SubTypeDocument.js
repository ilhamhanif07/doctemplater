import React, { useEffect, useState } from "react";
import { useApolloClient } from '@apollo/client';

import { Collapse, Paper } from "@mui/material";
import Input from '@mostrans/web-components/components/base/Input'
import DataTable from '@mostrans/web-components/components/advanced/DataTable'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { ToastContainer, toast } from 'react-toastify'
import Tabs, { TabItem, TabItemBadge } from '@mostrans/web-components/components/base/Tabs';
import Select from '@mostrans/web-components/components/base/Select';
import { useConfirmationModal } from '@mostrans/web-components/hooks/useConfirmationModal'

import { getDocumentSubType, getDocumentType } from '../../../GQL/query';

import ModalManage from "./ModalManage";
import { updateDocumentSubType } from "../../../GQL/mutation";

function SubTypeDocument() {
	const [ConfirmationModal, setShowModal] = useConfirmationModal();
	const client = useApolloClient();
	const [dataTable, setDataTable] = useState([]);
	const [docType, setDocType] = useState([]);
	const [fltDocType, setFltDocType] = useState(null);
	const [fltStatus, setFltStatus] = useState(null);
	const [fltSearch, setFltSearch] = useState(null);
	const [isCollapse, setIsCollapse] = useState(false);
	const [openModalManage, setOpenModalManage] = useState(false);

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
			fixedRight: true,
			position: 'center',
			renderCell: (data) => {
				let btnColor;
				let btnText;
				if (data.status == 'true') {
					btnColor = 'primary';
					btnText = 'Active';
				} else {
					btnColor = 'danger';
					btnText = 'Inactive';
				}
				return <Button variant="contained" size="small" color={btnColor} onClick={() => { handleClickStatus(data) }}>{btnText}</Button>
			}
		},
	]



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
					status: el.active,
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

	const handleCloseModalManage = () => {
		setOpenModalManage(false);
	}

	const handleUpdate = () => {
		setOpenModalManage(false);
		fetchDataSubTypeDoc();
	}

	const handleClickStatus = (data) => {
		if(data.status === 'false'){
			toast.error('Hubungi Tim IT untuk Mengaktifkan Sub Type Document!');
		}
	}

	// const handleClickStatus = async (data) => {
	// 	const show = await setShowModal({
	// 		headerText: 'Konfirmasi',
	// 		deniedButtonText: 'Batal',
	// 		confirmButtonText: 'Yakin',
	// 		headerIcon: <Icon>warning</Icon>,
	// 		contentText: 'Yakin Ganti Status? ',
	// 	})

	// 	if (show.isConfirmed) {
	// 		let active
	// 		if(data.status == 'true'){
	// 			active = false;
	// 		}else{
	// 			active = true;
	// 		}

	// 		const param = {
	// 			id: data.id,
	// 			document_subtype_name: data.document_subtype_name,
	// 			document_type_id: data.document_type_id,
	// 			active: String(active),
	// 			update_by: '1000'
	// 		}

	// 		console.log(param, data, "cek param");

	// 		const res = await updateDocumentSubType(client, param);
	// 		if (res.status === '000') {
	// 			toast.success(`Update Sub Type Document ${data.document_subtype_name} Success: ${res.errMsg}`);
	// 		} else {
	// 			toast.error(`Update Sub Type Document ${data.document_subtype_name} Failed: ${res.errMsg}`);
	// 		}

	// 		fetchDataSubTypeDoc();
	// 	}
	// }

	useEffect(() => {
		if (client) {
			fetchDataSubTypeDoc();
			fetchDataDocType();
		} else {
			toast.error('No Client Found');
		}
	}, [])

	return (
		<>
			<React.Fragment>
				<Paper sx={{ pl: 2, pr: 2, pt: 1, pb: 1 }}>
					<div className="row" onClick={() => { setIsCollapse(!isCollapse) }}>
						<div className="col-md-6">
							<h3>Advanced Filter</h3>
						</div>
						<div className="col-md-6 d-flex justify-content-end align-items-center">
							{
								isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />
							}
						</div>
					</div>
					<Collapse in={isCollapse}>
						<div className="row mt-1">
							<div className="col-md-6">
								<Select
									isClearable
									options={docType}
									placeholder="Document Type..."
									onChange={(e) => setFltDocType(e)}
									value={fltDocType} />
							</div>
							<div className="col-md-6">
								<Select
									isClearable
									options={[{ label: 'Active', value: true }, { label: 'Inactive', value: false }]}
									placeholder="Status..."
									onChange={(e) => setFltStatus(e)}
									value={fltStatus} />
							</div>
						</div>
					</Collapse>
				</Paper>
				<Paper sx={{ p: 2, mt: 1 }}>
					<h1>Sub Type Document</h1>
					<div className="row mt-1">
						<div className="col-md-3">
							<Input
								isClearable
								type="text"
								placeholder="Search..."
								style={{ width: '100%' }}
								onChange={(e) => { setFltSearch(e.target.value) }}
								value={fltSearch} />
						</div>
						<div className="col-md-7" />
						<div className="col-md-2">
							<Button variant="contained" color="primary" startIcon={<Icon>add</Icon>} style={{ width: '100%' }} onClick={() => setOpenModalManage(true)}>Tambah</Button>
						</div>
					</div>

					<DataTable
						className="mt-1"
						data={
							dataTable.filter((item) => {
								let flt1 = false, flt2 = false, flt3 = false;
								// flt1 = fltDocType, flt2 = fltStatus, flt3 = fltSearch

								if (fltDocType) {
									if (item.document_type_id.toUpperCase().includes(fltDocType.value)) {
										flt1 = true;
									}
								} else {
									flt1 = true;
								}

								if (fltStatus) {
									if (fltStatus.value.toString() === item.status) {
										flt2 = true;
									}
								} else {
									flt2 = true;
								}

								if (fltSearch) {
									console.log(item.document_subtype_name, item.document_type_name, typeof (fltSearch), "cek status")

									if (item.document_type_name.toUpperCase().includes(fltSearch.toUpperCase())
										|| item.document_subtype_name.toUpperCase().includes(fltSearch.toUpperCase())) {
										flt3 = true;
									}
								} else {
									flt3 = true;
								}

								return (flt1 && flt2 && flt3)
							})
						}
						// data={dataTable}
						columns={column}
						getRowKey={(data) => data.id}
						hasPagination={true}
					/>
				</Paper>
			</React.Fragment>

			<ModalManage open={openModalManage} onClose={handleCloseModalManage} docType={docType} onUpdate={handleUpdate} />

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover />

			<ConfirmationModal />

		</>
	);
}

export default SubTypeDocument;
