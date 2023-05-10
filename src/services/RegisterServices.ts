import { HttpApiServices } from "./HttpApiService";

export class RegisterServices extends HttpApiServices {
    register(body:any){
        return this.post('/auth/register', body);
    }
}