import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Team } from './team.component'

const routes = [
  {
    path: '',
    component: Team,
  },
]

@NgModule({
  declarations: [Team],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Team],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamModule {}
