import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string;
  public heroNames: string[] = [
    'Spideman',
    'Ironman',
    'Thor',
    'Hulk',
    'Daredevil',
    'Ghost Rider',
    'Punisher',
    'Wolverine',
    'Deadpool',
  ]

  removeLastHero(): void {
    if ( this.heroNames.length > 0 ) {
      this.deletedHero = this.heroNames.pop()
      console.log(this.deletedHero)
    }
    return
  }

}
