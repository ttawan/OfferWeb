import {normalize, schema} from 'normalizr';

// Define items entity
const items = new schema.Entity(
  'offers',
  {},
  {
    idAttribute: 'id',
    processStrategy: item =>
      Object.assign({
        image: item.image,
        id: item.id,
        locations: item.locations,
        title: item.title,
        start_date: item.start_date,
      }),
  },
);

export default data =>
  normalize(data, {
    offers: new schema.Array(items),
  });
