import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemLookupComponent } from './item-lookup/item-lookup.component';
import { HighAlchemyComponent } from './high-alchemy/high-alchemy.component';
import { HightestVolumesComponent } from './hightest-volumes/hightest-volumes.component';
import { HightestMarginsComponent } from './hightest-margins/hightest-margins.component';
import { ItemIndicatorComponent } from './item-indicator/item-indicator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemLookupComponent,
    HighAlchemyComponent,
    HightestVolumesComponent,
    HightestMarginsComponent,
    ItemIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
