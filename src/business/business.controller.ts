import { Controller, Get } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessType } from './business.model';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get('types')
  getAllTypes(): Promise<BusinessType[]> {
    return this.businessService.getAllTypes();
  }
}
