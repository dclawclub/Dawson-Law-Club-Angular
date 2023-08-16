import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-link',
  templateUrl: 'link.component.html',
  styleUrls: ['link.component.css'],
})
export class Link {
  @Input()
  rootClassName: string = ''
  @Input()
  Caption: string = 'More'
  constructor() {}
}
