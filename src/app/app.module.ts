import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CardComponent } from './components/card/card.component';
import { SeriesComponent } from './components/series/series.component';
import { BookComponent } from './components/book/book.component';
import { EditionComponent } from './components/edition/edition.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SeriesComponent,
    BookComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
