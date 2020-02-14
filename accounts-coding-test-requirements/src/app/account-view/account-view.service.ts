import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountViewModel } from './account-view.model'

@Injectable({
    providedIn: 'root'
})
export class AccountViewService {
    constructor(private httpService: HttpClient) {}

    public getAccounts() : Observable<AccountViewModel[]> {
        // You have to disable CORS in your browser for this to work. Obviously this would be unacceptable in production code
        // e.g. chrome --disable-web-security --user-data-dir="[some directory here]"
        return this.httpService.get<AccountViewModel[]>(`https://frontiercodingtests.azurewebsites.net/api/accounts/getall`)
            .pipe(
                map(data => data.map(data => new AccountViewModel().deserialize(data)))
            );
    }
}