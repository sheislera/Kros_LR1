import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
  d: number = 0;

  ras(a: any, b: any) {

    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.d = 0;
      if ((isNaN(this.a) == true) || (isNaN(this.b) == true)) {
        throw new Error('Parameter is not a number!');
      }
      else 
        if (this.a <= this.b){
          let i;
          if (this.a % 2 == 0)
            i = this.a;
          else
            i = this.a + 1;
          while (i <= this.b) {
            this.d += i;
            i += 2;
          }
        }  
    }
    catch (error) {
      console.log(error);
    }
  }

}
