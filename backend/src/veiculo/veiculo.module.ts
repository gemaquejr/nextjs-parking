import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veiculo } from './veiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Veiculo])],
  providers: [],
  controllers: [],
})
export class VeiculoModule {}
