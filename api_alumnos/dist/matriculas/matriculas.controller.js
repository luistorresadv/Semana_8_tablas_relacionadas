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
exports.MatriculasController = void 0;
const common_1 = require("@nestjs/common");
const matriculas_service_1 = require("./matriculas.service");
const create_matricula_dto_1 = require("./dto/create-matricula.dto");
let MatriculasController = class MatriculasController {
    matriculasService;
    constructor(matriculasService) {
        this.matriculasService = matriculasService;
    }
    async listarTodas() {
        return await this.matriculasService.todos();
    }
    async obtenerUna(id) {
        return await this.matriculasService.uno(id);
    }
    async registrarNueva(dto) {
        const payload = {
            periodo: dto.periodo,
            fecha_matricula: dto.fecha_matricula,
            estado: dto.estado,
            alumno: { id: Number(dto.alumnoId) }
        };
        return await this.matriculasService.crear(payload);
    }
    async modificar(id, dto) {
        const payload = {
            periodo: dto.periodo,
            fecha_matricula: dto.fecha_matricula,
            estado: dto.estado,
            alumno: { id: Number(dto.alumnoId) }
        };
        return await this.matriculasService.actualizar(id, payload);
    }
    async borrar(id) {
        return await this.matriculasService.eliminar(id);
    }
};
exports.MatriculasController = MatriculasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "listarTodas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "obtenerUna", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matricula_dto_1.CreateMatriculaDto]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "registrarNueva", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_matricula_dto_1.CreateMatriculaDto]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "borrar", null);
exports.MatriculasController = MatriculasController = __decorate([
    (0, common_1.Controller)('matriculas'),
    __metadata("design:paramtypes", [matriculas_service_1.MatriculasService])
], MatriculasController);
//# sourceMappingURL=matriculas.controller.js.map