"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _AuthenticateUserService = _interopRequireDefault(require("../../../services/AuthenticateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SoC:Separation of Concerts (Separação de procupações)
// DTO - Data transfer object
class SessionsController {
  async create(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateUser = _tsyringe.container.resolve(_AuthenticateUserService.default);

    const {
      user,
      token
    } = await authenticateUser.execute({
      email,
      password
    });
    return response.send({
      user: (0, _classTransformer.classToClass)(user),
      token
    });
  }

}

exports.default = SessionsController;