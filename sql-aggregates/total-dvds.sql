select count("inventoryId") as "totalDvds"
  from "films"
  join "inventory" using ("filmId")
  join "stores" using ("storeId")
