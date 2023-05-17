import { HttpApiServices } from "./HttpApiService";

export class UserServices extends HttpApiServices {
    async update(body: any){
        return await this.put('/user', body);
    }
}