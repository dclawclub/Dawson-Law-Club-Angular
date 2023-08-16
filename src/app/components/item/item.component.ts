import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css'],
})
export class Item {
  @Input()
  Title: string = 'Eiusmod'
  @Input()
  Tags: string = 'Strategy / Webdevelopment / Marketing'
  constructor() {}
}
