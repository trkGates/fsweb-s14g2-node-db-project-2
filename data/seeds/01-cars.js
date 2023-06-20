exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "11111111111111111",
          make: "toyota",
          model: "prius",
          mileage: 250000,
          title: "salvage",
          transmission: "CVT",
        },
        {
          vin: "22222222222222222",
          make: "ford",
          model: "mustang",
          mileage: 120000,
          title: "clean",
          transmission: "manual",
        },
        {
          vin: "33333333333333333",
          make: "honda",
          model: "accord",
          mileage: 220000,
          title: "clean",
          transmission: "automatic",
        },
      ]);
    });
};
