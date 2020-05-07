import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'report/:id', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
