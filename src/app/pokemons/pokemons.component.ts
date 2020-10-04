import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonsService } from '../pokemons.service';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonsComponent implements OnInit {

  pokemonInput = new FormControl();
  cards$ = this.pokemonsService.getCartas();

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {}

}

