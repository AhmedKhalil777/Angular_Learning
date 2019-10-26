import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CISComponent } from './cis/cis.component';
import { CISService } from './cis/CIS.service';

@NgModule({
  declarations: [
    AppComponent,
    CISComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CISService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
