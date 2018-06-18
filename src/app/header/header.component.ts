import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerHeading = 'Recipe';

  constructor() { }
  ngOnInit() {}

  @Output() headerSelected = new EventEmitter<string>();
  
  
  navigatePath (headerName : string){ 
      this.headerSelected.emit(headerName);
    }

}
