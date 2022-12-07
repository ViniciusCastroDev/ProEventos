import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {



  public eventos: any = [];
  public eventosFiltrados: any = [];

  mostrarImagem: boolean = true;

  private _filtroLista: string = "";

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista (value: string) {

    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;

  }

  filtrarEventos (filtrarPor: string): any {

    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string;}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1

    )
  }

  constructor( private http: HttpClient) { }

  ngOnInit() {

    this.getEventos();

  }

  alterarImagem () {
    this.mostrarImagem= !this.mostrarImagem;
  }


  public getEventos() : void {

    this.http.get('https://localhost:5001/api/Eventos').subscribe(

    response => { this.eventos = response;
                  this.eventosFiltrados = this.eventos;
    },
    error => console.error(error));
  }
}
