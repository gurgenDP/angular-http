import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PhotoViewComponent } from '../photo-view/photo-view.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  photos: Photo[];
  albumId: number;
  photosURL = "https://jsonplaceholder.typicode.com/photos?albumId=";

  ngOnInit() {
    this.albumId = +this.route.snapshot.paramMap.get('album_id');
    this.getPhotos();
  }

  getPhotos() {
    let url = this.photosURL + this.albumId;

    this.http.get(url).subscribe((response: Photo[]) => {
      this.photos = response;
    });
  }

  photoSelected(photo: Photo) {
    this.openDialog(photo.url);
  }


  openDialog(url: string): void {
    const dialogRef = this.dialog.open(PhotoViewComponent, {
      width: 'auto',
      height: 'auto',
      data: { url: url }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
