import { Component} from '@angular/core';
import { RequestService } from './request.service';
import { IUserResponse } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public username: string | null;

  public resp: IUserResponse 

  constructor(private requestService: RequestService) {}

  async onGetUser(): Promise<void> {
    if (!this.username) {
      return
    }
    this.resp = await this.requestService.getAll(this.username)
    this.clearUsername()
    console.log(this.resp)
  }

  private clearUsername() {
    this.username = null
  }
}
