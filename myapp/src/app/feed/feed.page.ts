import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [ MovieService],
  
})
export class FeedPage implements OnInit {

  constructor(private movieService :MovieService) { }

  ngOnInit() {
  }
  ionViewDidLoad(){
    this.movieService.getArbritos()
  }
}
