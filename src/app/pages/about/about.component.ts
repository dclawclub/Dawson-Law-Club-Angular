import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})
export class About {
  rawt4mr: string = ' '
  rawmhml: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About - Dawson Law Club')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'About - Dawson Law Club',
      },
    ])
  }
}
