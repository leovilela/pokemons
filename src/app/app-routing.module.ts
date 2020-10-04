import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component'
import { CardComponent } from './pokemons/card/card.component'

export const routes: Routes = [
  { path: '', component: PokemonsComponent,
    children: [
      { path: 'card', component: CardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
