import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Injectable({ providedIn: 'root' })
export class ProjectsResolver implements Resolve<Project[]> {
  constructor(private service: ProjectsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project[]> | Promise<any> | any {
    return this.service.getProjects();
  }
}
