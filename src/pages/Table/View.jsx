import React, { useState, useContext } from 'react';
import {
    Box
} from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { ContextX } from '../../Context';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarQuickFilter,
    GridToolbarFilterButton,
    GridToolbarExport,
} from '@mui/x-data-grid';
import Cards from './Cards';
import './View.css';
import { ChevronLeft, ForkLeft } from '@mui/icons-material';

const dummyColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'agentName', headerName: 'Agent Name', width: 150 },
    { field: 'agentId', headerName: 'Agent ID', width: 110 },
    { field: 'agentStatus', headerName: 'Agent Status', width: 120 },
    { field: 'extension', headerName: 'Extension', width: 100 },
    { field: 'extStatus', headerName: 'Ext Status', width: 110 },
    { field: 'totalCalls', headerName: 'Total Calls', width: 120 },
    { field: 'phoneNo', headerName: 'Phone No', width: 130 },
    { field: 'duration', headerName: 'Duration', width: 130 },
    { field: 'callType', headerName: 'Call Type', width: 120 },
    { field: 'campaign', headerName: 'Campaign', width: 150 },
    { field: 'loginHrs', headerName: 'Login Hours', width: 130 },
    { field: 'talkTime', headerName: 'Talk Time', width: 130 },
    { field: 'wrapTime', headerName: 'Wrap Time', width: 130 },
    { field: 'breakTime', headerName: 'Break Time', width: 130 },
    { field: 'idleTime', headerName: 'Idle Time', width: 130 },
];

const dummyRows = [
    {
        id: 1,
        agentName: 'John Doe',
        agentId: 'A001',
        agentStatus: 'Idle',
        extension: '101',
        extStatus: 'Available',
        totalCalls: 25,
        phoneNo: '+1-555-1234',
        duration: '2:30:45',
        callType: 'Inbound',
        campaign: 'Campaign A',
        loginHrs: '8:00',
        talkTime: '3:00:15',
        wrapTime: '0:10:00',
        breakTime: '0:15:00',
        idleTime: '4:00:30'
    },
    {
        id: 2,
        agentName: 'Jane Smith',
        agentId: 'A002',
        agentStatus: 'In Call',
        extension: '102',
        extStatus: 'Busy',
        totalCalls: 18,
        phoneNo: '+1-555-5678',
        duration: '1:45:30',
        callType: 'Outbound',
        campaign: 'Campaign B',
        loginHrs: '7:30',
        talkTime: '2:20:10',
        wrapTime: '0:05:30',
        breakTime: '0:12:00',
        idleTime: '3:00:50'
    },
    {
        id: 3,
        agentName: 'Alan Walker',
        agentId: 'A003',
        agentStatus: 'Wrapup',
        extension: '103',
        extStatus: 'Not Available',
        totalCalls: 30,
        phoneNo: '+1-555-7890',
        duration: '3:00:00',
        callType: 'Inbound',
        campaign: 'Campaign C',
        loginHrs: '8:30',
        talkTime: '3:10:00',
        wrapTime: '0:08:00',
        breakTime: '0:20:00',
        idleTime: '4:00:00'
    },
    // Add more rows as needed
];

// Custom Toolbar Component
function CustomToolbar() {

    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton />  {/* Column selection button */}
            <GridToolbarFilterButton />   {/* Filter button */}
            <GridToolbarExport />
            <GridToolbarQuickFilter id='searchBar' style={{ position: 'absolute', right: '35px' }} />
        </GridToolbarContainer>
    );
}

export default function View() {

    //get context
    const { isViewOpen, setIsViewOpen } = useContext(ContextX);
    const [rows, setRows] = useState(dummyRows);
    const [columns, setColumns] = useState(dummyColumns);
    const [loading, setLoading] = useState(false); // Updated loading state

    return (
        <div style={{ marginLeft: '-40px', transition: '.4s ease' }} className="Bigcontainer" >
            {/* //cards  */}

            <button onClick={() => setIsViewOpen(false)} style={{ backgroundColor: "#df1c1c", width: '80px', position: 'absolute', left: "5%", top: '20px' }} className="bellBtn">
                <div className="arrow">  <ChevronLeft className="bell" /></div>
                back
            </button>
            <Cards />

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <ClipLoader color={'#000'} loading={loading} size={40} />
                </div>
            ) : (
                <Box sx={{ height: 650, width: '88%', position: 'relative' }}>
                    <DataGrid
                        style={{
                            background: 'white',
                            width: '100%', // Ensure it stretches to the width of the parent container
                            padding: '5px 3px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            position: 'relative'
                        }}
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        slots={{ toolbar: CustomToolbar }}
                        disableDensitySelector
                        sx={{
                            '& .MuiDataGrid-root': {
                                border: 'none', // Remove grid border
                            },
                            '& .MuiDataGrid-cell': {
                                color: '#1c1b1b',
                                fontWeight: '500',
                                fontSize: '16.5px',
                                fontFamily: 'Athiti',
                                backgroundColor: '#f2f6fa',
                                border: '1px solid white',
                            },
                            '& .MuiDataGrid-columnHeaders': {
                                fontWeight: 'bold',
                                fontSize: '13.5px',
                                fontFamily: 'system-ui',
                                whiteSpace: 'normal',
                                overflow: 'visible',
                                lineHeight: '1.2em',
                                '& .MuiSvgIcon-root': {
                                    color: '#adadad',
                                },
                            },
                            '& .MuiDataGrid-footerContainer': {
                                backgroundColor: '#f2f6fa', // Footer background color
                            },

                            '& .MuiDataGrid-row--borderBottom': {
                                backgroundColor: '#3d46f0 !important',
                                color: 'white !important', // Footer background color
                            },

                            '& .MuiDataGrid-row': {
                                borderBottom: '1px solid white',
                                backgroundColor: '#f2f6fa',
                            },
                            '& .MuiDataGrid-sortIcon': {
                                color: 'black !important',
                            }
                        }}
                    />
                </Box>
            )}
        </div>
    );
}
