import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto'; 

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Get()
  async listarTodas() {
    return await this.matriculasService.todos();
  }

 
  @Get(':id')
  async obtenerUna(@Param('id', ParseIntPipe) id: number) {
    return await this.matriculasService.uno(id);
  }

  
  @Post()
  async registrarNueva(@Body() dto: CreateMatriculaDto) {
    const payload = {
      periodo: dto.periodo,
      fecha_matricula: dto.fecha_matricula,
      estado: dto.estado,
      alumno: { id: Number(dto.alumnoId) } 
    };
    return await this.matriculasService.crear(payload);
  }

  @Put(':id')
  async modificar(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateMatriculaDto) {
    const payload = {
      periodo: dto.periodo,
      fecha_matricula: dto.fecha_matricula,
      estado: dto.estado,
      alumno: { id: Number(dto.alumnoId) }
    };
    return await this.matriculasService.actualizar(id, payload);
  }

  
  @Delete(':id')
  async borrar(@Param('id', ParseIntPipe) id: number) {
    return await this.matriculasService.eliminar(id);
  }
}