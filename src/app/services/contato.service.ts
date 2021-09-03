import { Injectable } from '@angular/core';
import { Contato } from 'src/app/models/contato';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  private baseDeContatos: Contato[];
  private readonly chave:string = "CONTATOS";

  constructor() {

    //Carregando informações do localStorage na chave Contatos
    let dados = window.localStorage.getItem(this.chave);

    //Verificando se as informações existem
    if (dados) {

      //Se existe, transforma dados em array e guarda em baseDeContatos
      this.baseDeContatos = JSON.parse(dados);
    } else {

      //Se não existe, põe uma string json com array vazio no localStorage
      window.localStorage.setItem(this.chave,"[]");

      //Adicionando um array vazio no baseDeContatos
      this.baseDeContatos =[]
    }
  }

  getContatos():Contato[] {
    return this.baseDeContatos;
  }

  addContato(c:Contato):void {
    this.baseDeContatos.push(c)
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
  }
}
