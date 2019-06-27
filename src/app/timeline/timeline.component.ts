import { ReactWrapperComponent } from '@angular-react/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { ReactCalendarTimelineProps } from "react-calendar-timeline";

@Component({
  selector: 'ng-time-scheduler',
  exportAs: 'ngTimeScheduler',
  template: `
    <Timeline
      #reactNode
      [groups]="groups"
      [items]="items"
      [defaultTimeStart]="defaultTimeStart"
      [defaultTimeEnd]="defaultTimeEnd"
      [minZoom]="minZoom"
      [canMove]="canMove"
      [canResize]="canResize"
      [itemHeightRatio]="itemHeightRatio"
      [visibleTimeStart]="visibleTimeStart"
      [visibleTimeEnd]="visibleTimeEnd"
      [Click]="onClickHandler"
      [MouseDown]="onMouseDownHandler"
      [MouseUp]="onMouseUpHandler"
      [TouchStart]="onTouchStartHandler"
      [TouchEnd]="onTouchEndHandler"
      [ItemClick]="onItemClickHandler"
    ></Timeline>
  `,
  styles: ['react-renderer'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent extends ReactWrapperComponent<ReactCalendarTimelineProps> {
  
  @ViewChild('reactNode') protected reactNodeRef: ElementRef;

  //@Input() componentRef?: ReactCalendarTimelineProps['componentRef'];

   @Input() groups?: ReactCalendarTimelineProps['groups'];
   @Input() items?: ReactCalendarTimelineProps['items'];
   @Input() defaultTimeStart?: ReactCalendarTimelineProps['defaultTimeStart'];
   @Input() defaultTimeEnd?: ReactCalendarTimelineProps['defaultTimeEnd'];
   @Input() minZoom?: ReactCalendarTimelineProps['minZoom'];
   @Input() canMove?: ReactCalendarTimelineProps['canMove'];
   @Input() canResize?: ReactCalendarTimelineProps['canResize'];
   @Input() itemHeightRatio?: ReactCalendarTimelineProps['itemHeightRatio'];
   @Input() visibleTimeStart?: ReactCalendarTimelineProps['visibleTimeStart'];
   @Input() visibleTimeEnd?: ReactCalendarTimelineProps['visibleTimeEnd'];
   //@Input() onClick?: ReactCalendarTimelineProps[""]
  // @Input() imageErrorAs?: IIconProps['imageErrorAs'];
  // @Input() styles?: IIconProps['styles'];
 // @Input() theme?: IIconProps['theme'];

   @Output() readonly onMouseUp = new EventEmitter<MouseEvent>();

   @Output() readonly onClick = new EventEmitter<MouseEvent>();
   @Output() readonly onItemClick = new EventEmitter<MouseEvent>();
  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2) {
    super(elementRef, changeDetectorRef, renderer, { setHostDisplay: true });

    this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
    this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
   this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }
  onMouseDownHandler(ev?: React.MouseEvent) {
    this.onMouseUp.emit(ev.nativeEvent);
    //console.log('onMouseDown')
  }

  onMouseUpHandler(ev?: React.MouseEvent) {
    this.onMouseUp.emit(ev.nativeEvent);
  }

  onClickHandler(ev?: React.MouseEvent) {
    this.onClick.emit(ev.nativeEvent);
  }

  onItemClickHandler(itemId, _, time){
    this.onItemClick.emit();
  //  console.log('Clicked: ' + itemId, time)
  }
 
}
