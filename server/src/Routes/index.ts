import { Router } from 'express';

import ItemsController from '../Controller/Items';
import PointsController from '../Controller/Points';

const Routes = Router();
const ControllerPoints = new PointsController();
const ControllerItems = new ItemsController();

Routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

Routes.get('/items/', ControllerItems.index);

Routes.get('/point/:point_id/data/', ControllerPoints.show);
Routes.post('/point/', ControllerPoints.create);

export default Routes;