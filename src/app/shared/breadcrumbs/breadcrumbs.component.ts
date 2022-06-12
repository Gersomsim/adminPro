import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  title = ''
  tituloSub: Subscription;
  constructor(
    private router: Router
  ) {
    this.tituloSub = this.getDataRuta().subscribe({
      next: ({title})  => {
        this.title = title
        document.title = title;
      }
    });
  }
  getDataRuta(){
    return this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),
        filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data)
      )
  }
  ngOnDestroy(): void {
    this.tituloSub.unsubscribe();
  }
}
