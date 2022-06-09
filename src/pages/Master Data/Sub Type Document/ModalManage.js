import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Icon } from "@mui/material"

import Input from '@mostrans/web-components/components/base/Input';
import FormGroup from '@mostrans/web-components/components/base/FormGroup';
import Select from '@mostrans/web-components/components/base/Select';
import { useConfirmationModal } from '@mostrans/web-components/hooks/useConfirmationModal'
import { useApolloClient } from "@apollo/client";
import { insertDocumentSubType } from "../../../GQL/mutation";

const ModalManage = (props) => {
    const [ConfirmationModal, setShowModal] = useConfirmationModal();
    const [inputSubtypeDocName, setInputSubtypeDocName] = useState(null);
    const [inputDocType, setInputDocType] = useState(null);
    const client = useApolloClient();

    const clickInsert = async () => {
        const show = await setShowModal({
            headerText: 'Konfirmasi',
            deniedButtonText: 'Batal',
            confirmButtonText: 'Yakin',
            headerIcon: <Icon>warning</Icon>,
            contentText: 'Yakin Tambah Data? ',
        })

        if(show.isConfirmed){
            if(inputDocType == null || inputSubtypeDocName == null || inputSubtypeDocName == ''){
                toast.error('Semua Form Harus Dilengkapi');
            }else{
                const param = {
                    document_subtype_name: inputSubtypeDocName,
                    document_type_id: inputDocType.value,
                    active: "false",
                    create_by: '1000'
                }

                const res = await insertDocumentSubType(client, param);
                if(res.status === '000') {
                    toast.success(`Add Sub Type Document ${inputSubtypeDocName} Success: ${res.errMsg}`);
                }else{
                    toast.error(`Add Sub Type Document ${inputSubtypeDocName} Failed: ${res.errMsg}`);
                }

                props.onUpdate();
            }

        }
    }

    return (
        <>
            <Dialog open={props.open} maxWidth="sm" fullWidth onClose={props.onClose} style={{overflow: 'auto'}}>
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
                                label="Subtype Document Name">

                                <Input
                                    onChange={(e) => { setInputSubtypeDocName(e.target.value); }}
                                    value={inputSubtypeDocName}
                                    required
                                    type="text" />
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
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
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="danger" onClick={props.onClose}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={() => { clickInsert() }}>Tambah</Button>
                </DialogActions>
            </Dialog>

            {/* <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/> */}

            <ConfirmationModal />
        </>
    )
}

export default ModalManage;