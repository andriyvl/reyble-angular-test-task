import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ProjectComponent } from './project/project.component';
import { Shell } from '@app/shell/shell.service';
import { HasAccessTokenGuard } from '@app/has-access-token.guard';
import { ProjectsResolver } from './projects.resolver';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'projects',
      component: ProjectComponent,
      canLoad: [HasAccessTokenGuard],
      loadChildren: () => import('./projects.module').then((m) => m.ProjectsModule),
      resolve: {
        projects: ProjectsResolver,
      },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProjectsRoutingModule {}
