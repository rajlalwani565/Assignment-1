import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  //userData;

  //  columnDefs = [
  //       { field: 'make' },
  //       { field: 'model' },
  //       { field: 'price'}
  //   ];

  //   rowData = [
  //       { make: 'Toyota', model: 'Celica', price: 35000 },
  //       { make: 'Ford', model: 'Mondeo', price: 32000 },
  //       { make: 'Porsche', model: 'Boxter', price: 72000 }
  //   ];

  columnDefs = [
    { field: 'SrNo' },
    { field: 'Amount' },
    { field: 'Description' },
    { field: 'Type' }
  ];

  rowData = [
    { SrNo: '1', Amount: '50000', Description: 'NEFT', Type: 'Debit' },
    { SrNo: '2', Amount: '25000', Description: 'NEFT', Type: 'Credit' },
    { SrNo: '3', Amount: '620', Description: 'RTGS', Type: 'Credit' },
    { SrNo: '4', Amount: '900', Description: 'NEFT', Type: 'Debit' },
    { SrNo: '5', Amount: '2340', Description: 'RTGS', Type: 'Credit' },
    { SrNo: '6', Amount: '7880', Description: 'RTGS', Type: 'Credit' },
    { SrNo: '7', Amount: '12000', Description: 'NEFT', Type: 'Credit' },
    { SrNo: '8', Amount: '4200', Description: 'NEFT', Type: 'Debit' }

  ];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        //this.userData = res['User'];
      },
      err => {
        console.log(err);

      }
    );
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
