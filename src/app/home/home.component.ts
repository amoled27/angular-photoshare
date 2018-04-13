import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any[];
  albums:any[];
  constructor(public api:ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(users=>{
       this.users=users;
       console.log(users);
    })
  }

  getAlbum(id: any) {
    this.api.getAlbum(id).subscribe(album=>{
      this.albums=album;
        console.log(album);
    })
  }

}
