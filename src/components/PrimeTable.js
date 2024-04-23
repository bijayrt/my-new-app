import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export function PrimeTable(props) {

    return (
        <div className="card">
        <DataTable value={props.products} showGridlines sortMode="multiple" tableStyle={{ minWidth: '50rem' }}  dataKey="model" 
        globalFilterFields={['make', 'model']} 
        >
            <Column field="make" header="make" sortable style={{ width: '25%' }}></Column>
            <Column field="model" header="model" sortable style={{ width: '25%' }}></Column>
            <Column field="price" header="price" sortable style={{ width: '25%' }}></Column>
            <Column field="electric" header="electric" sortable style={{ width: '25%' }}></Column>
        </DataTable>
        </div>
    );

}

