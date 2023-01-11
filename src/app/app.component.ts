import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = 'Đỗ Thanh Linh';
  public age = 18;
  title = 'AngularTest';

  public mainName():void{
   this.name = ""
  }
}
