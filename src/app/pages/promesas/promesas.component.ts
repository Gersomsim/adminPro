import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios =>{

      console.log( usuarios);
    })
  }
  getUsuarios(){
    return new Promise((res, req) =>{
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json() )
      .then(body => res(body.data) );
    });
  }
}
