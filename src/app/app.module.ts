import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ImageComponent } from './header/image/image.component';
import { CvComponent } from './main/cv/cv.component';
import { AboutComponent } from './main/about/about.component';
import {DataService} from './shared/data.service';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {VerticalTimelineModule} from 'angular-vertical-timeline';
import { SectionComponent } from './main/cv/section/section.component';

const routes = [
  {path: 'cv', component: CvComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: CvComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavigationComponent,
    ImageComponent,
    CvComponent,
    AboutComponent,
    NotFoundComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes, {useHash: false}),
    VerticalTimelineModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
