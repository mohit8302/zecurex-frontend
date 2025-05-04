// filepath: c:\Users\mohit\OneDrive\Desktop\projects\zecurx-platform\zecurx-frontend\src\main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Add this to provide HttpClient
  ],
});
