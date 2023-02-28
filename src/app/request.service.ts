import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';
import { IUserResponse } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private octokit: Octokit
  constructor() {
    this.octokit = new Octokit({
      auth: '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'
    })
   }

  async getAll(username: string): Promise<IUserResponse> {
    return await this.octokit.request(`GET /users/${username}`, {
      username: 'USERNAME'
    })
  }
}
