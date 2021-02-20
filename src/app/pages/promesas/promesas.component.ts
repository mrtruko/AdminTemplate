import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject) => {
    //   if (false){
    //     resolve('hola mundo');
    //   } else {
    //     reject('Chao Mundo');
    //   }
    // });
    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch((error) => {
    //   console.log(error);
    // });
    // console.log('fin del init');
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });
  }

  getUsuarios(): Promise<object>{
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then((resp) => resp.json()
      .then(body => console.log(body.data)));
    });
  }

}
