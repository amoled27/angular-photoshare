import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class ApiService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  newUrl: any;
  constructor(public http: Http) { }
  getUsers(){
    this.newUrl = this.baseUrl+'users';
    return this.http.get(this.newUrl)
      .map((res: Response) => res.json());
  }

  getAlbum(id:any){
    this.newUrl = this.baseUrl+'albums?userId='+id;
    return this.http.get(this.newUrl)
      .map((res: Response) => res.json());
  }

  getPhotos(id:any){
    this.newUrl = this.baseUrl+'photos?albumId='+id;
    return this.http.get(this.newUrl)
      .map((res: Response) => res.json());
  }
}
