import * as React from "react";
import {useEffect, useState} from "react";
import CustomerService from "./CustomerService";
import {useParams} from "react-router-dom";

const customersService = new CustomerService();

function CustomerCreateUpdate(props)
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    let { pk } = useParams();
    const handleSubmit = (event) => {
        if (pk)
        {
            handleUpdate(pk)
        }
        else
        {
            handleCreate();
        }
        event.preventDefault();
    }

    const handleCreate = () => {
        customersService.createCustomer(
            {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "phone": phone,
                "address": address,
                "description": description,
            }).then((result) => {
                alert("Customer created.");
        }).catch(() => {
            alert('ERROR! Re-check your form.');
        });
    }

    const handleUpdate = (pk) => {
        customersService.updateCustomer(
            {
                "pk": pk,
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "phone": phone,
                "address": address,
                "description": description,
            }).then((result) => {
                alert("Customer updated.");
        }).catch(() => {
            alert('ERROR! Re-check your form.')
        });
    }

    useEffect( () => {
        if (pk)
        {
            customersService.getCustomer(pk).then((c) => {
                    setFirstName(c.first_name);
                    setLastName(c.last_name);
                    setEmail(c.email);
                    setPhone(c.phone);
                    setAddress(c.address);
                    setDescription(c.description);
            })
        }
    }, []);

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name:</label>
                <input className="form-control" type="text" defaultValue={firstName}
                       onChange={input => setFirstName(input !== null ? input.target.value : firstName) }/>

                <label>Last Name:</label>
                <input className="form-control" type="text" defaultValue={lastName}
                       onChange={input => setLastName(input !== null ? input.target.value : lastName) }/>

                <label>Phone:</label>
                <input className="form-control" type="text" defaultValue={phone}
                       onChange={input => setPhone(input !== null ? input.target.value : phone) }/>

                <label>Email:</label>
                <input className="form-control" type="text" defaultValue={email}
                       onChange={input => setEmail(input !== null ? input.target.value : email) }/>

                <label>Address:</label>
                <input className="form-control" type="text" defaultValue={address}
                       onChange={input => setAddress(input !== null ? input.target.value : address) }/>

                <label>Description:</label>
                <textarea className="form-control" defaultValue={description}
                          onChange={input => setDescription(input !== null ? input.target.value : description) }/>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </div>
        </form>
    );
}
export default CustomerCreateUpdate;