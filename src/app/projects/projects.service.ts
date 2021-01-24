import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    const headers = new HttpHeaders({ Accept: 'application/vnd.github.inertia-preview+json' });
    return this.http.get('https://api.github.com/users/andriyvl/projects', { headers });
  }
}
