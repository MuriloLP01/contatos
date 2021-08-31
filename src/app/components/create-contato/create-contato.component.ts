import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  @Output() onCloseModalClick:EventEmitter<null> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sair(){
    console.log("Pedindo para sair");
    this.onCloseModalClick.emit()
  }
}
