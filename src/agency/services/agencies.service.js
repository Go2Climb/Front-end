import http from '../../core/http-common'

class AgenciesService {
    endPoint = '/agencies';

    getAll() {
        return http.get(this.endPoint);
    }
    getExtendInformation(category) {
        return http.get(`${this.endPoint}?_expand=${category}`);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    create(createAgency) {
        return http.post(this.endPoint, createAgency);
    }
    update(id, updateAgency) {
        return http.put(`${this.endPoint}/${id}`, updateAgency);
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`);
    }

}

export default new AgenciesService();