import { HttpApiServices } from "./HttpApiService";

export class MeetServices extends HttpApiServices {
    
    baseUrl = 'meet';

    async getMeets(){
        return await this.get(this.baseUrl);
    }
}