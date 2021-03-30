exports.seed = function (knex) {
  return knex("plants")
    .del()
    .then(function () {
      return knex("plants").insert([
        {
          plant_nickname: "Henrietta",
          plant_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66kBCJQb6rlqtcw5OnJnZbKPsT8e23I-yVg&usqp=CAU",
          plant_diameter: 5,
          plant_species_id: 1,
          plant_h2o_frequency_id: 2,
          user_id: 1,
        },
        {
          plant_nickname: "Pear",
          plant_image:
            "https://cdn.shopify.com/s/files/1/0968/5384/products/3ec32ced-0361-5ad7-a920-28e867d17118_1800x1800.jpg?v=1569270748",
          plant_diameter: 1,
          plant_species_id: 2,
          plant_h2o_frequency_id: 3,
          user_id: 1,
        },
        {
          plant_nickname: "Fruitloop",
          plant_image:
            "https://www.gardenia.net/storage/app/public/uploads/images/detail/jNHWjDt2fLFwiGOT9LLf4tF9t6OvoO5EqNydyvge.jpeg",
          plant_diameter: 3,
          plant_species_id: 3,
          plant_h2o_frequency_id: 3,
          user_id: 2,
        },
        {
          plant_nickname: "Bill",
          plant_image:
            "https://www.thespruce.com/thmb/Of-Qn-UHIXEqr44x3ppLg20Ia60=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/forsythia-bushes-plants-that-herald-spring-2131177-06-555249d55dd3490e9febf095ec322a1f.jpg",
          plant_diameter: 4,
          plant_species_id: 4,
          plant_h2o_frequency_id: 2,
          user_id: 3,
        },
        {
          plant_nickname: "Syrup",
          plant_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66kBCJQb6rlqtcw5OnJnZbKPsT8e23I-yVg&usqp=CAU",
          plant_diameter: 6,
          plant_species_id: 5,
          plant_h2o_frequency_id: 1,
          user_id: 4,
        },
      ]);
    });
};
