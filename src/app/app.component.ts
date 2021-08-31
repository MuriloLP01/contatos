import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoModal = false;

  abrirModal(){
    console.log("Eu te escuto, meu filho!");
    this.mostrandoModal = true;
  }

  fecharModal(){
    console.log("Tô fechando aqui!!")
    this.mostrandoModal = false;
  }

}
