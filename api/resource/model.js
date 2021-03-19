const db = require('../../data/dbConfig');

module.exports = {
  insertResource,
  getResources,
  getResourceId,
};

function getResources() {
  return db('resources');
}

function getResourceId(resource_id) {
  return db('resources').where({ resource_id }).first();
}

async function insertResource(resource) {
  const [resource_id] = await db('resources').insert(resource, ['resource_id']);
  return getResourceId(resource_id);
}
