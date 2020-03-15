import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  showStoreDiv = false;
  constructor() {
   }
   showStore(){
    this.showStoreDiv = !this.showStoreDiv;
   }
  ngOnInit(): void {
    window.onload = function () {
      var element = document.getElementById('sample-video');
      element['muted'] = "muted";
  }

    var faders = document.querySelectorAll('.reveal-text');
    var appearOptions = {
      root: null, // relative to document viewport 
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: [0.85,0] // visible amount of item shown in relation to root
    };
    var appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
      entries.forEach(function(entry) {
        if(entry.isIntersecting){ 
          // if(entry.rootBounds.height !==200){
          entry.target.classList.add(entry.target.parentElement.id + '-appear');
        } else{
          entry.target.classList.remove(entry.target.parentElement.id + '-appear');
        }
      });
    },appearOptions);
  
faders.forEach(function(fader){
appearOnScroll.observe(fader);
});
  }

}
