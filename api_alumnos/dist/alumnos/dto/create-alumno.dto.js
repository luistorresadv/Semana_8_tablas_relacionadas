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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlumnoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateAlumnoDto {
    cedula;
    nombre;
    apellido;
    correo;
    telefono;
    fecha_nacimiento;
    carrera;
    nivel;
}
exports.CreateAlumnoDto = CreateAlumnoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 10),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "cedula", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(50),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(50),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(100),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "correo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(15),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(50),
    __metadata("design:type", String)
], CreateAlumnoDto.prototype, "carrera", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El nivel debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'El nivel mínimo es 1' }),
    (0, class_validator_1.Max)(10, { message: 'El nivel máximo es 10' }),
    __metadata("design:type", Number)
], CreateAlumnoDto.prototype, "nivel", void 0);
//# sourceMappingURL=create-alumno.dto.js.map