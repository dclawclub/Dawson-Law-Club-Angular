import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.css'],
})
export class Tag {
  @Input()
  Tag: string = 'Branding'
  constructor() {}
}
