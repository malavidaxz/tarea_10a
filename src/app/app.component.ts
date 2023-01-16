import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartarea10';

  tarea :{nombre: string, descripcion: string} = {nombre: '', descripcion: ''};

  onDataEvent(event:{nombre: string, descripcion: string}) {
  this.tarea = event;
  }

}

