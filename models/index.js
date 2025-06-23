import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import configFile from '../config/config.js';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== basename);

for (const file of modelFiles) {
  const modelPath = path.join(__dirname, file);
  const model = await import(pathToFileURL(modelPath).href);
  const modelDef = model.default(sequelize, Sequelize.DataTypes);
  db[modelDef.name] = modelDef;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
