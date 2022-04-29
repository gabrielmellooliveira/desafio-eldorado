import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import Car from 'src/app/models/Car';
import Company from 'src/app/models/Company';
import IResponse from 'src/app/models/IResponse';
import { CarsService } from 'src/app/services/cars.service';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {
  menuName: string = 'cars';
  newCarDialog: boolean = false;

  newCar: any = {};
  companies: Company[] = [];
  cars: Car[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private companiesService: CompaniesService,
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
    this.loadCars();
  }

  loadCompanies(): void {
    this.companiesService.getCompanies().subscribe((response: IResponse<Company[]>) => {
      this.companies = response.content
    })
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((response: IResponse<Car[]>) => {
      console.log('cars', response.content)
      this.cars = response.content
      console.log('cars', this.cars)
    })
  }

  onNewCar(): void {
    this.newCarDialog = true;
  }

  hideNewCarDialog(): void {
    this.newCarDialog = false;
  }

  saveCar(): void {
    this.newCar.companyId = this.newCar.company.id

    this.carsService.createCar(this.newCar).subscribe(() => {
      this.loadCars();

      this.messageService.add({
        severity:'success',
        summary: 'Car message',
        detail: 'New car added with success!'
      });

      this.hideNewCarDialog();
    });
  }

  deleteCar(carId: number): void {
    this.carsService.deleteCar(carId).subscribe(() => {
      this.loadCars();

      this.messageService.add({
        severity:'success',
        summary: 'Car message',
        detail: 'Car deleted with success!'
      });
    });
  }

  onDeleteCar(carId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this car?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => this.deleteCar(carId)
    });
  }
}
