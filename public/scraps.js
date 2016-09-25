{ user: "<name>",
  pwd: "<cleartext password>",
  customData: { <any information> },
  roles: [
    { role: "<role>", db: "<database>" } | "<role>",
    ...
  ]
}
      
db.createUser({ user: "root",
  pwd: "00000000",
     roles: [ { role: "clusterAdmin", db: "admin" },
              { role: "readAnyDatabase", db: "admin" },
              "readWrite"] },
   { w: "majority" , wtimeout: 5000 })
//
db.products.insert({

"id" : 1.0,
"tmid" : "Tm-1-1520-238-10",
"description" : "Antenna Cables, Ah-1F, Ah-64A/D, Ch-47D/E, Oh-58A/C/D, And Uh-60A/L/Q/Eh-60A Helicopters.",
"img" : "1000",
"branch" : "Air Force",
"make" : "Verateck",
"model" : "Robotech",
"released" : ISODate("2016-09-22T00:00:00.000Z"),
"publisher" : "Twenty2ps Labs",
"version" : "2",
"modules" : {
"hours" : 13.0,
"credits" : 35.0,
"clearance" : "SCI-56",
"available" : true,
"type" : "physical simulation"
},
"reviews" : [ 
{
"rating" : 5.0,
"score" : 99.0,
"date" : ISODate("2016-09-22T00:00:00.000Z")
}, 
{
"rating" : 4.0,
"score" : 25.0,
"date" : ISODate("2016-09-20T00:00:00.000Z")
}, 
{
"rating" : 3.0,
"score" : 35.0,
"date" : ISODate("2016-09-17T00:00:00.000Z")
}, 
{
"rating" : 3.0,
"score" : 74.0,
"date" : ISODate("2016-09-08T00:00:00.000Z")
}
]
}