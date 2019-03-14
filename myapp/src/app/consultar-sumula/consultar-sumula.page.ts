import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-consultar-sumula',
  templateUrl: './consultar-sumula.page.html',
  styleUrls: ['./consultar-sumula.page.scss'],
  providers: [MovieService],
})
export class ConsultarSumulaPage implements OnInit {
  [x: string]: any;


  public lista_sumulas = new Array<any>();


  constructor(private movieService: MovieService) {
    
    console.log("ConsultarSumulaPage : constructor ");
    this.movieService.get();
  }

  ngOnInit() {
    console.log("ConsultarSumulaPage : ngOnInit()() ")
    this.movieService.get().subscribe( 
      data=>{
        const respon = (data as any);
        const obj_retor = respon;// = JSON.parse(respon._body);
        this.lista_sumulas = obj_retor;
        console.log(obj_retor);
      },error => {
        console.log(error);

      }

    );
  }

  ionViewDidLoad() {
    console.log("ConsultarSumulaPage : ionViewDidLoad() ")
    this.movieService.get().subscribe( 
      data=>{
        const respon = (data as any);
        const obj_retor = JSON.parse(respon._body);
        this.lista_sumulas = obj_retor.nome;
        console.log(obj_retor);
      },error => {
        console.log(error);

      }

    );


  }
}
