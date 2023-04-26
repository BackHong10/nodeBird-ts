"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middelwares_1 = require("../middelwares");
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
// POST /user/:id/follow
router.post('/:id/follow', middelwares_1.isLoggedIn, user_1.follow);
exports.default = router;
