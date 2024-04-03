select count("cities"."name") as cities, "countries"."name"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name"
