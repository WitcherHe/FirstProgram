import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GundamTagsComponent } from './gundam/gundam-tags/gundam-tags.component';

const routes : Routes = [
  {
    path: 'gundam', component: GundamTagsComponent
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
