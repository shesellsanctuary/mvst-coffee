import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './coffee/coffee.module';
import { Coffee } from './coffee/entities/coffee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'Mast3rp@ss',
      username: 'postgres',
      entities: [Coffee],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    CoffeeModule,
  ],
  controllers: [],
})
export class AppModule {}
