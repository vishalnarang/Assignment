
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserHistoryService {

    constructor(public httpClient: HttpClient, public commonService: CommonService) { }

    userHistory(body) {
        let url = `${environment.api_url}/user_job_history` + '?email_id=' + body;
        return this.httpClient
            .get(url)
            .pipe(map(data => { return data }));
    }

    addUserHistory(body){
        return this.httpClient 
        .post(`${environment.api_url}/user_job_history`, body)
        .pipe(map(data => { return data }));
    }

    user(body) {
        let url = `${environment.api_url}/user` + '?email_id=' + body;
        return this.httpClient
            .get(url)
            .pipe(map(data => { return data }));
    }
}
