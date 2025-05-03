import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AboutComponent } from './pages/about/about.component';
import { StudentLifeComponent } from './pages/student-life/student-life.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CareersComponent } from './pages/careers/careers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student-life', component: StudentLifeComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'careers', component: CareersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];
