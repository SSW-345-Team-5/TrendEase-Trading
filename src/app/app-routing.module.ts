import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';
import { SignalComponent } from './signal/signal.component';
import { SignalResultsComponent } from './signal-results/signal-results.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'report/:id', component: ReportComponent },
  { path: 'signal', component: SignalComponent },
  { path: 'signal/:symbol', component: SignalResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
