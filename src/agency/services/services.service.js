import http from '../../core/http-common'

class ServicesService {
    endPoint = '/services';

    getAll() {
        return http.get(this.endPoint);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    getActivities(idService) {
        return http.get(`${this.endPoint}/${idService}/activities`);
    }
    getReviews(idService) {
        return http.get(`${this.endPoint}/${idService}/reviews`);
    }
    create(createServiceDto) {
        return http.post(this.endPoint, createServiceDto);
    }
    update(id, updateServiceDto) {
        return http.put(`${this.endPoint}/${id}`, updateServiceDto);
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`);
    }

}

export default new ServicesService();