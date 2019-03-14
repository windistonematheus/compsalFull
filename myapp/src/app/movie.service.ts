import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public items: any;
  constructor(public http: HttpClient) {
    console.log("MovieService : constructor ");
    this.getArbritos();

  }
  getArbritos() {
    let data: any;
    data = this.http.get("http://localhost:8080/arbitros/3").subscribe(resut => { this.items = resut; });
    console.log( this.items);
    this.http.get("http://localhost:8080/sumulas").subscribe(data => {console.log(data)});
  }
  get() {
    return this.http.get("http://localhost:8080/sumulas");
   
  }

}
