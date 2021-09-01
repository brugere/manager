import includes from 'lodash/includes';
import { DATABASE_TYPES } from './databases.constants';

const features = {
  databaseTab: [], // Empty for now, will be activated with GA
  forkFromBackup: [DATABASE_TYPES.MONGO_DB],
  forkFromGeneralInformation: [
    DATABASE_TYPES.MYSQL,
    DATABASE_TYPES.POSTGRESQL,
    DATABASE_TYPES.REDIS,
  ],
  replicas: [DATABASE_TYPES.MYSQL, DATABASE_TYPES.POSTGRESQL],
  certificate: [
    DATABASE_TYPES.MYSQL,
    DATABASE_TYPES.POSTGRESQL,
    DATABASE_TYPES.KAFKA,
  ],
  replicateURI: [
    DATABASE_TYPES.MONGO_DB,
    DATABASE_TYPES.MYSQL,
    DATABASE_TYPES.POSTGRESQL,
    DATABASE_TYPES.REDIS,
  ],
  usersTab: [
    DATABASE_TYPES.MONGO_DB,
    DATABASE_TYPES.MYSQL,
    DATABASE_TYPES.POSTGRESQL,
    DATABASE_TYPES.REDIS,
  ],
  backupTab: [
    DATABASE_TYPES.MONGO_DB,
    DATABASE_TYPES.MYSQL,
    DATABASE_TYPES.POSTGRESQL,
    DATABASE_TYPES.REDIS,
  ],
};

export default function isFeatureActivated(feature, databaseType) {
  return includes(features[feature], databaseType);
}