import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <p>Counter: {{ counter }}</p>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="reset(counter)" >Reset</button>
    <button (click)="increaseBy(-1)">-1</button>


<hr>
  `
})

export class CounterComponent {
  public counter = 0;

  reset( value: number ): void {
    if( value != 0 ) {
      this.counter = 0
    }
  }

  increaseBy( value: number ): void {
    this.counter += value
  }
}
