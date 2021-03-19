const db = require('../../data/dbConfig');

module.exports = {
  insertTask,
  getTask,
  getTaskId,
};

function getTask() {
  return db('tasks');
}

function getTaskId(task_id) {
  return db('tasks').where({ task_id }).first();
}

async function insertTask(task) {
  const [task_id] = await db('tasks').insert(task, ['task_id']);
  return getTaskId(task_id);
}
