const db = require('../../data/dbConfig');

module.exports = {
  getProjects,
  getProjectId,
  insertProject,
};

function getProjects() {
  return db('projects');
}

function getProjectId(project_id) {
  return db('projects').where({ project_id }).first();
}

async function insertProject(project) {
  const [project_id] = await db('projects').insert(project, ['project_id']);
  return getProjectId(project_id);
}
