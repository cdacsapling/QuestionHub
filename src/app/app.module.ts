// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
// import { StudentPanelComponent } from './student-panel/student-panel.component';
// import { SharedComponent } from './shared/shared.component';
// import { LoginPageComponent } from './shared/login-page/login-page.component';
// import { ProfilePageComponent } from './student-panel/profile-page/profile-page.component';
// import { HeaderPageComponent } from './student-panel/header-page/header-page.component';
// import { SideNavPageComponent } from './student-panel/side-nav-page/side-nav-page.component';
// import { ProfileTeacherPageComponent } from './teacher-panel/profile-teacher-page/profile-teacher-page.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ModuleContentPageComponent } from './student-panel/module-content-page/module-content-page.component';
// import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
// import { AboutUsPageComponent } from './shared/about-us-page/about-us-page.component';
// import { ContactUsPageComponent } from './shared/contact-us-page/contact-us-page.component';
// import { AskQuestionContentPageComponent } from './student-panel/ask-question-content-page/ask-question-content-page.component';
// import { StudentFooterComponent } from './student-panel/student-footer/student-footer.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TeacherPanelComponent,
//     StudentPanelComponent,
//     SharedComponent,
//     LoginPageComponent,
//     ProfilePageComponent,
//     HeaderPageComponent,
//     SideNavPageComponent,
//     ProfileTeacherPageComponent,
//     PageNotFoundComponent,
//     ModuleContentPageComponent,
//     ResetPasswordComponent,
//     AboutUsPageComponent,
//     ContactUsPageComponent,
//     AskQuestionContentPageComponent,
//     StudentFooterComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
  
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }









import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

//import { AuthGuard } from './auth/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherPanelComponent } from './teacher-panel/teacher-panel.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { SharedComponent } from './shared/shared.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { ProfilePageComponent } from './student-panel/profile-page/profile-page.component';
import { HeaderPageComponent } from './student-panel/header-page/header-page.component';
import { SideNavPageComponent } from './student-panel/side-nav-page/side-nav-page.component';
import { ProfileTeacherPageComponent } from './teacher-panel/profile-teacher-page/profile-teacher-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModuleContentPageComponent } from './student-panel/module-content-page/module-content-page.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { AboutUsPageComponent } from './shared/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './shared/contact-us-page/contact-us-page.component';
import { AskQuestionContentPageComponent } from './student-panel/ask-question-content-page/ask-question-content-page.component';
import { StudentFooterComponent } from './student-panel/student-footer/student-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherPanelComponent,
    StudentPanelComponent,
    SharedComponent,
    LoginPageComponent,
    ProfilePageComponent,
    HeaderPageComponent,
    SideNavPageComponent,
    ProfileTeacherPageComponent,
    PageNotFoundComponent,
    ModuleContentPageComponent,
    ResetPasswordComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    AskQuestionContentPageComponent,
    StudentFooterComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [ //AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
