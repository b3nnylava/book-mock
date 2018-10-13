import { Injectable } from '@angular/core'

export class BookListing {
  id: number
  name: string
  author: string
  rating: string
  store: string
  notes: string
}

const listings: BookListing[] = [{
  id: 1,
  name: `Dr Hoof: The Complete Series - Director's Cut`,
  author: 'Johnathan Lopez / The Golden Crowbar',
  rating: 'E',
  store: 'Lulu',
  notes: 'Appears to lack pre-readers or editors'
},{
  id: 2,
  name: `The Story of My Life`,
  author: 'Xupla Mindblower',
  rating: 'E',
  store: 'Lulu',
  notes: ''
},{
  id: 3,
  name: `The Stranger and Her Friend #1: The Maiden's Battalion`,
  author: 'Tyler J. Barton / The Urban Moose',
  rating: 'T',
  store: 'Lulu',
  notes: ''
},{
  id: 4,
  name: `The Hope Called Night: Firstborn`,
  author: 'Shaelyn Green',
  rating: '',
  store: 'Lulu',
  notes: `Apparently a crossover with Warriors and Guardians of Ga'Hoole`
},{
  id: 5,
  name: `The Tale of of Saving Grace`,
  author: 'Tyler Weiss / Cold Spike',
  rating: 'E',
  store: 'Lulu',
  notes: ''
}]

@Injectable()
export class GridService {
  getListings (): BookListing[] {
    return listings
  }
}
