import { Component, OnInit , AfterViewInit , ViewChild } from '@angular/core';
import { faBell ,faShoppingCart, faComment } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent} from 'src/app/pages/home/home.component';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @ViewChild(HomeComponent) child;

 faBell = faBell;
 faShoppingCart= faShoppingCart;
 faComment=faComment;
 title = 'Items';
  count:any;

  constructor(private movieservice: MovieService) { }

  ngOnInit(){
     this.movieservice.currentMessage.subscribe(count => this.count = count)
  }
}
