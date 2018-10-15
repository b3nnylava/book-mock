import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { DxDataGridModule, DxSwitchModule, DxAccordionModule } from 'devextreme-angular'
import { AppComponent } from './app.component'
import { GridComponent } from './components/grid/grid.component'
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxSwitchModule,
    DxAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
