import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('mobileNavbar', { static: false }) mobileNavbar: ElementRef;
  readonly url: string = 'https://jacoblei.managebuilding.com/Resident/PublicPages/Home.aspx';

  constructor() { }

  ngOnInit() { }

  navBarTogglerIsVisible() {
      return this.mobileNavbar.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.mobileNavbar.nativeElement.click();
    }
  }

  openLink() {
    window.open(this.url, '_blank');
  }
}
