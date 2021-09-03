import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  @Output() onCloseModalClick:EventEmitter<null> = new EventEmitter()

  cs: ContatoService = new ContatoService

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
  this.novoContato.telefones.push("")
  }

  removeTelefone(pos:number):void{
    this.novoContato.telefones.splice(pos,1)
  }

  salvar(){
    this.cs.addContato(this.novoContato)
    this.sair()
    this.onCloseModalClick.emit()
  }
    //Manter a tela e limpar os campos
    // this.novoContato ={
    //  nome:"",
    //  email:"",
    //  telefones: [""]
    //}


  track(index:number, value:string){
    return index;
  }
}
