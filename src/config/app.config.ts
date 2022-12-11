export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3002,
  // we are casting the validation (joi) default to number with '+'
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});
