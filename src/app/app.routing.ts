import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {PaymentComponent} from './payment/payment.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ServicesComponent} from './services/services.component';
import {PropertiesComponent} from './properties/properties.component';
import {ApplicationComponent} from './application/application.component';

const  appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'home',
    component: CarouselComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  }
]

export const appRoutingProviders: any[] = [
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
