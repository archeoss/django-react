import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CustomersService{

	constructor(){}

	getCustomers() {
		const url = `${API_URL}/api/customers/`;
		return axios.get(url).then(response => response.data);
	}
	getCustomersByURL(link : string){
		const url = `${API_URL}${link}`;
		console.log(url);
		return axios.get(url).then(response => response.data);
	}
	getCustomer(pk : string) {
		const url = `${API_URL}/api/customers/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteCustomer(customer : any){
		const url = `${API_URL}/api/customers/${customer.pk}`;
		return axios.delete(url);
	}
	createCustomer(customer : any){
		const url = `${API_URL}/api/customers/`;
		return axios.post(url,customer);
	}
	updateCustomer(customer : any){
		const url = `${API_URL}/api/customers/${customer.pk}`;
		return axios.put(url,customer);
	}
}