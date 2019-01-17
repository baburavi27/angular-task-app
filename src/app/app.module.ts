import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { DataWrapperService } from './shared/datawrapper-service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [DataWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
