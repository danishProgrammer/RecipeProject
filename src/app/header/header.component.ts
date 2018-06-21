import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerHeading = 'Recipe';
  activeElement = '';
  constructor() { }
  ngOnInit() {}

  @Output() headerSelected = new EventEmitter<string>();
  
  
  navigatePath (headerName : string){ 
    this.activeElement = headerName;
      this.headerSelected.emit(headerName);
    }

}
