const { getEnvConfig } = require("../../utils/index");
const { EnvironmentValues, EnvironmentKeys } = require("../constant");
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
