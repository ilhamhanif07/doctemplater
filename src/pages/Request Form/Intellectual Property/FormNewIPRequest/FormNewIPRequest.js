import React from 'react'
import { Grid } from '@mui/material';
import Button from "@mui/material/Button";
import Select from 'react-select';
import Input from "@mostrans/web-components/components/base/Input";

export default function FormNewIPRequest(props) {
  return (
    <div>
      <Grid container>
        <Grid md={9} className='pt-1'>
          <h3 >Form Pengajuan Dokumen Intelektual Properti</h3>
        </Grid>
        <Grid md={3} className='text-right pt-1'>
          <div className='text-right' style={{ display: "flex" }}>
            <Button className='ml-3 mr-1' variant="contained" color="primary" onClick={() => props.cancelCreate()}>Submit</Button>
            <Button className='mr-1' variant="contained" color="warning" onClick={() => props.cancelCreate()}>Save</Button>
            <Button className='mr-1' variant="contained" color="danger" onClick={() => props.cancelCreate()}>Kembali</Button>
          </div>
        </Grid>
      </Grid>
      <hr />

      <Grid container className='mb-1'>
        <Grid md={6} className={'pr-1'}>
          <label className="control-label">SBU For Approval</label>
          <Select
            name="form-field-name"
            options={[]}
            placeholder="Pilih Entity / SBU"
          />
        </Grid>
        <Grid md={6}>
          <label className="control-label">Request Number</label>
          <Input className={'w-100'} disabled={true} onChange={(e) => { }} type="text" placeholder={"Nomor Dokumen"} />
        </Grid>
      </Grid>

      <Grid container className='mb-1'>
        <Grid md={4} className={'pr-1'}>
          <label className="control-label mt-1">Document Type</label>
          <Select
            name="form-field-name"
            options={[]}
            placeholder="Pilih Tipe Dokumen"
          />
        </Grid>
        <Grid md={4} className={'pr-1'}>
          <label className="control-label mt-1">Type of Intellectual Property</label>
          <Select
            name="form-field-name"
            options={[]}
            placeholder="Pilih Tipe Intellectual Property"
          />
        </Grid>
        <Grid md={4}>
          <label className="control-label mt-1">Owner of Intellectual Property</label>
          <Select
            name="form-field-name"
            options={[]}
            placeholder="Pilih Pemilik Intellectual Property"
          />
        </Grid>
      </Grid>
      <label className="control-label">Notes</label>
      <Input style={{minHeight:"200px"}} className={'w-100 mb-1'} multiline onChange={(e) => { }} type="text" placeholder={"Nomor Dokumen"} />
    </div>
  )
}
