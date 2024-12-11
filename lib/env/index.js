const { getEnvConfig } = require("../../utils/index");
/**
 * @typedef {Record<"MongoUri" | "Port", string>} EnvMapper
 */
/**
 * @type {EnvMapper}
 *  create env configuration mapper
 */
const EnvironmentMapper = EnvironmentValues.reduce(
  (acc, curr, index) => ({
    ...acc,
    [EnvironmentKeys[index]]: getEnvConfig(curr),
  }),
  {}
);

module.exports = EnvironmentMapper;
