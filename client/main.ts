import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { mockUserData } from './mock-data/mockUserdata.service';
import { AppComponent } from './app.component';
import { appRouterProviders } from './routes/app.routes'

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide:XHRBackend, useClass:mockUserData },
    { provide:SEED_DATA, useClass:mockUserData }
]);
