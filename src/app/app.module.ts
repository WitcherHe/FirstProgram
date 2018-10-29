import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RSidebarComponent } from './r-sidebar/r-sidebar.component';
import { GundamManagementComponent } from './gundam/gundam-management/gundam-management.component';
import { StarComponent } from './star/star.component';


const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full'},
  { path: 'content', component: ContentComponent},
  { path: 'gundam', component: GundamManagementComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    RSidebarComponent,
    GundamManagementComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
