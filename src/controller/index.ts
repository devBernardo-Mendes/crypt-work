import { Response, Request } from "express";
import { hash } from "bcryptjs";

export default class CryptController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { char } = request.body;
    const crypt = await hash(char, 8);
    return response.json(crypt);
  }
}
