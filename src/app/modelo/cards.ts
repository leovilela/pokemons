export interface Cards extends Array<Card> {
}
export interface Card{
    id: number;
    name: string;
    types: Array<Types>;
    attacks: Array<Attacks>;
    resistances: Array<Resistances>;
    weaknesses: Array<Weaknesses>
}

export interface CardsAPI {
    cards: Cards;
}

export interface Types extends Array<Type> {
}

export interface Type{
    name: string;
}

export interface Attacks extends Array<Attack> {
}

export interface Attack{
    name: number;
    text: string;
    damage: string;
    convertedEnergyCost: Array<string>;
}

export interface Resistances extends Array<Resistance> {
}

export interface Resistance{
    type: string;
    value: string;
}

export interface Weaknesses extends Array<Weaknesses> {
}

export interface Weaknesses{
    type: string;
    value: string;
}

