import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Card, CardsAPI } from './modelo/cards';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient: HttpClient) {}
  
  // getAcoes retorna um objeto do tipo observable
  getCartas(){
    return this.httpClient.get<CardsAPI>('https://api.pokemontcg.io/v1/cards')
      .pipe(
        tap((valor)=> console.log(valor)),
        // map((api)=>api.payload), ou pluck
        pluck('cards'),
        tap((valor)=> console.log("novo valor", valor)),
        map((card) => card.sort((cardA, cardB) => this.ordenaPorCodigo(cardA, cardB))
      )
  )}

  private ordenaPorCodigo(cardA: Card, cardB: Card){
    if(cardA.id > cardB.id){
      return 1
    }
    if(cardA.id < cardB.id){
      return -1
    }
    return 0
  }
}
