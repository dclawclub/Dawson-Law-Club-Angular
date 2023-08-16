import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-service',
  templateUrl: 'service.component.html',
  styleUrls: ['service.component.css'],
})
export class Service {
  @Input()
  Title: string = 'Branding'
  @Input()
  rootClassName: string = ''
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  constructor() {}
}
