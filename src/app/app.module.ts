import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { CardComponent } from './pokemons/card/card.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoWidgetModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    CardComponent
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
