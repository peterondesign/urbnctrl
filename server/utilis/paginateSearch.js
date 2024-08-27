const { Op } = require("sequelize");

const paginateSearch = async (
  model,
  options = [],
  where = {},
  attributes = {},
  reqQuery = {}
) => {
  const { page = 1, limit = 6, search = "" } = reqQuery;
  const sequelizeOptions = {
    order: [["createdAt", "DESC"]],
  };

  // Apply pagination if 'paginate' is in options
  if (options.includes("paginate")) {
    const size = parseInt(limit);
    const offset = (parseInt(page) - 1) * size;
    sequelizeOptions.limit = size;
    sequelizeOptions.offset = offset;
  }

  // Apply filtering if 'filter' is in options
  const filterOption = options.find(
    (option) => typeof option === "object" && option.filter
  );
  if (filterOption && filterOption.filter.length > 0) {
    sequelizeOptions.where = {
      ...where,
      [Op.and]: [
        where,
        {
          [Op.or]: filterOption.filter.map((key) => ({
            [key]: { [Op.like]: `%${search}%` },
          })),
        },
      ],
    };
  } else {
    sequelizeOptions.where = where;
  }

  // Apply attributes if provided
  if (Object.keys(attributes).length > 0) {
    sequelizeOptions.attributes = attributes;
  }

  try {
    const result = await model.findAndCountAll(sequelizeOptions);

    return {
      totalItems: result.count,
      count: result.rows.length,
      currentPage: parseInt(page),
      data: result.rows,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = paginateSearch;
