import { Component, OnInit } from '@angular/core';

import {PhotosService} from '../../services/photos.service';
import { Photos } from '../../models/Photos';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public PhotosService: PhotosService) { }
  photos: Photos[]=[];
  ngOnInit() {
    this.PhotosService.getPhotos().subscribe(photos =>{
      this.photos = photos;
      console.log(photos);
    },
    err => console.log(err) )
  }

}
