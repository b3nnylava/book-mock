import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { EditionComponent } from './components/edition/edition.component'
import { BookComponent } from './components/book/book.component'
import { SeriesComponent } from './components/series/series.component'

const routes: Routes = [{
  path: ':seriesId/:bookId/:editionId',
  component: EditionComponent
}, {
  path: ':seriesId/:bookId',
  component: BookComponent
}, {
  path: ':seriesId',
  component: SeriesComponent
}, {
  path: '',
  component: HomeComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
