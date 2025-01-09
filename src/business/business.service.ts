import { Injectable } from '@nestjs/common';
import { poolPromise } from 'src/_config/db.config';
import { BusinessType } from './business.model';
import { QueryResult } from 'pg';

@Injectable()
export class BusinessService {
  async getAllTypes(): Promise<BusinessType[]> {
    const pool = poolPromise();
    const client = await pool.connect();

    try {
      const result: QueryResult<BusinessType> = await client.query(
        'SELECT * FROM business.type',
      );
      return result.rows;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Error: ${message}`);
    } finally {
      client.release();
    }
  }
}
