import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"schoolmate-a6c1f","appId":"1:613589863139:web:e0e25b771867c4125353d6","storageBucket":"schoolmate-a6c1f.appspot.com","apiKey":"AIzaSyDlwuogq5VPSzRP5R1T7z53GdS4PyFn9xA","authDomain":"schoolmate-a6c1f.firebaseapp.com","messagingSenderId":"613589863139","measurementId":"G-9S5YLWY488"})), provideFirestore(() => getFirestore())]
};
