import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(public httpClient: HttpClient, public commonService: CommonService) { }


  signup(body){
    return this.httpClient
      .post(`${environment.api_url}/sign_up`, body)
      .pipe(map(data => { return data }));
  }

  login(body){
    return this.httpClient 
    .post(`${environment.api_url}/login`, body)
    .pipe(map(data => { return data }));
  }
}
