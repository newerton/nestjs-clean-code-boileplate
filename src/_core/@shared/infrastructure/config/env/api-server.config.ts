import * as dotenv from 'dotenv';
import { from, logger } from 'env-var';

dotenv.config();
const env = from(process.env, { logger });

export class ApiServerConfig {
  public static readonly ENV: string = env
    .get('NODE_ENV')
    .default('development')
    .asString();

  public static readonly PORT: number = env
    .get('API_PORT')
    .required()
    .asPortNumber();

  public static readonly LOG_ENABLE: boolean = env
    .get('API_LOG_ENABLE')
    .required()
    .asBool();
}
