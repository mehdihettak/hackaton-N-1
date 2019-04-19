import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { CaractersComponent } from './caracters/caracters.component';
import {HttpClientModule} from  '@angular/common/http';
import { APIService } from './api.service';
import { EggsComponent } from './eggs/eggs.component';
import { CasescharactersComponent } from './casescharacters/casescharacters.component';


@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CaractersComponent,
    EggsComponent,
    CasescharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
