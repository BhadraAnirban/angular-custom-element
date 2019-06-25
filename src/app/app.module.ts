import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement} from '@angular/elements';


import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QuestionnaireComponent]
})
export class AppModule {
  constructor(private injector: Injector){}
  ngDoBootstrap() {
    const customElement = createCustomElement(QuestionnaireComponent, {injector: this.injector});
    customElements.define('ani-questionnaire', customElement);
  }
 }
