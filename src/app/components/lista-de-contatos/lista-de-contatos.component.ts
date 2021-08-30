import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [
    {
      nome: "Mariana Ribeiro 1",
      email: "mariana@teste.com",
      telefones: ['1111-1111']

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

  constructor() { }

  ngOnInit(): void {
  }

}
