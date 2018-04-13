import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public api: ApiService, private router: Router, private route: ActivatedRoute, private _location:Location) { }
  albumid: any;
  photos: any[];
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumid = params['id'];
      this.api.getPhotos(this.albumid).subscribe(photos => {
        this.photos = photos;

      })

    })

  }

  backClicked() {
    this._location.back();
  }
}
