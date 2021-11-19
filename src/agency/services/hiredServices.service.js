import http from '../../core/http-common'

class HiredService {
    endPoint = '/hiredservice';

    getAll() {
        return http.get(this.endPoint);
    }
    getExtendInformation(category) {
        return http.get(`${this.endPoint}?_expand=${category}`);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    create(createHiredServiceDto) {
        return http.post(this.endPoint, createHiredServiceDto);
    }
    update(id, updateHiredServiceDto) {
        return http.put(`${this.endPoint}/${id}`, updateHiredServiceDto);
    }
    delete(id) {
        return http.delete( `${this.endPoint}/${id}`);
    }

}

export default new HiredService();