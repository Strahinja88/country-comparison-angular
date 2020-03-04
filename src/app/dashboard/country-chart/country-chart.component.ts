import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "country-chart",
  templateUrl: "./country-chart.component.html",
  styleUrls: ["./country-chart.component.css"]
})
export class CountryChartComponent implements OnInit {
  @Input() isSelected;
  @Input() selectedCountries;
  @Input() mostPopulated;
  constructor() {}

  ngOnInit(): void {}

  roundNumberCalc() {
    let string = this.mostPopulated.population.toString();

    let firstNumber = parseInt(string.substring(0, 1));
    const secondNumber = parseInt(string.substring(1, 2));

    if (
      secondNumber >= 5 ||
      ((firstNumber === 1 || firstNumber === 2) && secondNumber >= 2)
    ) {
      firstNumber += 1;
    }

    const roundedNumber = parseInt(
      firstNumber.toString() +
        string.substring(1, string.length).replace(/[0-9]/g, "0")
    );

    return roundedNumber;
  }

  deviderCalc() {
    const roundedNumber = this.roundNumberCalc();
    const firstNumber = parseInt(roundedNumber.toString().substring(0, 1));
    let number;

    switch (firstNumber) {
      case 1:
      case 2:
      case 5:
        number = 10;
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        number = firstNumber;
        break;
      case 4:
        number = 8;
        break;
      case 3:
        number = 6;
        break;
      default:
        break;
    }

    return number;
  }

  heightCalc() {
    const devider = this.deviderCalc();
    let height;

    switch (devider) {
      case 6:
        height = 300;
        break;
      case 7:
        height = 350;
        break;
      case 8:
        height = 400;
        break;
      case 9:
        height = 450;
        break;
      case 10:
        height = 500;
        break;
      default:
        break;
    }
    return height;
  }

  populationPercentage = country => {
    let sum = 0;
    let allPopulation = 0;
    this.selectedCountries.map(c => (allPopulation = sum += c.population));

    const populationPercentage = Math.round(
      (country.population / allPopulation) * 100
    );

    const populationPercentage2 = Math.round(
      (country.population / this.mostPopulated.population) * 100
    );

    const roundedNumber = this.roundNumberCalc();

    const multipleHeight = this.heightCalc();

    const height = `${(country.population / roundedNumber) * multipleHeight}px`;

    const obj = { populationPercentage, height, populationPercentage2 };

    return obj;
  };

  scaleCalc() {
    const roundedNumber = this.roundNumberCalc();

    const devider = this.deviderCalc();

    const iterator = roundedNumber / devider;

    let arr = [];

    for (let i = roundedNumber; i >= 0; i -= iterator) {
      arr.push(i);
    }
    return arr;
  }

  percentCalc() {
    return this.scaleCalc().length <= 7 ? 7 : 5;
  }
}
