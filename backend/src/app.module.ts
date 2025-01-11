import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculoModule } from './veiculo/veiculo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'parking',
      autoLoadEntities: true,
      synchronize: true,
    }),
    VeiculoModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}

