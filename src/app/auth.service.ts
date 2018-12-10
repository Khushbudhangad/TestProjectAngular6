import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   data;
   baseUrl: String = 'http://localhost:3000';
  constructor(private http: HttpClient) {

   }

  getUserDetails(userName, password) {

    // post this details to api server return user info if correct
     this.http.get('/api/login').subscribe((res: any[]) => {
      console.log(res);
      this.data = res;
      });

}
}
