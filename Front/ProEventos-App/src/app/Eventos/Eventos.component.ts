import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  constructor( private http: HttpClient) { }

  ngOnInit() {

    this.getEventos();

  }


  public getEventos() : void {

    this.http.get('https://localhost:5001/api/Eventos').subscribe(

    response => this.eventos = response,
    error => console.error(error)
    );
  }
}
