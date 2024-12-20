const StatusCodes = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_REQUEST: 422,
  RESOURCE_LOCKED: 423,
  INTERNAL_SERVER_ERROR: 500,
};

const EnvironmentKeys = ["MongoUri", "Port"];
const EnvironmentValues = ["MONGO_URL", "PORT"];

module.exports = { StatusCodes, EnvironmentKeys, EnvironmentValues };
