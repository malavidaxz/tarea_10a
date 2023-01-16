import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  constructor() {
    this.nombre= "";
    this.descripcion="";
  }
  nombre: string;
  descripcion: string;

  @Output() dataEvent = new EventEmitter<{nombre: string, descripcion: string}>();

  guardarTarea() {
    this.dataEvent.emit({nombre: this.nombre, descripcion: this.descripcion});
  }



  ngOnInit(): void {
  }

}
