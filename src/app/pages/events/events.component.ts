import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
})
export class Events {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Events - Dawson Law Club')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Events - Dawson Law Club',
      },
    ])
  }
}
