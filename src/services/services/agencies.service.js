import http from '../../core/http-common'

class AgenciesService {
    endPoint = 'https://go2climbapi.azurewebsites.net/api/v1/agencies';

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }
}

export default new AgenciesService();
