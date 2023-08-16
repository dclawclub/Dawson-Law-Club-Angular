import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.css'],
})
export class Team {
  rawurbw: string = ' '
  raws1rm: string = ' '
  rawka0h: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Team - Dawson Law Club')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Team - Dawson Law Club',
      },
    ])
  }
}
