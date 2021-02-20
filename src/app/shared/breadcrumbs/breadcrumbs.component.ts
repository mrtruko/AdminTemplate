import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo = '';
  public $tituloSubs: Subscription;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.$tituloSubs = this.getArgumentoRuta().subscribe( ({titulo}) => {
      this.titulo =  titulo;
      document.title = `AdminPro - ${titulo}`;
    });
   }
   ngOnDestroy(): void {
     this.$tituloSubs.unsubscribe();
   }
   getArgumentoRuta(): Observable<any>{
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map(event => event.snapshot.data)
    );
   }
}
