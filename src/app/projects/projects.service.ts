import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Creator, Project } from './project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsUrl = 'https://api.github.com/users/andriyvl/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const headers = new HttpHeaders({ Accept: 'application/vnd.github.inertia-preview+json' });
    return this.http.get(this.projectsUrl, { headers }).pipe(map((data: any[]) => this.createProjects(data)));
  }

  createProjects(dataArray: any[]): Project[] {
    return dataArray.map((data) => {
      const project = new Project();
      project.name = data.name;
      project.body = data.body;
      project.htmlUrl = data.html_url;
      project.createdAt = data.created_at;

      project.creator = new Creator();
      project.creator.login = data.creator ? data.creator.login : '';
      project.creator.avatarUrl = data.creator ? data.creator.avatar_url : '';
      return project;
    });
  }
}
