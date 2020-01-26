import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginPageComponent, data: { title: 'My Calendar' } },
  {path:'resetPassword',component:ResetPasswordComponent, data: { title: 'My' } },
  {path:'aboutPage',component:AboutUsPageComponent, data: { title: ' Calendar' } },
  {path:'contactPage',component:ContactUsPageComponent},
  {path:'studentPage/:id',component:StudentPanelComponent,
  children: [
   { path: '', redirectTo: 'ModuleContent', pathMatch: 'full' },
    {path:'ModuleContent',component:ModuleContentPageComponent},
    { path: 'studentProfile', component: ProfilePageComponent },
    { path: 'askQuestion', component: AskQuestionContentPageComponent }
  ]
  },
  {path:'teacherPanel/:id',component:TeacherPanelComponent,
  children: [
   { path: '', redirectTo: 'teacherModuleContent', pathMatch: 'full' },
    {path:'teacherModuleContent',component:ModuleContentPageComponent},
    { path: 'teacherProfile', component: ProfileTeacherPageComponent },
    { path: 'askQuestion', component: AskQuestionContentPageComponent }
  ]
  },
  
  {path:'**', component:PageNotFoundComponent}
];

//jaha value fetch krte ha vha private ctor me activatedRoute inject krate ha
//id = parseInt(this.router.snapshot.paramMap.get("id")) //jaha value fetch karni ha url se
//this.router.navigate("login",dept.id) in main module from where we are calling
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*export const routingComponent = [
  
  TeacherPanelComponent,
  StudentPanelComponent,
  SharedComponent,
  LoginPageComponent,
  ProfilePageComponent,
  HeaderPageComponent,
  SideNavPageComponent,
  ProfileTeacherPageComponent
]*/