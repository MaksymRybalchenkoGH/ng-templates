import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.css']
})
export class ScrollPageComponent implements OnInit {
  public readonly menuList = [
    { id: 'red', name: 'red' },
    { id: 'green', name: 'green' },
    { id: 'blue', name: 'blue' },
    { id: 'yellow', name: 'yellow' },
    { id: 'grey', name: 'grey' }
  ]

  constructor() {}

  ngOnInit() {}
}
