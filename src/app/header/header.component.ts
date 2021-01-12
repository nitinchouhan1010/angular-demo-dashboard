import { Component, OnInit } from "@angular/core";
import { ToogleService } from "../toogle.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public show: boolean = false;
  constructor(private _toogleStatusSource: ToogleService) {}

  ngOnInit() {}
  toggle() {
    this.show = !this.show;
    this._toogleStatusSource.sendToogle("flag");
  }
}
