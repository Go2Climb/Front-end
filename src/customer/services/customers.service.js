import http from '../../core/http-common'

class CustomersService {
    endPoint = 'https://localhost:5001/api/v1/customers';

    getAll() {
        return http.get(this.endPoint);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    getHiredServicesByCustomerIdWithServiceInformation(id) {
        return http.get(`${this.endPoint}/${id}/hiredservices/information?expand=service`);
    }
    create(createCustomerDto) {
        return http.post(this.endPoint, createCustomerDto);
    }
    update(id, updateCustomerDto) {
        return http.put(`${this.endPoint}/${id}`, updateCustomerDto);
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`);
    }
    findByEmail(email) {
        return http.get(`${this.endPoint}?email=${email}`);
    }
}

export default new CustomersService();