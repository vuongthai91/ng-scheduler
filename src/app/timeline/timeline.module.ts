import { registerElement } from '@angular-react/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TimelineComponent } from './timeline.component';
import Timeline from 'react-calendar-timeline'

const components = [TimelineComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  schemas: [NO_ERRORS_SCHEMA],
})
export class TimelineModule {
  constructor() {
    // Add any React elements to the registry (used by the renderer).
    registerElement('Timeline', () => Timeline);
  }
}
