const CarCheckSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Car ID',
    },
    brand: { type: 'string', description: 'Car brand' },
    model: { type: 'string', description: 'Car model' },
    town: { type: 'string', description: 'Town' },
    link: { type: 'string', description: 'Link' },
    wantToCheckId: { type: 'string', description: 'Want to check ID' },
    firstName: { type: 'string', description: 'First name' },
    phone: { type: 'string', description: 'Phone' },
    email: { type: 'string', description: 'Email' },
    checker: {
      type: 'object',
      properties: {
        checkerId: { type: 'string', description: 'Checker ID' },
        name: { type: 'string', description: 'Checker name' },
        phone: { type: 'string', description: 'Checker phone' },
      },
    },
  },
};

const getAllCarCheckSchema = {
  description: 'Get all car checks',
  tags: ['Car Checks'],
  response: {
    200: {
      type: 'array',
      items: CarCheckSchema,
      description: 'List of car checks',
    },
  },
};

const getCarCheckSchema = {
  description: 'Get a car check',
  tags: ['Car Checks'],
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Car check ID (wantToCheckId or checkerId)',
      },
    },
  },
  response: {
    200: CarCheckSchema,
  },
};

const createCarCheckSchema = {
  description: 'Create a new car check',
  tags: ['Car Checks'],
  body: {
    type: 'object',
    properties: {
      brand: { type: 'string', description: 'Car brand' },
      model: { type: 'string', description: 'Car model' },
      town: { type: 'string', description: 'Car town' },
      link: { type: 'string', description: 'Car check link' },
      wantToCheckId: { type: 'string', description: 'Want to check ID' },
      firstName: { type: 'string', description: 'First name' },
      phone: { type: 'string', description: 'Phone number' },
      email: { type: 'string', description: 'Email address' },
    },
    required: [
      'brand',
      'model',
      'town',
      'link',
      'wantToCheckId',
      'firstName',
      'phone',
      'email',
    ],
  },
  response: {
    201: CarCheckSchema,
  },
};

const updateCarCheckSchema = {
  tags: ['Car Checks'],
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Car Check ID (ObjectId)',
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      checker: {
        type: 'object',
        properties: {
          checkerId: { type: 'string', description: 'Checker ID' },
          name: { type: 'string', description: 'Checker name' },
          phone: { type: 'string', description: 'Checker phone number' },
        },
        required: ['checkerId', 'name', 'phone'],
      },
    },
    required: ['checker'],
  },
  response: {
    200: CarCheckSchema,
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

const deleteCarCheckSchema = {
  tags: ['Car Checks'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'Car Check ID' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          description: 'Car check deleted successfully',
        },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Car check not found' },
      },
    },
  },
};

module.exports = {
  CarCheckSchema,
  getAllCarCheckSchema,
  getCarCheckSchema,
  updateCarCheckSchema,
  createCarCheckSchema,
  deleteCarCheckSchema,
};
