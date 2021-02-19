import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  @Input() progreso = 50;



  cambiarValor(valor: number): number{
    if (this.progreso >= 100 && valor >= 0){
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0){
      return this.progreso = 0;
    }
    return this.progreso += valor;
  }

}
