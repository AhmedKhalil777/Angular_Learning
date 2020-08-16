import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShortenPipe } from './Pipes/Shorten.Pipes'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [

    AppComponent,
    ShortenPipe
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
