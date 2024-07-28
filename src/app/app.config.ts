import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideAnimationsAsync(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"liebert-crm-7a07a",
      "appId": "1:873109362131:web:228f4d04686ba00448cb26",
      "storageBucket":"liebert-crm-7a07a.appspot.com",
      "apiKey":"AIzaSyBz2ZwvuggirQB-xsxhGXf3FVK5G6eYXwM",
      "authDomain":"liebert-crm-7a07a.firebaseapp.com",
      "messagingSenderId":"873109362131"
    }))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

