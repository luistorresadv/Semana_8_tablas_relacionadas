import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Alumno } from '../../alumnos/entities/alumno.entity'; 

@Entity({ name: 'api_matriculas' })
export class Matricula {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar', length: 50 })
  periodo!: string; 
  @Column({ type: 'date' })
  fecha_matricula!: Date;
  @Column({ type: 'varchar', length: 20, default: 'Activa' })
  estado!: string;
  @Column({ type: 'int' })
  alumnoId!: number;
  @ManyToOne(() => Alumno, (alumno) => alumno.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'alumnoId' }) 
  alumno!: Alumno;
}