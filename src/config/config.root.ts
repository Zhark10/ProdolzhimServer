import { ConfigModule } from '@nestjs/config';

const environment = process.env.NODE_ENV || 'dev';

export const RootConfigModule = ConfigModule.forRoot({
    envFilePath: `.env.${environment}`,
    isGlobal: true,
});
