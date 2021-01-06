import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterEmployeeApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterEmployeeApplicationCoreModule } from 'app/core/core.module';
import { JhipsterEmployeeApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterEmployeeApplicationHomeModule } from './home/home.module';
import { JhipsterEmployeeApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterEmployeeApplicationSharedModule,
    JhipsterEmployeeApplicationCoreModule,
    JhipsterEmployeeApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterEmployeeApplicationEntityModule,
    JhipsterEmployeeApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterEmployeeApplicationAppModule {}
