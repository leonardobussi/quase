import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [{
      trailer: 'assets/videos/cap.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da galaxia',
      relevance: 98,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Filme fantasia', 'viagem no espaço']
    },{
      trailer: 'assets/videos/cap.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Hora de cagar',
      relevance: 0,
      age: 18,
      parts: 1,
      categories: ['cagada', 'Filme', 'caganeira']
    },{
      trailer: 'assets/videos/cap.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'sua maẽ é uma trapper',
      relevance: 100,
      age: 0,
      parts: 16,
      categories: ['nada sei', 'vai saber', 'top']
    },{
      trailer: 'assets/videos/cap.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'sua maẽ é uma trapper 2',
      relevance: 90,
      age: 0,
      parts: 10,
      categories: ['nada sei', 'vai saber', 'top']
    }
  ]

  setMenuState(state: boolean){
    this.menuOpened = state
  }
  closeMenu(){
    this.menuOpened = false
  }

}
