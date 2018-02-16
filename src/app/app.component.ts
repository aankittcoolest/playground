import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips'

import { HEROES } from './mock-heroes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  removable = true

  heroes = HEROES

  toggleSelect(hero) {
    hero.selected=!hero.selected
    hero.color = "primary"
    // hero.selected = !hero.selected
    // console.log(hero)
  }
}
