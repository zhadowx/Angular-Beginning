import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Pegasus Seiya' },
      { id: 13, name: 'Monkey D. Luffy' },
      { id: 14, name: 'Son Goku' },
      { id: 15, name: 'Son Gohan' },
      { id: 16, name: 'Jolyne Cujoh' },
      { id: 17, name: 'Jotaro Kujo' },
      { id: 18, name: 'Gon Freecss' },
      { id: 19, name: 'Roronoa Zoro' },
      { id: 20, name: 'Vinsmoke Sanji' },
      { id: 21, name: 'Saitama' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
