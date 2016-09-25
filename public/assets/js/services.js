/* Summary:         Service definitions
*
* Descriptions:     This program provides the Service functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.service('projectApp1', function() {
    
    // Get product list from API
    this.products = function () {

    // step 1
        var data = [
                        {
    "_id" : "57e4a521fd5b6429a7b195f2",
    "id" : 1.0,
    "tmid" : "Tm-1-1520-238-10",
    "description" : "Antenna Cables, Ah-1F, Ah-64A/D, Ch-47D/E, Oh-58A/C/D, And Uh-60A/L/Q/Eh-60A Helicopters.",
    "img" : "1000",
    "branch" : "Air Force",
    "make" : "Robotech",
    "model" : "Veratech",
    "released" : "2016-09-22T00:00:00.000Z",
    "publisher" : "Twenty2ps Labs",
    "version" : "2",
    "modules" : {
        "hours" : 13.0,
        "credits" : 35.0,
        "rating" : "SCI-56",
        "available" : true,
        "type" : "physical simulation"
    },
    "reviews" : [ 
        {
            "rating" : 5.0,
            "score" : 99.0,
            "date" : "2016-09-22T00:00:00.000Z"
        }, 
        {
            "rating" : 4.0,
            "score" : 25.0,
            "date" : "2016-09-20T00:00:00.000Z"
        }, 
        {
            "rating" : 3.0,
            "score" : 35.0,
            "date" : "2016-09-17T00:00:00.000Z"
        }, 
        {
            "rating" : 3.0,
            "score" : 74.0,
            "date" : "2016-09-08T00:00:00.000Z"
        }
    ]
},
                        { 
                            id: 2,
                            img: 'user2',
                            name: 'Amit B Cakes, LLC',
                            phone1: '(305) 555-2345',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 3,
                            img: 'user3',
                            name: 'Joke Factory Group',
                            phone1: '(305) 555-3456',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
        ];

    // step 2
        return data;


    }
});
