import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import Input from '@mostrans/web-components/components/base/Input';
import FormGroup from '@mostrans/web-components/components/base/FormGroup';
import Select from '@mostrans/web-components/components/base/Select';

const ModalManage = (props) => {
    const [action, setAction] = useState('Tambah');

    return (
        <>
            <Dialog>
                <DialogTitle>
                    <div className="row">
                        <div classNaame="col-md-12">
                            <span>{action} Mapping Approval</span>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <FormGroup>
                                
                            </FormGroup>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="danger">Cancel</Button>
                    <Button variant="contained" color="primary">Tambah</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}