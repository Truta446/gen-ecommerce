import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  private user = new BehaviorSubject<any>(null);
  public users = this.user.asObservable();

  public setUser(value: any): void {
    this.user.next(value);
  }
}
