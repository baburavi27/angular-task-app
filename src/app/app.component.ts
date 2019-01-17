import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  settings = {
    columns: {
      userId: {
        title: 'userId',
        width: '10%'

      },
      id: {
        title: 'id',
        width: '10%'

      },
      title: {
        title: 'title',
        width: '30%'

      },
      body: {
        title: 'body',
        width: '50%'

      }
    },
    actions: false
  };

  public posts: Array<any> = [];


  constructor(private _appService: AppService) {

  }

  ngOnInit() {
    this._appService.getPosts().subscribe((response: any) => {

      this.posts = response;
    });
  }


}
