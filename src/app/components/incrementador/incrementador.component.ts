import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {


  @Input() progreso = 50;
  @Input() btnClass = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = 'btn ' + this.btnClass;
  }

  cambiarValor(valor: number): number{
    if (this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    const emitirValor = this.progreso += valor;
    this.valorSalida.emit(emitirValor);
    return emitirValor;
  }
  onChange(nuevoValor: any): void{

    if (nuevoValor >= 100){
      this.progreso = 100;
    }else if (nuevoValor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
