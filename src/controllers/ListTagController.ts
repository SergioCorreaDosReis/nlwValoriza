import { ListTagService } from "../services/ListTagService";
import { Request, Response } from "express";

class ListTagController {
  async handle(request: Request, response: Response):Promise<Response> {
    const listTagService = new ListTagService();

    const tags = await listTagService.execute();

    return response.status(200).json(tags);
  }
}


export {ListTagController}