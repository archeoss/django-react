import * as React from 'react';
import {useEffect, Component, useState} from 'react';
import CustomerService from './CustomerService';

const customersService = new CustomerService();

function CustomersList(props : any)
{
    const [customers, setCustomers] = useState([]);
    const [nextPageURL, setNextPageURL] = useState('');

    useEffect( () => {
        customersService.getCustomers().then(function (result)
        {
            // console.log("test");
            setCustomers(result.data);
            setNextPageURL(result.nextlink);
        });
    }, []);

    const handleDelete = (e : React.MouseEvent<HTMLButtonElement>, pk : string) => {
        customersService.deleteCustomer({pk : pk}).then(() => {
            let newArr = customers.filter(function (obj : any)
            {
               return obj.pk !== pk;
            });
            setCustomers(newArr);
        });
    }

    const nextPage = () => {
        customersService.getCustomersByURL(nextPageURL).then((result) => {
            setCustomers(result.data);
            setNextPageURL(result.nextlink);
        });
    }

    return (
        <div className="customers--list">
            <table className="table">
                <thead key='thead'>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {customers.map( (c: any)  =>
                    <tr key={c.pk}>
                        <td>{c.pk}</td>
                        <td>{c.first_name}</td>
                        <td>{c.last_name}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                        <td>{c.address}</td>
                        <td>{c.description}</td>
                        <td>
                            <button onClick={(e) => handleDelete(e, c.pk) }> Delete</button>
                            <a href={"/customers/" + c.pk}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={ nextPage }>Next</button>
        </div>
    )

}
export default CustomersList;
