import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculasService } from './matriculas.service';
import { MatriculasController } from './matriculas.controller';
import { Matricula } from './entities/matricula.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Matricula])],
  providers: [MatriculasService],
  controllers: [MatriculasController],
})
export class MatriculasModule {}