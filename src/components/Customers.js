import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Button from '@material-ui/core/Button';
import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer'

export default function Customers() {


    const [customers, setCustomers] = useState([]);
    const [deletion, setDeletion] = React.useState([])


    useEffect(() => fetchData(), []);



    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .then(console.log(customers))
    }


    const deleteCustomer = (link) => {
        console.log(link)
        if (window.confirm('Are you sure?')) {
            fetch(link, { method: 'DELETE' })
                .then(res => fetchData())
                .catch(err => console.error(err));
            setDeletion(true);
        }
    }



    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => fetchData())
            .catch(err => console.error(err));
    }


    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => fetchData())
            .catch(err => console.error(err));
    }




    const columns = [

        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            sortable: false,
            filterable: false,
            accessor: 'links[0].href',
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            accessor: 'links[0].href',
            Cell: ({ value }) => <Button color="secondary" onClick={() => deleteCustomer(value)}>Delete</Button>
        },


    ]



    return (
        <div>
            <AddCustomer addCustomer={saveCustomer} />
            <ReactTable filterable={true} data={customers} columns={columns} />
        </div>
    );
}