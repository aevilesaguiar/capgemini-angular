import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //
  title = 'meu primeiro app Angular';

 //Diretiva NGIF
  //variavel booleana

  exibirTexto: boolean = false;

 acaoNgIf(){
   this.exibirTexto=!this.exibirTexto;
 }

 //duretiva NGFor
 cursos= [ "html", "css",  "php Avançado","Angular"];

 //Diretiva ngSwitch
 curso_selecionado = "Angular";

 //ele var verificar os valores do html com o do vetor e compara se são igual
 //pega uma variavel e verifica se é igual se for igual ele executa senão for igual ele oculta a linha

//Diretiva NGClass
//aqui vou criar uma variavel boolean
ligada:boolean=false;

}
