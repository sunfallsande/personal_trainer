import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Moment from 'react-moment';
import Button from '@material-ui/core/Button';
import AddTraining from './AddTraining'

export default function Trainings() {
    const [trainings, setTrainings] = useState([]);
    const [deletion, setDeletion] = useState(false);
    const [openSave, setOpenSave] = React.useState(false);
    useEffect(() => fetchData(), []);
    console.log(trainings)

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings', { method: 'GET' })
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(err => console.error(err));
    }


    const deleteTraining = (link) => {
        console.log(link)
        if (window.confirm('Are you sure?')) {
            fetch('https://customerrest.herokuapp.com/api/trainings/' + link, { method: 'DELETE' })
                .then(res => fetchData())
                .catch(err => console.error(err));
            setDeletion(true);
        }
    }



    const saveTraining = (training, link) => {
        fetch('https://customerrest.herokuapp.com/api/trainings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
            .then(res => fetchData())
            .catch(err => console.error(err));

    }





    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => <Moment format="DD/MM/YYYY">{row.date}</Moment>
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customer',
            accessor: 'customer.firstname',
        }, {
            accessor: 'customer.lastname'
        }, {
            sortable: false,
            filterable: false,
            accessor: 'id',
            Cell: row => <Button color="secondary" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <AddTraining saveTraining={saveTraining} />
            <ReactTable filterable={true} data={trainings} columns={columns} />

        </div>
    );
}