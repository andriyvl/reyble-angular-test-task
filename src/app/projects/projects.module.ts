import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [ErrorInterceptor],
})
export class ProjectsModule {}
