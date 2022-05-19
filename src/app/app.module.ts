import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContatoComponent } from './contato/contato.component';

//Aqui temos todos os componentes que serão carregados quando a “index.html” for carregada.
//Temos o main component que é o “appComponent” e os sub-components também, tudo declarado e importado.
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
