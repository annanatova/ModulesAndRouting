import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    // private userService: UserService,
    ) {
    console.log(this.activatedRoute.snapshot.data['user']); // poluchawame data #1 sattic way
    this.activatedRoute.params.subscribe((v) => console.log(v)); // poluchawame data #2 dynamic way
  }
  ngOnInit(): void {
    
  }
}
