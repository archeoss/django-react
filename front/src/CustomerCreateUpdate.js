import React, {Component} from "react";
import CustomerService from "./CustomerService";

const customersService = new CustomerService();

class CustomerCreateUpdate extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            phone: null,
            email: null,
            address: null,
            desc: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        const { match: { params } } = this.props;
        if (params && params.pk)
        {
            this.handleUpdate(params.pk)
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }

    handleCreate()
    {
        customersService.createCustomer(
            {
                "first_name": this.state.firstName,
                "last_name": this.state.lastName,
                "email": this.state.email,
                "phone": this.state.phone,
                "address": this.state.address,
                "description": this.state.description,
            }).then((result) => {
                alert("Customer created.");
        }).catch(() => {
            alert('ERROR! Re-check your form.')
        });
    }

    handleUpdate(pk)
    {
        customersService.createCustomer(
            {
                "pk": pk,
                "first_name": this.state.firstName,
                "last_name": this.state.lastName,
                "email": this.state.email,
                "phone": this.state.phone,
                "address": this.state.address,
                "description": this.state.description,
            }).then((result) => {
                alert("Customer updated.");
        }).catch(() => {
            alert('ERROR! Re-check your form.')
        });
    }

    componentDidMount()
    {
        const { match: { params } } = this.props;
        if (params && params.pk )
        {
            customersService.getCustomer(params.pk).then((c) => {
                this.setState({
                    "first_name": c.firstName,
                    "last_name": c.lastName,
                    "email": c.email,
                    "phone": c.phone,
                    "address": c.address,
                    "description": c.description,
                });
            })
        }
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input className="form-control" type="text" ref={input => this.setState({ firstName: input })}/>

                    <label>Last Name:</label>
                    <input className="form-control" type="text" ref={input => this.setState({ lastName: input })}/>

                    <label>Phone:</label>
                    <input className="form-control" type="text" ref={input => this.setState({ phone: input })}/>

                    <label>Email:</label>
                    <input className="form-control" type="text" ref={input => this.setState({ email: input })}/>

                    <label>Address:</label>
                    <input className="form-control" type="text" ref={input => this.setState({ address: input })}/>

                    <label>Description:</label>
                    <textarea className="form-control" ref={input => this.setState({ description: input })}/>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}
export default CustomerCreateUpdate;