import { Directive, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appScrollAnchor]'
})
export class ScrollAnchorDirective implements OnInit {
  @Input() appScrollAnchor: string

  constructor() {}

  ngOnInit(): void {
    console.log(this.appScrollAnchor)
  }
}
