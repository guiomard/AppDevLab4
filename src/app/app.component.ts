import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count: number = 0;
  myString: string = null;
  star2 = true;
  names: string[] = ["marvin", "garvin"];

  buttonClick()  {
    console.log("You clicked the button");
    this.count++;
  }

  doubleClick(){    

    if(this.myString == null){
      this.myString = "Look at the star!";
    }
    else{
      this.myString = null;
    }

    if(this.star2 == true){
      this.star2 = false;
    }
    else{
      this.star2 = true;
    }
  }
}
