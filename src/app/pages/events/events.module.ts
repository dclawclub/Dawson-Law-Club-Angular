import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Events } from './events.component'

const routes = [
  {
    path: '',
    component: Events,
  },
]

@NgModule({
  declarations: [Events],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Events],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventsModule {}
