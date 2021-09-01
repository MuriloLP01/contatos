import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  @Output() onCloseModalClick:EventEmitter<null> = new EventEmitter()

  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]
  }

  constructor() { }

  ngOnInit(): void {
  }

  sair(){
    console.log("Pedindo para sair");
    this.onCloseModalClick.emit()
  }

  addTelefone():void{
  console.log("Clicou")
  this.novoContato.telefones.push("")
  }

  removeTelefone():void{
    this.novoContato.telefones.pop()
  }

  track(index:number, value:string){
    return index;
  }
}
