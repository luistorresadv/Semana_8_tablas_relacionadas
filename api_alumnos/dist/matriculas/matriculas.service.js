"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const matricula_entity_1 = require("./entities/matricula.entity");
let MatriculasService = class MatriculasService {
    matriculaRepository;
    constructor(matriculaRepository) {
        this.matriculaRepository = matriculaRepository;
    }
    async todos() {
        return await this.matriculaRepository.find({
            relations: {
                alumno: true,
            },
        });
    }
    async uno(id) {
        const matricula = await this.matriculaRepository.findOne({
            where: { id },
            relations: { alumno: true },
        });
        if (!matricula)
            throw new common_1.NotFoundException('Matrícula no encontrada');
        return matricula;
    }
    async crear(datos) {
        const nuevaMatricula = this.matriculaRepository.create(datos);
        return await this.matriculaRepository.save(nuevaMatricula);
    }
    async actualizar(id, datos) {
        const matricula = await this.uno(id);
        matricula.periodo = datos.periodo;
        matricula.fecha_matricula = datos.fecha_matricula;
        matricula.estado = datos.estado;
        if (datos.alumno && datos.alumno.id) {
            matricula.alumno = { id: Number(datos.alumno.id) };
        }
        return await this.matriculaRepository.save(matricula);
    }
    async eliminar(id) {
        const registro = await this.uno(id);
        await this.matriculaRepository.delete(id);
        return { message: 'ok' };
    }
};
exports.MatriculasService = MatriculasService;
exports.MatriculasService = MatriculasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(matricula_entity_1.Matricula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MatriculasService);
//# sourceMappingURL=matriculas.service.js.map