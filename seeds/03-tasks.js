exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: 'hire the best engineers',
          task_notes: 'No notes at the moment',
          task_completed: true,
          project_id: 1,
        },
        {
          task_description: 'Build more Elon Musks',
          task_notes: 'Build AI Elons',
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: 'Build 10 reusable rockets',
          task_notes: 'No notes at the moment',
          task_completed: false,
          project_id: 3,
        },
      ]);
    });
};
