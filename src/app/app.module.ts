import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ScrollPageComponent } from './scroll-page/scroll-page.component'
import { ScrollMenuComponent } from './scroll-menu/scroll-menu.component'
import { ScrollAnchorDirective } from './scroll-anchor.directive'

@NgModule({
  declarations: [AppComponent, ScrollPageComponent, ScrollMenuComponent, ScrollAnchorDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
