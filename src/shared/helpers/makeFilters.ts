interface Query {
  brand?: { $regex: string; $options: string };
  model?: any,
  $or?: any,
  fuel?: any,
  transmission?: any,
  year?: any,
  odometr?: any,
  price?: any,
}

const makeFilters = (queryParams: { [key: string]: string}) => {
  console.log(queryParams);
  const {
    search,
    brand,
    model,
    minYear,
    maxYear,
    minPrice,
    maxPrice,
    minOdo,
    maxOdo,
    fuel,
    transmission,
  } = queryParams;
  const query: Query = {};

  if (brand) {
    query.brand = { $regex: brand, $options: 'i' };
  }

  if (model) {
    query.model = { $regex: model, $options: 'i' };
  }

  if (search) {
    query.$or = [
      { model: { $regex: search, $options: 'i' } },
      { brand: { $regex: search, $options: 'i' } },
    ];
  }

  if (fuel) {
    query.fuel = { $regex: fuel, $options: 'i' };
  }

  if (transmission) {
    query.transmission = { $regex: transmission, $options: 'i' };
  }

  if (minYear || maxYear) {
    query.year = {};
    if (minYear) {
      query.year.$gte = parseInt(minYear);
    }
    if (maxYear) {
      query.year.$lte = parseInt(maxYear);
    }
  }

  if (minOdo || maxOdo) {
    query.odometr = {};
    if (minOdo) {
      query.odometr.$gte = parseInt(minOdo);
    }
    if (maxOdo) {
      query.odometr.$lte = parseInt(maxOdo);
    }
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) {
      query.price.$gte = parseInt(minPrice);
    }
    if (maxPrice) {
      query.price.$lte = parseInt(maxPrice);
    }
  }

  return query;
};

module.exports = makeFilters;
