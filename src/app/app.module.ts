import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairCardComponent } from './components/fair-card/fair-card.component';
import { FairDashboardComponent } from './components/fair-dashboard/fair-dashboard.component';
import { FairInfoComponent } from './components/fair-info/fair-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FairCardComponent,
    FairDashboardComponent,
    FairInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
