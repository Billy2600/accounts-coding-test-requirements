import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'
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
    if(this.accounts !== undefined) { // Prevent an error by this being accessed too early
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

  public formatPhoneNumber(phoneNumber: number) : string {
    let strPhone = phoneNumber.toString();
    // Basic phone number formatting; could definitely be done fancier, all for more formats, etc.
    return `(${strPhone.substring(0,3)})-${strPhone.substring(3,6)}-${strPhone.substring(6,9)}`;
  }

  public formatDate(date: string): string {
    if(date === null) {
      return "N/A"; // null dates shouldn't be shown, but just in case they are
    }

    return formatDate(date, 'M/d/yyyy', 'en-US');
  }
}
