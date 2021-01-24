import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

public getAllLaunches(): Observable<any> {
  return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
}

public getLaunchesByYear(year: string,flagS:string,flagS1:string): Observable<any> {
  if(flagS=='launch_success')
  return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}&launch_success=${flagS1}`);
  if(flagS=='land_success')
  return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}&land_success=${flagS1}`);
  else
  return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
}

}
