import { BrowserModule } from '@angular/platform-browser';
import {TextMaskModule} from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { PropertiesComponent } from './properties/properties.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationComponent } from './application/application.component';

import { OwnersComponent } from './owners/owners.component';
import { ContactComponent } from './contact/contact.component';
import { NoticeComponent } from './notice/notice.component';
import {AppService} from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleComponent } from './single/single.component';
import { MultiComponent } from './multi/multi.component';
// import {FormResolver} from './payment/form-resolver.service';
// import {loadafter} from '../shared/js/loadafter.js';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PaymentComponent,
    MaintenanceComponent,
    CarouselComponent,
    ServicesComponent,
    PropertiesComponent,
    FooterComponent,
    ApplicationComponent,

    OwnersComponent,
    ContactComponent,
    NoticeComponent,
    SingleComponent,
    MultiComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [appRoutingProviders, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
