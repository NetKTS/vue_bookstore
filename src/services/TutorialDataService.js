import http from "../http-common";
class TutorialDataService {
    getAll() {
        return http.get("/tutorial");
    }
    get(id) {
        return http.get(`/tutorial/${id}`)
    }
    create(data) {
        return http.post("/tutorial", data);
    }
    update(id, data) {
        return http.put(`/tutorial/${id}`, data);
    }
    delete(id) {
        return http.delete(`/tutorial/${id}`);
    }
    findByTitle(title) {
        return http.get(`/tutorial/title/${title}`);
    }
    getPublish() {
        return http.get("/tutorial/published");
    }

}
export default new TutorialDataService();