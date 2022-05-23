import Router from "express";
import CryptController from "../controller/index";

const route = Router();
const cryptController = new CryptController();

route.post("/crypt", cryptController.create);

export { route };
