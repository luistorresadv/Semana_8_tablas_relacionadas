"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlumnoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_alumno_dto_1 = require("./create-alumno.dto");
class UpdateAlumnoDto extends (0, mapped_types_1.PartialType)(create_alumno_dto_1.CreateAlumnoDto) {
}
exports.UpdateAlumnoDto = UpdateAlumnoDto;
//# sourceMappingURL=update-alumno.dto.js.map