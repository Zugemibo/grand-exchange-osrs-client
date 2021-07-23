import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemLookupComponent } from './item-lookup/item-lookup.component';
import { HighAlchemyComponent } from './high-alchemy/high-alchemy.component';
import { ItemIndicatorComponent } from './item-indicator/item-indicator.component';
import { HightestVolumesComponent } from './hightest-volumes/hightest-volumes.component';
import { HightestMarginsComponent } from './hightest-margins/hightest-margins.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'itemLookup', component: ItemLookupComponent },
  { path: 'highAlchemy', component: HighAlchemyComponent },
  { path: 'itemIndicator', component: ItemIndicatorComponent },
  { path: 'hightestVolumes', component: HightestVolumesComponent },
  { path: 'hightestMargins', component: HightestMarginsComponent },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
