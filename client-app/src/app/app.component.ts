import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';

  url = '';
  token = '';

  urlForm: FormGroup = this.formBuilder.group({
    url: ['', Validators.required]
  })

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { };

  ngOnInit(): void {
    localStorage.removeItem('url');
    localStorage.removeItem('token');
  }

  onSubmit() {
    let url = this.urlForm.controls['url'].value;

    const query = this.httpClient.post('http://localhost:3000/', {url: url});

    query.subscribe((data) => {
      console.log(data);
      if(typeof data === 'string') {
        let parseData = JSON.parse(data);

        localStorage.setItem('url', parseData.url);
        localStorage.setItem('token', parseData.token);
      }
    })

    this.url = localStorage['url'];
    this.token = localStorage['token'];
  }
}
