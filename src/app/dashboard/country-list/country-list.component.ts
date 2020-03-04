import { CountriesService } from "./../../countries.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.css"]
})
export class CountryListComponent implements OnInit {
  countries;
  filteredCountries;
  searchText: string = "";
  checkboxes = [];
  mostPopulated;
  leastPopulated;
  difference;
  selectedCountries;
  isSelected: Boolean = false;
  compareError: string = "";
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countriesService.getCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  filtered = value => x => x.name.toLowerCase().includes(value.toLowerCase());

  searchThis() {
    if (this.searchText !== "") {
      this.filteredCountries = this.countries.filter(
        this.filtered(this.searchText)
      );
    } else this.filteredCountries = this.countries;
  }

  checkThis() {
    this.checkboxes = this.countries.filter(country => country.checked);
  }

  isDisabled(country) {
    if (this.checkboxes.length > 3) {
      return country.checked ? false : true;
    }
    return false;
  }

  compareCountries() {
    if (this.checkboxes.length > 1) {
      for (let i = 0, n = this.checkboxes.length; i < n; i++) {
        this.checkboxes[i].checked = false;
      }

      const sortedCheckboxes = this.checkboxes.sort((a, b) =>
        a.population > b.population ? -1 : 1
      );
      this.mostPopulated = sortedCheckboxes[0];
      this.leastPopulated = sortedCheckboxes[sortedCheckboxes.length - 1];
      this.difference =
        sortedCheckboxes[0].population -
        sortedCheckboxes[sortedCheckboxes.length - 1].population;
      this.selectedCountries = this.checkboxes.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      this.checkboxes = [];
      this.isSelected = true;
      this.searchText = "";
      this.compareError = "";
      this.filteredCountries = this.countries;
    } else {
      this.compareError = "You must select at least 2 countries";
    }
  }
}
