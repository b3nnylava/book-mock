import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { DxDataGridModule, DxSwitchModule } from 'devextreme-angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { Page2Component } from './components/page2/page2.component'
import { NavmenuComponent } from './components/navmenu/navmenu.component'
import { GridComponent } from './components/grid/grid.component'

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    Page2Component,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
