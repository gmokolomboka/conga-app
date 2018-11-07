import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { IsUpComponent } from '../customers/is-up/is-up.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DashboardComponent, IsUpComponent
  ],
})
export class DashboardModule { }


