import { SharedRoutingModule } from './shared/shared-routing.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,ReactiveFormsModule,SharedRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
