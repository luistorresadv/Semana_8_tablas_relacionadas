export class CreateMatriculaDto {
  periodo!: string;
  fecha_matricula!: string | Date;
  estado!: string;
  alumnoId!: number; 
}