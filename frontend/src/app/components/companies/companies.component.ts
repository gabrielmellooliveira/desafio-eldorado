import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import Company from 'src/app/models/Company';
import IResponse from 'src/app/models/IResponse';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {
  menuName: string = 'cars';
  newCompanyDialog: boolean = false;

  newCompany: Company = new Company();
  companies: Company[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companiesService.getCompanies().subscribe((response: IResponse<Company[]>) => {
      this.companies = response.content
    })
  }

  onNewCompany(): void {
    this.newCompanyDialog = true;
  }

  hideNewCompanyDialog(): void {
    this.newCompanyDialog = false;
  }

  saveCompany(): void {
    this.companiesService.createCompany(this.newCompany).subscribe(() => {
      this.loadCompanies();

      this.messageService.add({
        severity:'success',
        summary: 'Company message',
        detail: 'New company added with success!'
      });
    });
  }

  deleteCompany(companyId: number): void {
    this.companiesService.deleteCompany(companyId).subscribe(() => {
      this.loadCompanies();

      this.messageService.add({
        severity:'success',
        summary: 'Company message',
        detail: 'Company deleted with success!'
      });
    });
  }

  onDeleteCompany(companyId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this company?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => this.deleteCompany(companyId)
    });
  }
}
