select "firstName", "lastName", sum("amount") as "totalRentalCost"
  from "customers"
  join "payments" using ("customerId")
  group by "customers"."customerId"
  order by "totalRentalCost" desc
