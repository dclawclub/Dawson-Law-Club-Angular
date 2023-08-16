import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links2',
  templateUrl: 'navigation-links2.component.html',
  styleUrls: ['navigation-links2.component.css'],
})
export class NavigationLinks2 {
  @Input()
  rootClassName: string = ''
  @Input()
  text4: string = 'Join'
  @Input()
  text3: string = 'Contact'
  @Input()
  text: string = 'Home'
  @Input()
  text2: string = 'About'
  @Input()
  text1: string = 'Events'
  constructor() {}
}
