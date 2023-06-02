const UserSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'User ID',
    },
    avatarPath: {
      type: 'string',
      description: 'User avatar path',
    },
    firstName: {
      type: 'string',
      description: 'User first name',
    },
    secondName: {
      type: 'string',
      description: 'User second name',
    },
    dateRegistration: {
      type: 'string',
      format: 'date-time',
      description: 'User registration date',
    },
    email: {
      type: 'string',
      description: 'User email',
    },
    phone: {
      type: 'string',
      description: 'User phone number',
    },
    isAvtovukyp: {
      type: 'boolean',
      description: 'Indicates if the user is an Avtovukyp member',
    },
    isExpert: {
      type: 'boolean',
      description: 'Indicates if the user is an expert',
    },
    password: {
      type: 'string',
      description: 'User password',
    },
  },
};

const createCarSchema = {
  description: 'Create a new car',
  tags: ['Cars'],
  body: {
    type: 'object',
    properties: {
      ownerId: { type: 'string' },
      carPicsPath: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      brand: { type: 'string' },
      model: { type: 'string' },
      price: { type: 'number' },
      volume: { type: 'number' },
      transmission: { type: 'string' },
      color: { type: 'string' },
      year: { type: 'number' },
      town: { type: 'string' },
      odometr: { type: 'number' },
      vincode: { type: 'string' },
      plates: { type: 'string' },
      description: { type: 'string' },
      comments: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isAvtovukypSale: { type: 'boolean' },
      datePublication: { type: 'string', format: 'date-time' },
    },
    required: [
      'ownerId',
      'carPicsPath',
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
      'plates',
      'description',
      'comments',
      'isAvtovukypSale',
      'datePublication',
    ],
  },
  response: {
    201: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        ownerId: { type: 'string' },
        carPicsPath: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        brand: { type: 'string' },
        model: { type: 'string' },
        price: { type: 'number' },
        volume: { type: 'number' },
        transmission: { type: 'string' },
        color: { type: 'string' },
        year: { type: 'number' },
        town: { type: 'string' },
        odometr: { type: 'number' },
        vincode: { type: 'string' },
        plates: { type: 'string' },
        description: { type: 'string' },
        comments: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        isAvtovukypSale: { type: 'boolean' },
        datePublication: { type: 'string', format: 'date-time' },
      },
    },
  },
};

const getAllCarsSchema = {
  description: 'Get all cars',
  tags: ['Cars'],
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          ownerId: { type: 'string' },
          carPicsPath: {
            type: 'array',
            items: { type: 'string' },
          },
          brand: { type: 'string' },
          model: { type: 'string' },
          price: { type: 'number' },
          volume: { type: 'number' },
          transmission: { type: 'string' },
          color: { type: 'string' },
          year: { type: 'number' },
          town: { type: 'string' },
          odometr: { type: 'number' },
          vincode: { type: 'string' },
          plates: { type: 'string' },
          description: { type: 'string' },
          comments: {
            type: 'array',
            items: { type: 'string' },
          },
          isAvtovukypSale: { type: 'boolean' },
          datePublication: { type: 'string', format: 'date-time' },
        },
        required: [
          'id',
          'ownerId',
          'carPicsPath',
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
          'plates',
          'description',
          'comments',
          'isAvtovukypSale',
          'datePublication',
        ],
      },
    },
  },
};

const generateTokenSchema = {
  description: 'Generate token',
  tags: ['Authentication'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'User ID' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'Access token' },
        refreshToken: { type: 'string', description: 'Refresh token' },
      },
    },
  },
};

const UserLoginSchema = {
  tags: ['Authentication'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string', format: 'email', description: 'User email' },
      password: { type: 'string', description: 'User password' },
    },
    required: ['email', 'password'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'JWT token' },
        refreshToken: { type: 'string', description: 'Refresh token' },
      },
    },
    401: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Error message' },
      },
    },
  },
};

const UserSignupSchema = {
  tags: ['Authentication'],
  body: {
    type: 'object',
    properties: {
      avatarPath: { type: 'string', description: 'Avatar path' },
      firstName: { type: 'string', description: 'First name' },
      secondName: { type: 'string', description: 'Second name' },
      email: { type: 'string', format: 'email', description: 'Email address' },
      phone: { type: 'string', description: 'Phone number' },
      isAvtovukyp: {
        type: 'boolean',
        description: 'Indicates if the user is Avtovukyp',
      },
      isExpert: {
        type: 'boolean',
        description: 'Indicates if the user is an expert',
      },
      password: { type: 'string', description: 'Password' },
    },
    required: ['firstName', 'email', 'password'],
  },
  response: {
    201: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const validateTokenSchema = {
  description: 'Validate token',
  tags: ['Authentication'],
  security: [{ bearerAuth: [] }],
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'User name' },
        iat: { type: 'number', description: 'Issued At timestamp' },
      },
    },
  },
};

const refreshTokenSchema = {
  description: 'Refresh token',
  tags: ['Authentication'],
  security: [{ bearerAuth: [] }],
  body: {
    type: 'object',
    properties: {
      refreshToken: { type: 'string', description: 'Refresh token' },
    },
    required: ['refreshToken'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string', description: 'Access token' },
        newRefreshToken: { type: 'string', description: 'New refresh token' },
      },
    },
    401: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'Error message' },
      },
    },
  },
};

const getUserSchema = {
  params: {
    type: 'object',
    properties: {
      email: { type: 'string', description: 'User email' },
    },
  },
  response: {
    200: UserSchema, // Assuming you have already defined UserSchema
    404: {
      type: 'object',
      properties: {
        message: { type: 'string', description: 'User not found' },
      },
    },
  },
};

module.exports = {
  createCarSchema,
  getAllCarsSchema,
  generateTokenSchema,
  validateTokenSchema,
  refreshTokenSchema,
  UserLoginSchema,
  UserSignupSchema,
  getUserSchema,
  UserSchema,
};
