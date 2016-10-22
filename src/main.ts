/// <reference path="../typings/globals/es6-shim/index.d.ts" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/components/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
