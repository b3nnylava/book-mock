import { Component } from '@angular/core'

@Component({
  selector: 'navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {
  ngOnInit () {
    $('.navbar-collapse a').click(() => {
      $('.navbar-collapse').collapse('hide')
    })
  }
}
