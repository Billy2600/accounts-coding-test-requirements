import { Component, OnInit } from '@angular/core';
import { AccountViewModel } from './account-view.model';
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

}
