use("restcountries");
db.countrie.find(
  { "name.common": "Liberia" },
  { _id: 1, "name.common": 1, capital: 1 }
);
