import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text1: string = 'Team'
  @Input()
  text: string = 'Home'
  @Input()
  text2: string = 'About'
  @Input()
  rootClassName: string = ''
  @Input()
  text3: string = 'Contact'
  @Input()
  text4: string = 'Join'
  constructor() {}
}
