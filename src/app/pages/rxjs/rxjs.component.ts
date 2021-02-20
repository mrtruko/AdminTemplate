import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() {
    let i = 0;
    const $obs = new Observable( observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2){
          
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
    $obs.pipe(
      retry()
    ).subscribe(
      valor => console.log('Subs', valor),
      err => console.warn('Error:', err),
      () =>  console.log('obs terminado'));
   }


}
