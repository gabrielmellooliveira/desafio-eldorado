import Company from "./Company";

export default class Car {
  id: number = 0;
  model: string = '';
  companyId: number = 0;
  company: Company = new Company();
  year: string = '';
  color: string = '';
}
