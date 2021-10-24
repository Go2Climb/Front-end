import http from '../../core/http-common'

class AgenciesService {
    endPoint = '/agencies';

    getAll() {
        return http.get(this.endPoint);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    getServices(idAgency) {
        return http.get(`${this.endPoint}/${idAgency}/services`);
    }
    getServiceOffer(idAgency) {
        return http.get(`${this.endPoint}/${idAgency}/services?isOffer=1`);
    }
    getReviews(idAgency) {
        return http.get(`${this.endPoint}/${idAgency}/reviews`);
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