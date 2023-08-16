import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.css'],
})
export class Work {
  @Input()
  Image: string =
    'https://images.unsplash.com/photo-1513111168953-34fc252c9279?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxjdXJ0YWluc3xlbnwwfHx8fDE2OTE2MjA1NTF8MA&ixlib=rb-4.0.3&w=1500'
  @Input()
  rootClassName: string = ''
  @Input()
  Description: string = 'Future events here'
  @Input()
  Coming: string = 'Coming soon'
  constructor() {}
}
