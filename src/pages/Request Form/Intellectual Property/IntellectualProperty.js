import React, { useState } from 'react';
import Row from 'react'
import { Card, Grid } from '@mui/material';
import Tabs, {
    TabItem
} from "@mostrans/web-components/components/base/Tabs";
import BadgeMostrans from '../../../components/GeneralComponent/BadgeMostrans';
import DataTable from '@mostrans/web-components/components/advanced/DataTable';
import FloatingButtonMostrans from '../../../components/GeneralComponent/FloatingButtonMostrans';
import DateRangePicker from "@mostrans/web-components/components/advanced/DateRangePicker";
import moment from "moment";
import Input from "@mostrans/web-components/components/base/Input";
import Button from "@mui/material/Button";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Select from 'react-select'
import FormNewIPRequest from './FormNewIPRequest/FormNewIPRequest';
import { DEFAULT_DATA_IP } from './IntellectualPropertyConstant';

function IntellectualProperty() {
    const [curTab, setCurTab] = useState(1);
    const [isCreate, setIsCreate] = useState(false);
    const column = [
        {
            getCellKey: (data) => data.request_no,
            selector: 'request_no',
            header: 'Request No.',
            sortBy: 'request_no',
            sortable: true,
            position: 'center'
        },
        {
            getCellKey: (data) => data.type,
            selector: 'type',
            header: 'Type',
            sortBy: 'type',
            sortable: true,
            position: 'center'
        },
        {
            getCellKey: (data) => data.intelectual_property,
            selector: 'intelectual_property',
            header: 'Intelectual Property',
            sortBy: 'intelectual_property',
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
        },
        {
            getCellKey: (data) => data.requestor,
            selector: 'requestor',
            header: 'Requestor',
            sortBy: 'requestor',
            sortable: true,
            position: 'center'
        },
        {
            getCellKey: (data) => data.entity,
            selector: 'entity',
            header: 'Entity / SBU',
            sortBy: 'entity',
            sortable: true,
            position: 'center'
        }
        ,
        {
            getCellKey: (data) => data.id,
            selector: 'id',
            header: 'Action',
            sortBy: 'id',
            sortable: true,
            position: 'center',
            fixedRight:true,
            renderCell :row=><Button variant="text">Detail</Button>
        }
    ]
    return (
        <>
            <Card className='pl-1 pr-1'>
                {isCreate ?
                    <FormNewIPRequest cancelCreate={()=>{setIsCreate(false)}} />
                    :
                    <>
                        <Tabs>
                            <TabItem current={curTab === 1} onClick={() => { setCurTab(1) }}>
                                Draft <BadgeMostrans className='ml-2' tipe="danger" text={"2"} />
                            </TabItem>
                            <TabItem current={curTab === 2} onClick={() => { setCurTab(2) }}>
                                Waiting Approval
                            </TabItem>
                            <TabItem current={curTab === 3} onClick={() => { setCurTab(3) }}>
                                Waiting Acknowledge
                            </TabItem>
                            <TabItem current={curTab === 4} onClick={() => { setCurTab(4) }}>
                                Waiting Review
                            </TabItem>
                            <TabItem current={curTab === 5} onClick={() => { setCurTab(5) }}>
                                Close
                            </TabItem>
                            <TabItem current={curTab === 6} onClick={() => { setCurTab(6) }}>
                                Reject <BadgeMostrans className='ml-2' tipe="danger" text={"5"} />
                            </TabItem>
                        </Tabs>
                        <Grid container className='pt-1'>
                            <Grid md={3} className="pl-1 pr-1">
                                <label className="control-label">Filter Nomor Dokumen</label>
                                <Input className={'w-100'} onChange={(e) => { }} type="text" placeholder={"Nomor Dokumen"} />
                            </Grid>
                            <Grid md={3} className="pr-1">
                                <label className="control-label">Filter SBU</label>
                                <Select
                                    name="form-field-name"
                                    options={[]}
                                    placeholder="Pilih Entity / SBU"
                                />
                            </Grid>
                            <Grid md={3} className="pr-1">
                                <label className="control-label">Filter Tipe Dokumen</label>
                                <Select
                                    name="form-field-name"
                                    options={[]}
                                    placeholder="Pilih Tipe Dokumen"
                                />
                            </Grid>
                            <Grid md={2} className="pr-1">
                                <label className="control-label">Tanggal Dokumen</label>
                                <DateRangePicker />
                            </Grid>
                            <Grid md={1} className="pr-0">
                                <label className="control-label">Advanced</label><br />
                                <Button variant="contained" color="primary"><FilterAltIcon /></Button>
                            </Grid>
                        </Grid>
                        <hr />
                        <DataTable
                            className="mt-1"
                            data={DEFAULT_DATA_IP}
                            columns={column}
                            getRowKey={(data) => data.id}
                            hasPagination={true}
                        />
                        <FloatingButtonMostrans title={"+"} tooltip={"Create New IP Request"} callback={() => {setIsCreate(true) }} />
                    </>
            }
            </Card>
        </>
    )
}

export default IntellectualProperty;