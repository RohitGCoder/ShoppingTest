import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';
import { MovieService } from 'src/app/movie.service';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  items= [
	{
    "id":1,
    "name": "item1",
    "price": 175,
    "discount": 5,
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
    "id":2,
    "name": "item2",
    "price": 190,
    "discount": 7,
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
    "id":3,
    "name": "item3",
    "price": 213,
    "discount": 20,
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
    "id":4,
    "name": "item4",
    "price": 217,
    "discount": 18,
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
     {
    "id":5,
    "name": "item5",
    "price": 319,
    "discount": 31,
    "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    }
];


  movieData: Movies[] = [];
  router: any;
   count1: number = 0 ;
   count: any;
  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
  //  this.movieservice.getMovies().subscribe(movdata => this.movieData = movdata);
  //  console.log(this.movieData);

   this.movieservice.currentMessage.subscribe(count => this.count = count);
  }

  onSelect(){}



   clickCount(){
        this.count = this.count1++ 
        this.movieservice.changeMessage(this.count);
        console.log(this.count);
    }
}
