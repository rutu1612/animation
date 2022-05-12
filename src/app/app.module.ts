import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { AddserverComponent } from './addserver/addserver.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AddserverComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
