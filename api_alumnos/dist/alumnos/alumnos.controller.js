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
exports.AlumnosController = void 0;
const common_1 = require("@nestjs/common");
const alumnos_service_1 = require("./alumnos.service");
const create_alumno_dto_1 = require("./dto/create-alumno.dto");
const update_alumno_dto_1 = require("./dto/update-alumno.dto");
const alumno_entity_1 = require("./entities/alumno.entity");
let AlumnosController = class AlumnosController {
    alumnosService;
    constructor(alumnosService) {
        this.alumnosService = alumnosService;
    }
    create(createAlumnoDto) {
        return this.alumnosService.create(createAlumnoDto);
    }
    findAll() {
        return this.alumnosService.findAll();
    }
    findOne(id) {
        return this.alumnosService.findOne(+id);
    }
    update(id, updateAlumnoDto) {
        return this.alumnosService.update(+id, updateAlumnoDto);
    }
    async actualizar(id, datosAlumno) {
        return this.alumnosService.actualizar(id, datosAlumno);
    }
    remove(id) {
        return this.alumnosService.remove(+id);
    }
};
exports.AlumnosController = AlumnosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumno_dto_1.CreateAlumnoDto]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_alumno_dto_1.UpdateAlumnoDto]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, alumno_entity_1.Alumno]),
    __metadata("design:returntype", Promise)
], AlumnosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlumnosController.prototype, "remove", null);
exports.AlumnosController = AlumnosController = __decorate([
    (0, common_1.Controller)('alumnos'),
    __metadata("design:paramtypes", [alumnos_service_1.AlumnosService])
], AlumnosController);
//# sourceMappingURL=alumnos.controller.js.map