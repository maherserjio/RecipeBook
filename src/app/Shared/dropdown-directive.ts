import { Directive, OnInit, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
selector:'[appDropdown]'
})
  

export class DropdownDirective implements OnInit {

  @HostBinding('class.open')  isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
}

constructor(elRef: ElementRef){  
}

ngOnInit(){
}

 }


