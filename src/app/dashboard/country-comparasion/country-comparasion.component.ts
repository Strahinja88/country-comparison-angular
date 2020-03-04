import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "country-comparasion",
  templateUrl: "./country-comparasion.component.html",
  styleUrls: ["./country-comparasion.component.css"]
})
export class CountryComparasionComponent implements OnInit {
  // constructor() {}
  @Input() isSelected;
  @Input() mostPopulated;
  @Input() leastPopulated;
  @Input() difference;
  ngOnInit(): void {}
}
