import { Request, Response } from "express";

import Knex from '../Database/connection';

export default class PointsController {
  async show(request: Request, response: Response): Promise<any> {
    const { point_id } = request.params;

    const point = await Knex('points').where('point_id', point_id).first();

    if (!point) {
      return response.status(400).json({ status: 'error', message: 'Point not found.' });
    }

    const items = await Knex('items')
      .select(['items.image', 'items.title'])
      .join('point_items', 'items.item_id', '=', 'point_items.item_id')
      .where('point_items.point_id', point_id);

    return response.json({ ...point, items });
  }

  async create(request: Request, response: Response): Promise<any> {
    const { image, name, email, whatsapp, latitude, longitude, cep, address, number, district, city, state, complement, items } = request.body;
    const point = { image, name, email, whatsapp, latitude, longitude, cep, address, number, district, city, state, complement };

    const conn = await Knex.transaction();

    const insertIds = await conn('points').insert(point);

    const point_id = insertIds[0];
    const pointItems = items.map((item_id: number) => {
      return { point_id, item_id }
    });

    await conn('point_items').insert(pointItems);
    await conn.commit();

    return response.json({ status: 'success' });
  }
}