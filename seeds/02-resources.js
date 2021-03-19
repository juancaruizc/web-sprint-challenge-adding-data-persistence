exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'Rocket ship',
          resource_description: 'billion dollar rocket ship',
        },
        {
          resource_name: 'Elon Musk',
          resource_description: 'Elon is the best resource on earth',
        },
        {
          resource_name: 'Big Turbo',
          resource_description: 'We need a big turbo for this ship!',
        },
      ]);
    });
};
