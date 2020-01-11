import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  users: User[] = [];

  usersURL: string = "https://jsonplaceholder.typicode.com/users";



  getUsersFromServer() {
    this.http.get(this.usersURL).subscribe((response: User[]) => {
      this.users = response;
    });
  }

  ngOnInit() {
    this.getUsersFromServer()
  }

  selectUser(user: User) {
    this.router.navigate(['/albums', user.id], { relativeTo: this.route });
  }

}

interface User {
  id: number;
  name: string;
}