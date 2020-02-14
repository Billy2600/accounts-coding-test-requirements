import { Component, OnInit } from '@angular/core';
import { AccountViewModel, AccountStatuses } from './account-view.model';
import { AccountViewService } from './account-view.service'

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent implements OnInit {
  accounts : AccountViewModel[];

  constructor(private service: AccountViewService) { }

  ngOnInit(): void {
    this.service.getAccounts().subscribe(accounts => this.accounts = accounts);
  }

  public getActiveAccounts(): AccountViewModel[] {
    if(this.accounts !== undefined) {
      return this.accounts.filter(x => x.AccountStatusId === AccountStatuses.Active);
    }
    else {
      return new Array(0);
    }
  }

  public getOverdueAccounts(): AccountViewModel[] {
    if(this.accounts !== undefined) {
      return this.accounts.filter(x => x.AccountStatusId === AccountStatuses.Overdue);
    }
    else {
      return new Array(0);
    }
  }

  public getInactiveAccounts(): AccountViewModel[] {
    if(this.accounts !== undefined) {
      return this.accounts.filter(x => x.AccountStatusId === AccountStatuses.Inactive);
    }
    else {
      return new Array(0);
    }
  }
}
