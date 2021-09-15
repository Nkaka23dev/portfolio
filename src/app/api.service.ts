import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  web_hook = 'https://hooks.slack.com/services/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';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
       })
  }; 

  constructor(private http: HttpClient) { }

  send_to_slack(data) {
    const message = {
      text: 'SUBJECT :' + data.subject,
      attachments: [
        {
          author_name: window.location.href,
          color: 'danger',
          title: 'NAME: ' + data.name + ' EMAIL: ' + data.email,
          text: data.message
        }
      ]
    };
    return this.http.post(this.web_hook, JSON.stringify(message), this.httpOptions); 


    // this is an api post
  }
}
