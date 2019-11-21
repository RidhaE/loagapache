import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogsComponent } from './containers/logs/logs.component';
import { HitsComponent } from './containers/hits/hits.component';
const routes: Routes = [
  {
    path: '',
    component: LogsComponent,
	children: [
	   { path:'', component: LogsComponent },
      { path: ':ip/detail', component: HitsComponent }
	  
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LogsRoutingModule { }
