exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'Mars mission',
          project_description: 'Falcon 9 mission',
          project_completed: false,
        },
        {
          project_name: 'Moon mission',
          project_description: 'quick mission to the moon',
          project_completed: false,
        },
        {
          project_name: 'Jupyter mission',
          project_description: 'another quick mission to Jupyter',
          project_completed: false,
        },
      ]);
    });
};
