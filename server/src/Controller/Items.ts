import { Request, Response } from "express";

import Knex from '../Database/connection';

export default class ItemsController {
  async index(request: Request, response: Response): Promise<any> {
    const conn = await Knex.table('items').select('*');

    return response.json(conn);
  }
}