import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {
  intervalo: Subscription;
  constructor() {
    // this.retornaObservable().pipe(
    //   retry()
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   err => console.warn('Error:', err),
    //   () =>  console.log('obs terminado'));

    this.intervalo = this.retornaIntervalo().subscribe(console.log);
   }
  ngOnDestroy(): void {
    this.intervalo.unsubscribe();
  }

retornaIntervalo(): Observable<number>{
  return interval(100)
  .pipe(
    // take(10),
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
