import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})



export class AppComponent implements OnInit {
  users: User[] = [
    { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
    { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
    { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
    { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
  ]

  page = 1;
  length: number = 0;
  pageSize: number = 2;
  pagedList: User[] = [];
   id!: number;

  userDialog: boolean = false;
  displayStyle: boolean = false;

  constructor(private userData: UserService,
    private dialog: MatDialog,
    private http: HttpClient) {
    this.userData.users().subscribe((res) => {
      console.log("users", res);
        })
  }

  ngOnInit(): void {
    this.pagedList = this.users.slice(0, 2);
    this.length = this.users.length;
  }



  OnPageChange(event: PageEvent) {
    debugger
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.users.slice(startIndex, endIndex);
  }
   

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "55%";
    this.dialog.open(UserComponent, dialogConfig) 
    
   
   
  }
 getUser(id:number){
  this.userData.getUserDetails().subscribe(users => {
    this.users;
    console.log(this.id);
    console.log(users);
 });
}
  closePopup() {
    this.displayStyle = true;
  }

}
