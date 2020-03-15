import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
hideAccessorieseNav: boolean = false;
hideHomeNav: boolean = false;
hidePhoneNav: boolean = false;
prevScrollpos;
  constructor() { }

  ngOnInit(): void {

    this.prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById('fixed-nav-bar').style.top = '0';
      } else {
        document.getElementById('fixed-nav-bar').style.top = '-3em';
      }
      this.prevScrollpos = currentScrollPos;
    }
  }
  hideAndSeekProp (value) {
    if (value) {
      document.getElementById('content-items').style.overflow = 'auto';

      document.getElementById('content-items').style.zIndex = '1';
      document.getElementById('fixed-nav-bar').style.zIndex = '2';
    } else {
      document.getElementById('content-items').style.overflow = '';
      document.getElementById('content-items').style.zIndex = '';
      document.getElementById('fixed-nav-bar').style.zIndex = '';
    }
  }
  closeAll() {
    document.getElementById('toggle1')['checked'] = false;
    document.getElementById('toggle2')['checked'] = false;
    document.getElementById('toggle3')['checked'] = false;
    this.hidePhoneNav= false
    this.hideHomeNav= false
    this.hideAccessorieseNav= false
  }
  navMenuSelector(e) {
    console.log(e.target);
    switch(e.target.id) {
      case 'toggle1': {
          this.hidePhoneNav= e.target.checked;
          this.hideHomeNav= false;
          this.hideAccessorieseNav= false;
        break;
      }
      case 'toggle2': {
          this.hideHomeNav= e.target.checked;
          this.hideAccessorieseNav= false;
          this.hidePhoneNav= false;
        break;
      }
      case 'toggle3': {
          this.hideAccessorieseNav= e.target.checked;
          this.hidePhoneNav= false;
          this.hideHomeNav= false;
        break;
      }

    }
  }
  // showPhoneSubnav(e) {
  //   this.closeAll();
  //   this.hidePhoneNav=e.target.checked;
  //   document.getElementById('toggle1')['checked'] = e.target.checked;
  // }
  // showHomeSubnav(e) {
  //   this.closeAll();
  //    this.hideHomeNav=e.target.checked;
  //   document.getElementById('toggle2')['checked'] = e.target.checked;
  // }
  // showAccessoriesSubnav(e) {
  //   this.closeAll();
  //   this.hideAccessorieseNav =e.target.checked;
  //   document.getElementById('toggle3')['checked'] = e.target.checked;
  // }
}
