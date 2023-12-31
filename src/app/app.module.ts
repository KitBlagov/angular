import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HighlightDirective } from './components/directives/my-directives/highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    BindingComponent,
    DirectivesComponent,
    HighlightDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


