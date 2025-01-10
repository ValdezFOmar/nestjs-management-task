import { Pool } from 'pg';

export function createPool() {
  console.log('===== POOL CREATED =====');
  return new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number.parseInt(process.env.DB_PORT),
    ssl: {
      rejectUnauthorized: false,
    },
    max: 20,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000,
    maxUses: 7500,
  });
}
