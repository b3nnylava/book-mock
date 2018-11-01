import { Injectable } from '@angular/core'
import { books } from './books'
import { editions } from './editions'
import { series } from './series'

export interface Series {
  id: number
  title: string
}

export interface Book {
  id: number
  seriesId: number
  title: string
  author: string
  tags: string[]
  storyLink: string
  description: string
}

export interface Edition {
  id: number
  bookId: number
  imageLink: string
  storeLink: string
  status: string
  metaTags: string[]
  notes: string
}

@Injectable()
export class DataService {
  getEditions (): Edition[] {
    return editions
  }

  getBook (id: number): Book {
    return books.find(x => x.id === id)
  }

  getSeries (id: number): Series {
    return series.find(x => x.id === id)
  }

  getBooksBySeriesId(seriesId: number): Book[] {
    return books.filter(x => x.seriesId === seriesId)
  }
}
