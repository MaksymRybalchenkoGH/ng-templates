import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-scroll-menu',
  templateUrl: './scroll-menu.component.html',
  styleUrls: ['./scroll-menu.component.css']
})
export class ScrollMenuComponent implements OnInit {
  @Input() menuList = []
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  public scrollTo(id: string): void {
    console.log(id)
    const el = this.elementRef.nativeElement()
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
