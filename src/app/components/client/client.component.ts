import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css'],
})
export class Client {
  @Input()
  Mention: string = '@agncy'
  @Input()
  Quote: string =
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“'
  @Input()
  rootClassName: string = ''
  @Input()
  Avatar: string =
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200'
  @Input()
  Author: string = 'Joanna Smith'
  constructor() {}
}
