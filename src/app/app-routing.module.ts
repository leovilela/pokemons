import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './components/list/pokemons.component'
import { CardComponent } from './components/card/card.component'
import { DetailsComponent } from './components/card/details/details.component';

export const routes: Routes = [
  { path: '',  
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: PokemonsComponent},
      { path: 'card/details/:idPokemon', component: DetailsComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
