import { MatriculasService } from './matriculas.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
export declare class MatriculasController {
    private readonly matriculasService;
    constructor(matriculasService: MatriculasService);
    listarTodas(): Promise<import("./entities/matricula.entity").Matricula[]>;
    obtenerUna(id: number): Promise<import("./entities/matricula.entity").Matricula>;
    registrarNueva(dto: CreateMatriculaDto): Promise<import("./entities/matricula.entity").Matricula[]>;
    modificar(id: number, dto: CreateMatriculaDto): Promise<import("./entities/matricula.entity").Matricula>;
    borrar(id: number): Promise<{
        message: string;
    }>;
}
