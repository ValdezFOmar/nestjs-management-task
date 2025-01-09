import { Controller, Get } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessType } from './business.model';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get('types')
  async getAllTypes(): Promise<BusinessType[]> {
    return await this.businessService.getAllTypes();
  }
}
