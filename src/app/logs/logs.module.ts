import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './containers/logs/logs.component';
import { LogsRoutingModule } from './logs.routing.module';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { HitsComponent } from './containers/hits/hits.component';
@NgModule({
  declarations: [LogsComponent, HitsComponent],
  imports: [
	NgxPaginationModule,
    CommonModule,
    LogsRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LogsModule { }
