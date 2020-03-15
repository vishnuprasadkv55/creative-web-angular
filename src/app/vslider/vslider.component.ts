import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vslider',
  templateUrl: './vslider.component.html',
  styleUrls: ['./vslider.component.css']
})
export class VsliderComponent implements OnInit {
  theInterval;
  slideIndex = 0;
  constructor() { }

  ngOnInit(): void {

    this.slideIndex = 0;
    this.startSlide();
    this.theInterval = 0;
  }
  startSlide() {
    console.log('started');
    this.theInterval = setInterval(this.slideSwitch.bind(this), 3000);
  }

  stopSlide() {
    console.log('stopped');
    clearInterval(this.theInterval);
  }
  slideSwitch() {
    if (!this.slideIndex && this.slideIndex !== 0) {
      this.slideIndex = 0;
    }
    clearProperties();
    document.getElementById('section2').querySelectorAll('img')[this.slideIndex].style.opacity = '1';
    document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex]['style'].opacity = '1';
    document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex].getElementsByClassName('loaded')[0]['style'].animation = '3s linear infinite loading';
    if (this.slideIndex === 2) {
      this.slideIndex = 0;
    } else {
      this.slideIndex++;
    }
  }
  stopSlider(e) {

    // if (Number(e.target.id[e.target.id.length - 1]) === this.slideIndex) {
    //   this.stopSlide();
    //   this.theInterval = null;
    // }
  }
  continueSlider(e) {
    if (Number(e.target.id[e.target.id.length - 1]) === this.slideIndex) {
    }
  }
  clickedSpan(e) {
    this.stopSlide();
    this.startSlide();
    var itemId = '';
    clearProperties();
    switch (e.target.id) {
      case 'span-1': {
        itemId = e.target.id + '-img';
        this.slideIndex = 0;
        document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex].getElementsByClassName('loaded')[0]['style'].animation = '3s linear infinite loading';
        document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex]['style'].opacity = '1';
        document.getElementById(itemId).style.opacity = '1';
        break;
      }
      case 'span-2': {
        itemId = e.target.id + '-img';
        this.slideIndex = 1;
        document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex].getElementsByClassName('loaded')[0]['style'].animation = '3s linear infinite loading';
        document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex]['style'].opacity = '1';
        document.getElementById(itemId).style.opacity = '1';
        break;
      }
      case 'span-3': {
        itemId = e.target.id + '-img';
        this.slideIndex = 2;
        document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex].getElementsByClassName('loaded')[0]['style'].animation = '3s linear infinite loading';
        document.getElementById('slider-main').getElementsByClassName('slider-item')[this.slideIndex]['style'].opacity = '1';
        document.getElementById(itemId).style.opacity = '1';
        break;
      }
    }
    e.preventDefault();
  }
}
function clearProperties() {
  document.getElementById('slider-main').getElementsByClassName('slider-item')[0].getElementsByClassName('loaded')[0]['style'].animation = '';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[1].getElementsByClassName('loaded')[0]['style'].animation = '';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[2].getElementsByClassName('loaded')[0]['style'].animation = '';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[0].getElementsByClassName('container')[0]['style'].animation = '';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[1].getElementsByClassName('container')[0]['style'].animation = '';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[2].getElementsByClassName('container')[0]['style'].animation = '';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[0]['style'].opacity = '0.5';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[1]['style'].opacity = '0.5';
  document.getElementById('slider-main').getElementsByClassName('slider-item')[2]['style'].opacity = '0.5';
  document.getElementById('span-1-img').style.opacity = '0';
  document.getElementById('span-2-img').style.opacity = '0';
  document.getElementById('span-3-img').style.opacity = '0';
}

