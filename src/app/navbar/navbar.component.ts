import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('mobileNavbar') mobileNavbar: ElementRef;

  constructor() { }

  ngOnInit() {  }
  navBarTogglerIsVisible() {
    return this.mobileNavbar.nativeElement.offsetParent !== null;
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.mobileNavbar.nativeElement.click();
    }
  }
}
