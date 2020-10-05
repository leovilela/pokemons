import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { PokemonsService } from 'src/app/service/pokemons.service'
const ESPERA_DIGITACAO = 300;
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonsComponent implements OnInit {

  pokemonInput = new FormControl();
  todasAcoes$ = this.pokemonsService.getCartas().pipe(
    tap(() => {
      console.log('Fluxo Inicial');
    })
  );
  filtroPeloInput$ = this.pokemonInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(() => {
      console.log('Fluxo do Filtro');
    }),
    tap(console.log),
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.pokemonsService.getCartas(valorDigitado)),
    tap(console.log)
  );

  cards$ = merge(this.todasAcoes$, this.filtroPeloInput$);

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {}

}

