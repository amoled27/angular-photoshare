import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() albums:any[];
  photos: any[];
  constructor(public api:ApiService, private router:Router) { }

  ngOnInit() {
    console.log(this.albums);
  }

  getPhotosPage(albumid:any){
    
      this.router.navigate(['home/photos',albumid]);
 
  }

}
