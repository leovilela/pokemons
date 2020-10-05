import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { PokemonsService } from 'src/app/service/pokemons.service';
const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {

  cardDetails: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  idPokemon: string = this.activatedRoute.snapshot.params.idPokemon;
  cards$ = this.pokemonsService.getCarta(this.idPokemon);

}
