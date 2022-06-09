import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useApolloClient } from '@apollo/client';

import Input from '@mostrans/web-components/components/base/Input'
import DataTable from '@mostrans/web-components/components/advanced/DataTable'
import { getAttachmentType, getDocumentSubType, getDocumentSubTypeByDocumentTypeId, getDocumentType, getMappingAttachment } from '../../../GQL/query'

import { ToastContainer, toast } from 'react-toastify';
import { Button, Icon, Collapse } from '@mui/material';
import Select from '@mostrans/web-components/components/base/Select';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useConfirmationModal } from '@mostrans/web-components/hooks/useConfirmationModal'

import ModalManage from './ModalManage';

import { updateMappingAttachment } from '../../../GQL/mutation';

function Attachments() {
	const [ConfirmationModal, setShowModal] = useConfirmationModal();
	const [dataTable, setDataTable] = useState([]);
	const [docType, setDocType] = useState([]);
	const [docSubtype, setDocSubtype] = useState([]);
	const [attachType, setAttachType] = useState([]);
	const [disableDocSubtype, setDisableDocSubtype] = useState(true);
	const [fltDocType, setFltDocType] = useState(null);
	const [fltDocSubtype, setFltDocSubType] = useState(null);
	const [fltAttachType, setFltAttachType] = useState(null);
	const [fltStatus, setFltStatus] = useState(null);
	const [fltSearch, setFltSearch] = useState(null);
	const [isCollapse, setIsCollapse] = useState(false);
	const [openModalManage, setOpenModalManage] = useState(false);
	const client = useApolloClient();

	const column = [
		{
			getCellKey: (data) => data.description,
			selector: 'description',
			header: 'Attachment Description',
			sortBy: 'description',
			sortable: true,
			position: 'center'
		},
		{
			getCellKey: (data) => data.document_subtype_name,
			selector: 'document_subtype_name',
			header: 'Document Subtype',
			sortBy: 'document_subtype_name',
			sortable: true,
			position: 'center'
		},
		{
			getCellKey: (data) => data.attachment_type_name,
			selector: 'attachment_type_name',
			header: 'Attachment Type',
			sortBy: 'attachment_type_name',
			sortable: true,
			position: 'center'
		},
		{
			getCellKey: (data) => data.status,
			fixedRight: true,
			selector: 'status',
			header: 'Status',
			sortBy: 'status',
			sortable: true,
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
		}
	]

	const fetchDataMappingAttachment = async () => {
		const res = await getMappingAttachment(client);
		const arr = [];

		if (res.response.status === '000') {
			res.data.forEach((el, index) => {
				arr.push({
					id: el.id,
					description: el.description,
					status: el.active,
					document_subtype_id: el.document_subtype_id,
					document_subtype_name: el.documentSubType.document_subtype_name,
					attachment_type_id: el.attachment_type_id,
					attachment_type_name: el.attachmentType.attachment_type_name,
				})
			})
			setDataTable(arr);
		} else {
			toast.error('Gagal Fetch Data Mapping Attachment: ' + res.response.errMsg);
		}
	}

	const fetchDataDocType = async () => {
		const res = await getDocumentType(client);
		const arr = [];

		if (res.response.status === '000') {
			res.data.forEach((el, index) => {
				arr.push({
					label: el.document_type_name,
					value: el.id,
				})
			})

			setDocType(arr);
		} else {
			toast.error('Gagal Fetch Data Doc. Type: ' + res.response.errMsg);
		}
	}

	const fetchDataDocSubtype = async () => {
		setDisableDocSubtype(false);
		if (fltDocType) {
			const res = await getDocumentSubTypeByDocumentTypeId(client, fltDocType.value);
			const arr = [];

			if (res.response.status === '000') {
				res.data.forEach((el, index) => {
					arr.push({
						label: el.document_subtype_name,
						value: el.id,
					})
				})

				setDocSubtype(arr);
			} else {
				setDisableDocSubtype(true);
				toast.error('Gagal Fetch Data Doc. Subtype: ' + res.response.errMsg);
			}
		} else {
			setDisableDocSubtype(true);
		}
	}

	const fetchDataAttachType = async () => {
		const res = await getAttachmentType(client);
		const arr = [];

		if (res.response.status === '000') {
			res.data.forEach((el, index) => {
				arr.push({
					label: el.attachment_type_name,
					value: el.id,
				})
			})

			setAttachType(arr);
		} else {
			toast.error('Gagal Fetch Data Attachment Type: ' + res.response.errMsg);
		}
	}

	const handleClickStatus = async (data) => {
		const show = await setShowModal({
			headerText: 'Konfirmasi',
			deniedButtonText: 'Batal',
			confirmButtonText: 'Yakin',
			headerIcon: <Icon>warning</Icon>,
			contentText: 'Yakin Ganti Status? ',
		})

		if (show.isConfirmed) {
			let active
			if (data.status == 'true') {
				active = false;
			} else {
				active = true;
			}

			const param = {
				id: data.id,
				document_subtype_id: data.document_subtype_id,
				description: data.description,
				attachment_type_id: data.attachment_type_id,
				active: String(active),
				create_by: '1000'
			}

			// console.log(param, data, "cek param");

			const res = await updateMappingAttachment(client, param);
			
			if (res.status === '000') {
				toast.success(`Update Mapping Attachment: ${data.description} Success: ${res.errMsg}`);
			} else {
				toast.error(`Update Mapping Attachment: ${data.description} Failed: ${res.errMsg}`);
			}

			fetchDataMappingAttachment();
		}
	}

	const handleCloseModalManage = () => {
		setOpenModalManage(false);
	}

	const handleUpdate = () => {
		setOpenModalManage(false);
		fetchDataMappingAttachment();
	}

	useEffect(() => {
		if (client) {
			fetchDataMappingAttachment();
			fetchDataDocType();
			fetchDataAttachType();
		} else {
			toast.error('No Client Found')
		}
	}, [])

	useEffect(() => {
		fetchDataDocSubtype();
	}, [fltDocType])

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
									value={fltDocType}
								/>
							</div>
							<div className="col-md-6">
								<Select
									isClearable
									isDisabled={disableDocSubtype}
									options={docSubtype}
									placeholder="Document Sub Type..."
									value={fltDocSubtype}
								/>
							</div>
						</div>
						<div className="row mt-1">
							<div className="col-md-6">
								<Select
									isClearable
									options={attachType}
									placeholder="Attachment Type..."
									value={fltAttachType}
								/>
							</div>
							<div className="col-md-6">
								<Select
									isClearable
									options={[{ label: 'Active', value: true }, { label: 'Inactive', value: false }]}
									placeholder="Status..."
									value={fltStatus} />
							</div>
						</div>
					</Collapse>
				</Paper>
				<Paper sx={{ p: 2, mt: 1 }}>
					<h1>Mapping Attachments</h1>
					<div className="row mt-1">
						<div className="col-md-3">
							<Input
								type="text"
								placeholder="Search Data Table..."
								style={{ width: '100%' }}
								value={fltSearch} />
						</div>
						<div className="col-md-7" />
						<div className="col-md-2">
							<Button variant="contained" color="primary" startIcon={<Icon>add</Icon>} style={{ width: '100%' }} onClick={() => { setOpenModalManage(true) }}>Tambah</Button>
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

			<ModalManage open={openModalManage} onClose={handleCloseModalManage} docType={docType} attachType={attachType} onUpdate={handleUpdate} />

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

export default Attachments;
