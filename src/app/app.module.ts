import { BrowserModule } from '@angular/platform-browser';
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
import { TenantsComponent } from './tenants/tenants.component';
import { OwnersComponent } from './owners/owners.component';
import { ContactComponent } from './contact/contact.component';


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
    TenantsComponent,
    OwnersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
