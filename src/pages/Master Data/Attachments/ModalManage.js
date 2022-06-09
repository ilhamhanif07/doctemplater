import { useEffect, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Icon } from "@mui/material"

import Input from '@mostrans/web-components/components/base/Input';
import FormGroup from '@mostrans/web-components/components/base/FormGroup';
import Select from '@mostrans/web-components/components/base/Select';
import { useConfirmationModal } from '@mostrans/web-components/hooks/useConfirmationModal'
import { useApolloClient } from "@apollo/client";
import { insertMappingAttachment } from "../../../GQL/mutation";
import { getDocumentSubTypeByDocumentTypeId } from '../../../GQL/query';

const ModalManage = (props) => {
    const [ConfirmationModal, setShowModal] = useConfirmationModal();
    const [attachmentDesc, setAttachmentDesc] = useState(null);
    const [inputDocType, setInputDocType] = useState(null);
    const [inputSubType, setInputSubType] = useState(null);
    const [inputAttachType, setInputAttachType] = useState(null);
    const [disabledDocSubtype, setDisabledDocSubtype] = useState(true);
    const [disabledButtonTambah, setDisabledButtonTambah] = useState(true);
    const [optionsSubType, setOptionsSubType] = useState([]);
    const client = useApolloClient();

    const fetchSubTypeDoc = async () => {
        setDisabledDocSubtype(false);
        if (inputDocType) {
            const res = await getDocumentSubTypeByDocumentTypeId(client, inputDocType.value);
            const arr = [];

            console.log(res, 'subtype doc')

            if (res.response.status === '000') {
                res.data.forEach((el, index) => {
                    arr.push({
                        label: el.document_subtype_name,
                        value: el.id,
                    })
                })

                setOptionsSubType(arr);
            } else {
                setDisabledDocSubtype(true);
                toast.error('Gagal Fetch Data Doc. Subtype: ' + res.response.errMsg);
            }
        } else {
            setDisabledDocSubtype(true);
        }
    }

    const clickInsert = async () => {
        const show = await setShowModal({
            headerText: 'Konfirmasi',
            deniedButtonText: 'Batal',
            confirmButtonText: 'Yakin',
            headerIcon: <Icon>warning</Icon>,
            contentText: 'Yakin Tambah Data? ',
        })

        if (show.isConfirmed) {
            const param = {
                document_subtype_id: inputSubType.value,
                description: attachmentDesc,
                attachment_type_id: inputAttachType.value,
                active: "true",
                create_by: '1000'
            }

            const res = await insertMappingAttachment(client, param);
            if (res.status === '000') {
                toast.success(`Add Mapping Attachment: ${attachmentDesc} Success: ${res.errMsg}`);
            } else {
                toast.error(`Add Mapping Attachment: ${attachmentDesc} Failed: ${res.errMsg}`);
            }

            props.onUpdate();


        }
    }

    useEffect(() => {
        setAttachmentDesc('');
        setInputDocType(null);
        setInputSubType(null);
        setInputAttachType(null);
    }, [])

    useEffect(() => {
        fetchSubTypeDoc();
    }, [inputDocType])

    useEffect(() => {
        if (inputSubType === null || attachmentDesc === null || attachmentDesc === '' || inputAttachType === null) {
            setDisabledButtonTambah(true);
        } else {
            setDisabledButtonTambah(false);
        }
    }, [inputSubType, attachmentDesc, inputAttachType])

    return (
        <>
            <Dialog open={props.open} maxWidth="sm" fullWidth onClose={props.onClose} style={{ overflow: 'auto' }}>
                <DialogTitle>
                    <div className="row">
                        <div className="col-md-12">
                            <span>Tambah Sub Type Document</span>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <FormGroup
                                showChildErrorSign
                                isRequired
                                label="Attachment Description">

                                <Input
                                    onChange={(e) => { setAttachmentDesc(e.target.value); }}
                                    value={attachmentDesc}
                                    required
                                    type="text" />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <FormGroup
                                showChildErrorSign
                                isRequired
                                label="Document Type">

                                <Select
                                    isClearable
                                    options={props.docType}
                                    placeholder="Document Type..."
                                    onChange={(e) => setInputDocType(e)}
                                    value={inputDocType} />
                            </FormGroup>
                        </div>
                        <div className="col-md-6 mb-2">
                            <FormGroup
                                showChildErrorSign
                                isRequired
                                label="Sub Type Document">

                                <Select
                                    isClearable
                                    isDisabled={disabledDocSubtype}
                                    options={optionsSubType}
                                    placeholder="Document Type..."
                                    onChange={(e) => setInputSubType(e)}
                                    value={inputSubType} />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <FormGroup
                                showChildErrorSign
                                isRequired
                                label="Attachment Type">

                                <Select
                                    isClearable
                                    options={props.attachType}
                                    placeholder="Attachment Type..."
                                    onChange={(e) => setInputAttachType(e)}
                                    value={inputAttachType} />
                            </FormGroup>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="danger" onClick={props.onClose}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={() => { clickInsert() }} disabled={disabledButtonTambah}>Tambah</Button>
                </DialogActions>
            </Dialog>

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
    )
}

export default ModalManage;