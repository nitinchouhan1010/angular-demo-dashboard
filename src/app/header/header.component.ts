import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public show: boolean = false;

  constructor() {}

  ngOnInit() {}
  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }
}
