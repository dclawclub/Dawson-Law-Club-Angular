import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-statistic',
  templateUrl: 'statistic.component.html',
  styleUrls: ['statistic.component.css'],
})
export class Statistic {
  @Input()
  rootClassName: string = ''
  @Input()
  Value: string = '12'
  @Input()
  Caption: string = 'Years of growth'
  constructor() {}
}
