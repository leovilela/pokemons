import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Card, CardsAPI } from '../modelo/cards';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient: HttpClient) {}
  
  // getCartas retorna um objeto do tipo observable
  getCartas(valor?: string){
    const params = valor ? new HttpParams().append('name', valor) : undefined;
    return this.httpClient.get<CardsAPI>('https://api.pokemontcg.io/v1/cards', { params })
      .pipe(
        pluck('cards'),
        map((card) => card.sort((cardA, cardB) => this.ordenaPorCodigo(cardA, cardB))
      )
  )}

  // getCartas retorna um objeto do tipo observable
  getCarta(id: string){
    const params = id ? new HttpParams().append('id', id) : undefined;
    return this.httpClient.get<CardsAPI>('https://api.pokemontcg.io/v1/cards', { params })
      .pipe(
        pluck('cards')
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
