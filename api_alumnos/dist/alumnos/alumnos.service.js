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
exports.AlumnosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumno_entity_1 = require("./entities/alumno.entity");
const typeorm_2 = require("typeorm");
let AlumnosService = class AlumnosService {
    alumnoRepository;
    constructor(alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }
    async create(createAlumnoDto) {
        const existe = await this.alumnoRepository.findOne({
            where: { cedula: createAlumnoDto.cedula }
        });
        if (existe) {
            throw new common_1.ConflictException("Ya existe un alumno registrado con ese número de cédula");
        }
        const alumno = this.alumnoRepository.create(createAlumnoDto);
        return this.alumnoRepository.save(alumno);
    }
    async findAll() {
        return await this.alumnoRepository.find();
    }
    async findOne(id) {
        const alumno = await this.alumnoRepository.findOne({ where: { id } });
        if (!alumno) {
            throw new common_1.NotFoundException("Alumno no encontrado");
        }
        return alumno;
    }
    async update(id, updateAlumnoDto) {
        const alumno = await this.findOne(id);
        if (updateAlumnoDto.cedula && updateAlumnoDto.cedula != alumno.cedula) {
            const existe = await this.alumnoRepository.findOne({
                where: { cedula: updateAlumnoDto.cedula }
            });
            if (existe) {
                throw new common_1.ConflictException("Ya existe un alumno registrado");
            }
        }
        Object.assign(alumno, updateAlumnoDto);
        return this.alumnoRepository.save(alumno);
    }
    async actualizar(id, datos) {
        await this.alumnoRepository.update(id, datos);
        return this.alumnoRepository.findOneBy({ id });
    }
    async remove(id) {
        const alumno = await this.findOne(id);
        await this.alumnoRepository.remove(alumno);
        return { message: "Alumno eliminado con exito" };
    }
};
exports.AlumnosService = AlumnosService;
exports.AlumnosService = AlumnosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_entity_1.Alumno)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlumnosService);
//# sourceMappingURL=alumnos.service.js.map