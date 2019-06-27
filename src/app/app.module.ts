import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularReactBrowserModule } from '@angular-react/core';
import { AppComponent } from './app.component';
import {TimelineModule} from "./timeline/public-api";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,AngularReactBrowserModule,TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
