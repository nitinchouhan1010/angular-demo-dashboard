import { Component, OnInit } from "@angular/core";
import { ToogleService } from "../toogle.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public show: boolean = true;
  constructor(private _toogleStatusSource: ToogleService) {}

  ngOnInit() {
    this._toogleStatusSource.toogleStatus$.subscribe(status => {
      console.log(status);

      if (status == "show") {
        this.show = !this.show;
      }
    });
  }
}
