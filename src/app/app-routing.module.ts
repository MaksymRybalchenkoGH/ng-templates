import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ScrollPageComponent } from './scroll-page/scroll-page.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'foo',
        component: ScrollPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
      // scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
