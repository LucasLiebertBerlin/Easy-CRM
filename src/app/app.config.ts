import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

// const firebaseConfig = {
//   apiKey: "AIzaSyBz2ZwvuggirQB-xsxhGXf3FVK5G6eYXwM",
//   authDomain: "liebert-crm-7a07a.firebaseapp.com",
//   projectId: "liebert-crm-7a07a",
//   storageBucket: "liebert-crm-7a07a.appspot.com",
//   messagingSenderId: "873109362131",
//   appId: "1:873109362131:web:228f4d04686ba00448cb26",
//   measurementId: "G-RX06S5TJDY"
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideAnimationsAsync(),
//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideAuth(() => getAuth()),
//     provideAnalytics(() => getAnalytics()),
//     provideFirestore(() => getFirestore()),
//     ScreenTrackingService,
//     UserTrackingService
//   ]
// };
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
    ]),
  ],
};