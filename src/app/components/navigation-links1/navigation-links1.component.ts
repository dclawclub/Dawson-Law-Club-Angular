import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links1',
  templateUrl: 'navigation-links1.component.html',
  styleUrls: ['navigation-links1.component.css'],
})
export class NavigationLinks1 {
  @Input()
  text1: string = 'Events'
  @Input()
  text2: string = 'Team'
  @Input()
  text: string = 'Home'
  @Input()
  text3: string = 'Contact'
  @Input()
  rootClassName: string = ''
  @Input()
  text4: string = 'Join'
  constructor() {}
}
