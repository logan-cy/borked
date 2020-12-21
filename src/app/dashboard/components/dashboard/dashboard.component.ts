import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  settings: any = {
    certificateInfoMsg: "PC is in the process of verifying your profile information. This needs to be done before any CPD certificates can be issued (profile info last updated on 2020-10-16 12:37 by John Doe",
    certificateWarnMsg: "PC is in the process of verifying your profile information. This needs to be done before any CPD certificates can be issued (profile info last updated on 2020-10-16 12:37 by John Doe",
    pointsEarned: 4,
    isProfileVerified: false
  };

  filterTypes = [] as any;
  filterDates = [] as any;
  cpdDateFilters = [] as any;

  certificatesPendingWebinars = [] as any;
  upcomingWebinars = [] as any;
  attendedWebinars = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

}
