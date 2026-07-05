import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from 'src/matriculas/entities/matricula.entity';

@Injectable()
export class MatriculasService {
  constructor(
    @InjectRepository(Matricula)
    private readonly matriculaRepository: Repository<Matricula>,
  ) {}

  
async todos() {
    return await this.matriculaRepository.find({
      relations: {
        alumno: true, 
      },
    });
  }

async uno(id: number) {
    const matricula = await this.matriculaRepository.findOne({
      where: { id },
      relations: { alumno: true },
    });
    if (!matricula) throw new NotFoundException('Matrícula no encontrada');
    return matricula;
  }

  async crear(datos: any) {
    const nuevaMatricula = this.matriculaRepository.create(datos);
    return await this.matriculaRepository.save(nuevaMatricula);
  }

async actualizar(id: number, datos: any) {
  const matricula = await this.uno(id);
  matricula.periodo = datos.periodo;
  matricula.fecha_matricula = datos.fecha_matricula;
  matricula.estado = datos.estado;  
  if (datos.alumno && datos.alumno.id) {
    matricula.alumno = { id: Number(datos.alumno.id) } as any; 
  }
  return await this.matriculaRepository.save(matricula);
}

  async eliminar(id: number) {
    const registro = await this.uno(id);
    await this.matriculaRepository.delete(id);
    return { message: 'ok' }; 
  }
}