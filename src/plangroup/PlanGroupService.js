import axios from 'axios'

const PLAN_GROUP_API_BASE_URL = 'http://localhost:8080/api/planGroups';

class PlanGroupService {

    getPlanGroups(){
        return axios.get(PLAN_GROUP_API_BASE_URL);
    }
}

export default new PlanGroupService();
