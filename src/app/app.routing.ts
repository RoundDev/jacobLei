import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';

import {CarouselComponent} from './carousel/carousel.component';
import {ServicesComponent} from './services/services.component';
import {PropertiesComponent} from './properties/properties.component';
import {ApplicationComponent} from './application/application.component';
import {OwnersComponent} from './owners/owners.component';
import {ContactComponent} from './contact/contact.component';
import {PaymentComponent} from './payment/payment.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {NoticeComponent} from './notice/notice.component';
import {SingleComponent} from './single/single.component';
import {MultiComponent} from './multi/multi.component';
// import {FormResolver} from './payment/form-resolver.service';

const  appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  },
  {
    path: 'payment',
    component: PaymentComponent,
    // resolve: {
    //   FormResolver
    // }
  },
  {
    path: 'owners',
    component: OwnersComponent
  },
  {
    path: 'home',
    component: HomePageComponent
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
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'notice',
    component: NoticeComponent
  },
  {
    path: 'single',
    component: SingleComponent
  },
  {
    path: 'multi',
    component: MultiComponent
  }
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
