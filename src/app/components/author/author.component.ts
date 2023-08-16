import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-author',
  templateUrl: 'author.component.html',
  styleUrls: ['author.component.css'],
})
export class Author {
  @Input()
  rootClassName: string = ''
  @Input()
  Mention: string = '@spyrl'
  @Input()
  Author: string = 'Joanna Smith'
  @Input()
  Avatar: string =
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200'
  constructor() {}
}
