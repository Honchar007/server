const CarSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Car ID',
    },
    ownerId: { type: 'string', description: 'Owner ID' },
    carPicsPath: {
      type: 'array',
      items: { type: 'string' },
      description: 'Car picture paths',
    },
    brand: { type: 'string', description: 'Car brand' },
    model: { type: 'string', description: 'Car model' },
    price: { type: 'number', description: 'Car price' },
    volume: { type: 'number', description: 'Car volume' },
    transmission: { type: 'string', description: 'Car transmission type' },
    color: { type: 'string', description: 'Car color' },
    year: { type: 'number', description: 'Car manufacturing year' },
    town: { type: 'string', description: 'Car town' },
    odometr: { type: 'number', description: 'Car odometer reading' },
    vincode: { type: 'string', description: 'Car VIN code' },
    plates: { type: 'string', description: 'Car license plates' },
    description: { type: 'string', description: 'Car description' },
    comments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Owner of comment' },
          text: { type: 'string', description: 'Comment' },
        },
      },
      description: 'Car comments',
    },
    isAvtovukypSale: {
      type: 'boolean',
      description: 'Indicates if the car is for Avtovukyp sale',
    },
    datePublication: {
      type: 'string',
      format: 'date-time',
      description: 'Publication date of the car',
    },
  },
};

const getCarSchema = {
  tags: ['Cars'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'Car ID (string)' },
    },
  },
  response: {
    200: CarSchema,
  },
};

const getAllCarsSchema = {
  description: 'Get all cars',
  tags: ['Cars'],
  response: {
    200: {
      type: 'array',
      items: CarSchema,
    },
  },
};

const getAllOwnerCarsSchema = {
  description: 'Get all cars',
  tags: ['Cars'],
  params: {
    type: 'object',
    properties: {
      ownerId: { type: 'string', description: 'Owner ID' },
    },
  },
  response: {
    200: {
      type: 'array',
      items: CarSchema,
    },
  },
};

const createCarSchema = {
  tags: ['Cars'],
  body: {
    type: 'object',
    properties: {
      ownerId: { type: 'string', description: 'Owner ID' },
      brand: { type: 'string', description: 'Car brand' },
      model: { type: 'string', description: 'Car model' },
      price: { type: 'number', description: 'Car price' },
      volume: { type: 'number', description: 'Car volume' },
      transmission: { type: 'string', description: 'Car transmission type' },
      color: { type: 'string', description: 'Car color' },
      year: { type: 'number', description: 'Car manufacturing year' },
      town: { type: 'string', description: 'Car town' },
      odometr: { type: 'number', description: 'Car odometer reading' },
      vincode: { type: 'string', description: 'Car VIN code' },
      plates: { type: 'string', description: 'Car license plates' },
      fuel: { type: 'string', description: 'Car type fuel' },
      description: { type: 'string', description: 'Car description' },
      isAvtovukypSale: {
        type: 'boolean',
        description: 'Indicates if the car is for Avtovukyp sale',
      },
    },
    required: [
      'ownerId',
      'brand',
      'model',
      'price',
      'volume',
      'transmission',
      'color',
      'year',
      'town',
      'odometr',
      'vincode',
      'fuel',
      'plates',
      'description',
      'isAvtovukypSale',
    ],
  },
  response: {
    201: CarSchema,
  },
};

const updateCarSchema = {
  tags: ['Cars'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'Car ID (string)' },
    },
  },
  body: {
    type: 'object',
    properties: {
      carPicsPath: {
        type: 'array',
        items: { type: 'string' },
        description: 'Car picture paths',
      },
      brand: { type: 'string', description: 'Car brand' },
      model: { type: 'string', description: 'Car model' },
      price: { type: 'number', description: 'Car price' },
      volume: { type: 'number', description: 'Car volume' },
      transmission: { type: 'string', description: 'Car transmission type' },
      color: { type: 'string', description: 'Car color' },
      year: { type: 'number', description: 'Car manufacturing year' },
      odometr: { type: 'number', description: 'Car odometer reading' },
      vincode: { type: 'string', description: 'Car VIN code' },
      plates: { type: 'string', description: 'Car license plates' },
      description: { type: 'string', description: 'Car description' },
    },
  },
  response: {
    200: CarSchema,
  },
};

const deleteCarSchema = {
  tags: ['Cars'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'Car ID' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Success message' },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Error message' },
      },
    },
    500: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Error message' },
      },
    },
  },
};

module.exports = {
  CarSchema,
  getAllCarsSchema,
  getCarSchema,
  createCarSchema,
  updateCarSchema,
  deleteCarSchema,
  getAllOwnerCarsSchema,
};
