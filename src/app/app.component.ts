import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  elementType : string;

 navigatePath (selectedFeature : string){
   if(selectedFeature == 'Recipe')
    this.elementType = selectedFeature;
    else
    this.elementType = selectedFeature;
 }

}
