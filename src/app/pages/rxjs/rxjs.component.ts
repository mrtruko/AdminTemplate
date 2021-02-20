import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() {
    // this.retornaObservable().pipe(
    //   retry()
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   err => console.warn('Error:', err),
    //   () =>  console.log('obs terminado'));

    this.retornaIntervalo().subscribe(console.log);
   }

retornaIntervalo(): Observable<number>{
  return interval(500)
  .pipe(
    take(10),
    map(valor => valor + 1),
    filter( valor => (valor % 2 === 0)),
    );
}

retornaObservable(): Observable<number>{
  let i = 0;
  return new Observable<number>( observer => {
    const intervalo = setInterval(() => {
      i++;
      observer.next(i);
      if (i === 4){
        clearInterval(intervalo);
        observer.complete();
      }
      if (i === 2){
        clearInterval(intervalo);
        observer.error('i llego al valor de 2');
      }
    }, 1000);
  });
}
}
