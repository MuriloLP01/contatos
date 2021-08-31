import { Injectable } from '@angular/core';
import { Contato } from 'src/app/models/contato';

const BASE_DE_CONTATOS: Contato[] = [
  {
    nome: "Mariana Ribeiro 1",
    email: "mariana@teste.com",
    telefones: ['1111-1111','2222-2222','3333-3333']
  },
  {
    nome: "Mariana Ribeiro 2",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  }, 
  {
    nome: "Mariana Ribeiro 3",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 4",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 5",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 6",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 7",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 8",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 9",
    email: "mariana@teste.com",
    telefones: ['1111-1111']

  },    
  {
    nome: "Mariana Ribeiro 10",
    email: "mariana@teste.com",
    telefones: ['1111-1111']
  }
]

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  constructor() { }

  getContatos():Contato[] {
    return BASE_DE_CONTATOS;
  }

  addContato(c:Contato):void {
    BASE_DE_CONTATOS.push(c);
  }
}
