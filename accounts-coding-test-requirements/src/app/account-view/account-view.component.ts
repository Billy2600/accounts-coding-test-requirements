import { Component, OnInit } from '@angular/core';
import { AccountViewModel } from './account-view.model';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent implements OnInit {
  views : AccountViewModel[];

  constructor() { }

  ngOnInit(): void {
    this.views = new Array(1);
    this.views[0] = new AccountViewModel();
    this.views[0].Id = 0;
    this.views[0].FirstName = "FName";
    this.views[0].LastName = "LName";

  }

}
