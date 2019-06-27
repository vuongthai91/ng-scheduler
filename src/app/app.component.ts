import { Component } from '@angular/core';
import * as moment from 'moment';
import { TimelineComponent } from './timeline/public-api';

import "../styles.scss";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  TimelineComponent = TimelineComponent
  groups = [
    { id: 1, title: 'NNB 1' }, 
    { id: 2, title: 'NNB 2' },
    { id: 3, title: 'NNB 3' }]


  itemProps = {
    // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
    'data-custom-attribute': 'Random content',
    'aria-hidden': true,
    onDoubleClick: () => { console.log('You clicked double!') },
    
    // onItemClick:  (itemId, _, time) => {
    //   console.log('Clicked: ' + itemId, time)
    // }
  }
  items = [
    {
      id: 1,
      group: 1,
      title: 'HP 1',
      start_time: moment(),
      end_time: moment().add(1, 'day'),
      itemProps: this.itemProps
    },
    {
      id: 2,
      group: 2,
      title: 'HP 2',
      start_time: moment().add(-3, 'day'),
      end_time: moment().add(-2, 'day'),
      itemProps: this.itemProps,
    
    },
    {
      id: 3,
      group: 3,
      title: 'HP 3 ',
      start_time: moment(),
      end_time: moment().add(1, 'day'),
      itemProps: this.itemProps
    }
  ]
  defaultTimeStart=moment().add(-12, 'hour')
  defaultTimeEnd=moment().add(12, 'hour')
  visibleTimeStart = moment()
  .startOf('month')
  .toDate().valueOf()
  visibleTimeEnd = moment()
  .endOf('month')
  .toDate().valueOf()

  logEvent(...args: any[]) {
    console.log(args);
  }

  onClickEventHandler(ev) {
    console.log('onClick', { ev });
  }

  onNewClicked() {
    console.log('New clicked');
  }

}
