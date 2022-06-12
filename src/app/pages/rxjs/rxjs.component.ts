import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSub: Subscription;

  constructor() {


    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //     next: valor => console.log(valor),
    //     error: err => console.warn('Error:', err),
    //     complete: () => console.log('obs Terminado')
    // });
    this.intervalSub = this.retornaInterval().subscribe({
      next: valor => console.log(valor)
    })
  }
  retornaInterval(): Observable<number> {
    return interval(200)
      .pipe(
        map(val => val + 1),
        filter( val => val % 2 == 0 ),
        //take(10)
      );
  }
  retornaObservable(): Observable<number>{
    let i =0;
    return new Observable<number>( observer => {

      const interbalo = setInterval(()=>{
        i++;
        observer.next(i);
        if (i == 4 ){
          clearInterval(interbalo);
          observer.complete();
        }
        if(i == 2){
          observer.error('i LLego al valor de 2');
        }
      }, 1000);

    });
  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }
}
