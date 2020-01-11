import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  albumsURL = "https://jsonplaceholder.typicode.com/albums?userId=";

  albums: Album[];

  userId: number;

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('user_id');

    this.getAlbums();
  }

  async getAlbums() {
    let url: string = this.albumsURL + this.userId;

    this.albums = await this.http.get<Album[]>(url).toPromise();
  }

  selectAlbum(album: Album) {
    this.router.navigate(['/photos', album.id]);
  }

}

interface Album {
  id: number;
  title: string;
}

