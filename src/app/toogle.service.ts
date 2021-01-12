import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ToogleService {
  private _toogleStatusSource = new Subject<string>();
  toogleStatus$ = this._toogleStatusSource.asObservable();

  constructor() {}

  sendToogle(status: string) {
    this._toogleStatusSource.next(status);
  }
}
