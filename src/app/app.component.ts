import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//////////////////////////////////////////////////////////

interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  //
}

drawPoint ({
  x: 1,
  y: 2
})
//////////////////////////////////////////////////////////
export class AppComponent {}
