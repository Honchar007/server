const carActionSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Car Action ID',
    },
    PERSON: {
      type: 'string',
      description: 'Person',
    },
    REG_ADDR_KOATUU: {
      type: 'string',
      description: 'Registration Address KOATUU',
    },
    OPER_CODE: {
      type: 'number',
      description: 'Operation Code',
    },
    OPER_NAME: {
      type: 'string',
      description: 'Operation Name',
    },
    D_REG: {
      type: 'string',
      format: 'date',
      description: 'Registration Date',
    },
    DEP_CODE: {
      type: 'number',
      description: 'Department Code',
    },
    DEP: {
      type: 'string',
      description: 'Department',
    },
    BRAND: {
      type: 'string',
      description: 'Car Brand',
    },
    MODEL: {
      type: 'string',
      description: 'Car Model',
    },
    VIN: {
      type: 'string',
      description: 'Car VIN',
    },
    MAKE_YEAR: {
      type: 'number',
      description: 'Car Manufacturing Year',
    },
    COLOR: {
      type: 'string',
      description: 'Car Color',
    },
    KIND: {
      type: 'string',
      description: 'Car Kind',
    },
    BODY: {
      type: 'string',
      description: 'Car Body Type',
    },
    PURPOSE: {
      type: 'string',
      description: 'Car Purpose',
    },
    FUEL: {
      type: 'string',
      description: 'Fuel Type',
    },
    CAPACITY: {
      type: 'number',
      description: 'Engine Capacity',
    },
    OWN_WEIGHT: {
      type: 'string',
      description: 'Own Weight',
    },
    TOTAL_WEIGHT: {
      type: 'string',
      description: 'Total Weight',
    },
    N_REG_NEW: {
      type: 'string',
      description: 'New Registration Number',
    },
  },
};

const getCarActionByVinSchema = {
  params: {
    type: 'object',
    properties: {
      vin: { type: 'string', description: 'vincode' },
    },
  },
  response: {
    200: {
      type: 'array',
      items: carActionSchema,
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

module.exports = {
  carActionSchema,
  getCarActionByVinSchema,
};
