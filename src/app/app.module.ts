import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/list/pokemons.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoWidgetModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/card/details/details.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    CardComponent,
    DetailsComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PoTemplatesModule,
    PoWidgetModule,
    PoFieldModule,
    PoPageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    PoWidgetModule,
    PoFieldModule,
    PoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
