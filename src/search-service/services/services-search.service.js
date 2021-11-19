import http from '../../core/http-common'

class ServicesSearchService {
    endPoint = 'https://localhost:5001/api/v1/services';

    getAll() {
        return http.get(this.endPoint);
    }
    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
    getByName(name, start, limit) {
        return http.get(`${this.endPoint}/services/text/${name}?start=${start}&limit=${limit}`);
    }
    getByNameFilterMoney(name, min, max, start, limit) {
        return http.get(`${this.endPoint}/services/text/${name}/money?min=${min}&max=${max}&start=${start}&limit=${limit}`);
    }
    getByNameFilterScore(name, score, start, limit) {
        return http.get(`${this.endPoint}/services/text/${name}/score?score=${score}&start=${start}&limit=${limit}`);
    }
    getByAllFilter(name, score, min, max, start, limit) {
        return http.get(`${this.endPoint}/services/text/${name}/score/${score}/money?min=${min}&max=${max}&start=${start}&limit=${limit}`);
    }

}

export default new ServicesSearchService();
