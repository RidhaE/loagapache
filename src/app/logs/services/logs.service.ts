import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {  Observable, Subject } from 'rxjs';
import { IpList } from '../models/logs.model';
import { Hits } from '../models/hits.model';
@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http: HttpClient) {}

  public getIp(): Observable<IpList> {
    return this.http.get<IpList>(environment.api + '/ip');
  }
  public gethitsIp($ip): Observable<Hits> {
    return this.http.get<Hits>(environment.api + '/ip/'+`${$ip}`);
  }

}
