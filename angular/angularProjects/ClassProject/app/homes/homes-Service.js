(function() {
    'use strict';

    angular
        .module('googleMaps')
        .factory('homesFactory', homesFactory);


    function homesFactory() {
        var homesFactory = {};

        var homes;

        homesFactory.getXlistings = function(currentPage, howMany) {
            let obj = Object.assign([], homes);
            let homestoreturn = obj.slice(currentPage * howMany, currentPage * howMany + howMany);
            return homestoreturn;
        };

        homesFactory.addHome = function(home) {
            if (!home) {
                return;
            }
            return homes.push(home)
        }

        homesFactory.remove = function(home) {
            if (!home) {
                return;
            }
            return homes.splice(home, 1)
        }

        homesFactory.initMap = function(homes) {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: { lat: parseInt(homes[0].latitude), lng: parseInt(homes[0].longitude) }
            });
            for (var mark of homes) {
                var marker = new google.maps.Marker({
                    position: { lat: parseInt(mark.latitude), lng: parseInt(mark.longitude) },
                    map: map
                });
            }
        }

        homes = [{
            "ownerId": 1,
            "price": 4286,
            "Rooms": 3,
            "latitude": 38.6273566,
            "longitude": -9.123079,
            "description": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est"
        }, {
            "ownerId": 2,
            "price": 4215,
            "Rooms": 4,
            "latitude": 57.6938555,
            "longitude": 11.9704401,
            "description": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper"
        }, {
            "ownerId": 3,
            "price": 1732,
            "Rooms": 4,
            "latitude": 53.3870149,
            "longitude": -6.2057463,
            "description": "sit amet eros suspendisse accumsan tortor quis turpis sed ante"
        }, {
            "ownerId": 4,
            "price": 2338,
            "Rooms": 3,
            "latitude": -22.027222,
            "longitude": -42.3652391,
            "description": "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet"
        }, {
            "ownerId": 5,
            "price": 4794,
            "Rooms": 1,
            "latitude": 28.693048,
            "longitude": 107.345882,
            "description": "quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem"
        }, {
            "ownerId": 6,
            "price": 4027,
            "Rooms": 5,
            "latitude": 18.6389698,
            "longitude": -74.1181234,
            "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id"
        }, {
            "ownerId": 7,
            "price": 1909,
            "Rooms": 3,
            "latitude": -16.2494365,
            "longitude": -69.0880819,
            "description": "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor"
        }, {
            "ownerId": 8,
            "price": 3624,
            "Rooms": 3,
            "latitude": 15.3097361,
            "longitude": 120.8940375,
            "description": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam"
        }, {
            "ownerId": 9,
            "price": 1791,
            "Rooms": 4,
            "latitude": 37.78,
            "longitude": -122.42,
            "description": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem"
        }, {
            "ownerId": 10,
            "price": 2462,
            "Rooms": 2,
            "latitude": 49.3909134,
            "longitude": 30.1988199,
            "description": "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget"
        }, {
            "ownerId": 11,
            "price": 1989,
            "Rooms": 5,
            "latitude": 13.5368344,
            "longitude": 99.8276962,
            "description": "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh"
        }, {
            "ownerId": 12,
            "price": 3047,
            "Rooms": 5,
            "latitude": 51.8925044,
            "longitude": 18.4962253,
            "description": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus"
        }, {
            "ownerId": 13,
            "price": 2633,
            "Rooms": 5,
            "latitude": 40.06165,
            "longitude": 43.9852874,
            "description": "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget"
        }, {
            "ownerId": 14,
            "price": 4661,
            "Rooms": 4,
            "latitude": 27.568278,
            "longitude": 117.562238,
            "description": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper"
        }, {
            "ownerId": 15,
            "price": 1710,
            "Rooms": 2,
            "latitude": 38.7336567,
            "longitude": -9.268126,
            "description": "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus"
        }, {
            "ownerId": 16,
            "price": 3481,
            "Rooms": 4,
            "latitude": 9.4779595,
            "longitude": -82.5943072,
            "description": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"
        }, {
            "ownerId": 17,
            "price": 2504,
            "Rooms": 3,
            "latitude": 38.828834,
            "longitude": 139.9059015,
            "description": "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis"
        }, {
            "ownerId": 18,
            "price": 2931,
            "Rooms": 1,
            "latitude": 26.433417,
            "longitude": 110.856622,
            "description": "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non"
        }, {
            "ownerId": 19,
            "price": 1801,
            "Rooms": 2,
            "latitude": -6.4024844,
            "longitude": 106.7942405,
            "description": "nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi"
        }, {
            "ownerId": 20,
            "price": 2042,
            "Rooms": 4,
            "latitude": 43.2467751,
            "longitude": 26.5761136,
            "description": "odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper"
        }, {
            "ownerId": 21,
            "price": 1562,
            "Rooms": 1,
            "latitude": 29.000347,
            "longitude": 101.507294,
            "description": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse"
        }, {
            "ownerId": 22,
            "price": 3475,
            "Rooms": 3,
            "latitude": 44.8568897,
            "longitude": 38.6720778,
            "description": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut"
        }, {
            "ownerId": 23,
            "price": 4434,
            "Rooms": 4,
            "latitude": 48.8373554,
            "longitude": 2.2682399,
            "description": "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit"
        }, {
            "ownerId": 24,
            "price": 2809,
            "Rooms": 1,
            "latitude": 46.9874505,
            "longitude": 3.1506645,
            "description": "sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu"
        }, {
            "ownerId": 25,
            "price": 3429,
            "Rooms": 3,
            "latitude": -9.7239549,
            "longitude": 124.272721,
            "description": "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit"
        }, {
            "ownerId": 26,
            "price": 3091,
            "Rooms": 4,
            "latitude": 11.565435,
            "longitude": -85.9917437,
            "description": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla"
        }, {
            "ownerId": 27,
            "price": 2277,
            "Rooms": 3,
            "latitude": -34.1691251,
            "longitude": -70.7169851,
            "description": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus"
        }, {
            "ownerId": 28,
            "price": 3916,
            "Rooms": 5,
            "latitude": -33.3306976,
            "longitude": 22.5345667,
            "description": "quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu"
        }, {
            "ownerId": 29,
            "price": 2874,
            "Rooms": 4,
            "latitude": 14.1762086,
            "longitude": -90.2625604,
            "description": "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a"
        }, {
            "ownerId": 30,
            "price": 1693,
            "Rooms": 5,
            "latitude": -8.5803424,
            "longitude": 116.3654707,
            "description": "nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam"
        }, {
            "ownerId": 31,
            "price": 2047,
            "Rooms": 1,
            "latitude": 7.7102381,
            "longitude": 3.9190062,
            "description": "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue"
        }, {
            "ownerId": 32,
            "price": 4162,
            "Rooms": 3,
            "latitude": -6.1718076,
            "longitude": 106.8488128,
            "description": "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu"
        }, {
            "ownerId": 33,
            "price": 4740,
            "Rooms": 4,
            "latitude": 14.3160322,
            "longitude": 121.0671937,
            "description": "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea"
        }, {
            "ownerId": 34,
            "price": 2415,
            "Rooms": 4,
            "latitude": 57.0384344,
            "longitude": 54.0037032,
            "description": "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum"
        }, {
            "ownerId": 35,
            "price": 2473,
            "Rooms": 4,
            "latitude": 51.1347637,
            "longitude": 133.0393804,
            "description": "mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla"
        }, {
            "ownerId": 36,
            "price": 3948,
            "Rooms": 4,
            "latitude": 22.5408317,
            "longitude": -73.8948295,
            "description": "justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi"
        }, {
            "ownerId": 37,
            "price": 4839,
            "Rooms": 2,
            "latitude": 55.086808,
            "longitude": 60.143301,
            "description": "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat"
        }, {
            "ownerId": 38,
            "price": 4494,
            "Rooms": 2,
            "latitude": 54.126654,
            "longitude": 22.3618689,
            "description": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam"
        }, {
            "ownerId": 39,
            "price": 1562,
            "Rooms": 2,
            "latitude": 30.920219,
            "longitude": 103.620536,
            "description": "bibendum felis sed interdum venenatis turpis enim blandit mi in"
        }, {
            "ownerId": 40,
            "price": 3127,
            "Rooms": 3,
            "latitude": 41.0289533,
            "longitude": 71.845274,
            "description": "semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed"
        }, {
            "ownerId": 41,
            "price": 3318,
            "Rooms": 4,
            "latitude": 42.901533,
            "longitude": 125.136451,
            "description": "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim"
        }, {
            "ownerId": 42,
            "price": 4609,
            "Rooms": 3,
            "latitude": 55.8951461,
            "longitude": 21.2626042,
            "description": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi"
        }, {
            "ownerId": 43,
            "price": 2696,
            "Rooms": 1,
            "latitude": -21.2370782,
            "longitude": -45.7592067,
            "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam"
        }, {
            "ownerId": 44,
            "price": 3231,
            "Rooms": 2,
            "latitude": 49.395599,
            "longitude": 2.789137,
            "description": "lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat"
        }, {
            "ownerId": 45,
            "price": 2748,
            "Rooms": 1,
            "latitude": 34.1009765,
            "longitude": 114.2138957,
            "description": "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla"
        }, {
            "ownerId": 46,
            "price": 3464,
            "Rooms": 1,
            "latitude": 27.5502358,
            "longitude": 30.8077635,
            "description": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula"
        }, {
            "ownerId": 47,
            "price": 3471,
            "Rooms": 2,
            "latitude": 24.629264,
            "longitude": 118.041444,
            "description": "morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo"
        }, {
            "ownerId": 48,
            "price": 1985,
            "Rooms": 5,
            "latitude": 78.221061,
            "longitude": 15.6469321,
            "description": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique"
        }, {
            "ownerId": 49,
            "price": 4876,
            "Rooms": 2,
            "latitude": 40.336837,
            "longitude": -7.8256005,
            "description": "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer"
        }, {
            "ownerId": 50,
            "price": 4291,
            "Rooms": 2,
            "latitude": 21.31,
            "longitude": -157.86,
            "description": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat"
        }, {
            "ownerId": 51,
            "price": 3011,
            "Rooms": 2,
            "latitude": 59.3405742,
            "longitude": 18.0667759,
            "description": "tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh"
        }, {
            "ownerId": 52,
            "price": 1719,
            "Rooms": 3,
            "latitude": 33.207199,
            "longitude": -87.5482025,
            "description": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce"
        }, {
            "ownerId": 53,
            "price": 1612,
            "Rooms": 5,
            "latitude": -23.3196141,
            "longitude": 17.0893798,
            "description": "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus"
        }, {
            "ownerId": 54,
            "price": 4629,
            "Rooms": 1,
            "latitude": 40.417358,
            "longitude": 117.500558,
            "description": "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc"
        }, {
            "ownerId": 55,
            "price": 3065,
            "Rooms": 2,
            "latitude": -11.4840463,
            "longitude": -37.9321875,
            "description": "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim"
        }, {
            "ownerId": 56,
            "price": 2469,
            "Rooms": 1,
            "latitude": 36.684789,
            "longitude": 118.479654,
            "description": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum"
        }, {
            "ownerId": 57,
            "price": 1962,
            "Rooms": 3,
            "latitude": "52.6551",
            "longitude": "85.09858",
            "description": "mi sit amet lobortis sapien sapien non mi integer ac neque duis"
        }, {
            "ownerId": 58,
            "price": 2985,
            "Rooms": 3,
            "latitude": -7.7351493,
            "longitude": 110.7092666,
            "description": "et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum"
        }, {
            "ownerId": 59,
            "price": 2759,
            "Rooms": 1,
            "latitude": 39.0961273,
            "longitude": -9.2729402,
            "description": "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit"
        }, {
            "ownerId": 60,
            "price": 4827,
            "Rooms": 4,
            "latitude": 36.1857974,
            "longitude": -79.8184684,
            "description": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus"
        }, {
            "ownerId": 61,
            "price": 4192,
            "Rooms": 2,
            "latitude": 20.7526658,
            "longitude": 106.6718702,
            "description": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        }, {
            "ownerId": 62,
            "price": 2306,
            "Rooms": 4,
            "latitude": 14.1148241,
            "longitude": -87.1098612,
            "description": "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in"
        }, {
            "ownerId": 63,
            "price": 4333,
            "Rooms": 3,
            "latitude": 59.3343961,
            "longitude": 18.0257303,
            "description": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor"
        }, {
            "ownerId": 64,
            "price": 4044,
            "Rooms": 5,
            "latitude": 39.9459413,
            "longitude": 116.3817634,
            "description": "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
        }, {
            "ownerId": 65,
            "price": 3473,
            "Rooms": 2,
            "latitude": -7.7276103,
            "longitude": 110.8582722,
            "description": "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget"
        }, {
            "ownerId": 66,
            "price": 3452,
            "Rooms": 1,
            "latitude": 14.6291868,
            "longitude": 121.0893745,
            "description": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc"
        }, {
            "ownerId": 67,
            "price": 2630,
            "Rooms": 5,
            "latitude": 13.8811133,
            "longitude": 123.6886104,
            "description": "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis"
        }, {
            "ownerId": 68,
            "price": 4725,
            "Rooms": 4,
            "latitude": -8.1475732,
            "longitude": 112.718192,
            "description": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus"
        }, {
            "ownerId": 69,
            "price": 4596,
            "Rooms": 4,
            "latitude": 28.7401,
            "longitude": 118.793215,
            "description": "rutrum neque aenean auctor gravida sem praesent id massa id"
        }, {
            "ownerId": 70,
            "price": 4757,
            "Rooms": 2,
            "latitude": -23.062277,
            "longitude": -54.1999693,
            "description": "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est"
        }, {
            "ownerId": 71,
            "price": 3573,
            "Rooms": 1,
            "latitude": 58.8578776,
            "longitude": 14.2134536,
            "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        }, {
            "ownerId": 72,
            "price": 2335,
            "Rooms": 3,
            "latitude": 39.9041999,
            "longitude": 116.4073963,
            "description": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque"
        }, {
            "ownerId": 73,
            "price": 2953,
            "Rooms": 2,
            "latitude": -43.2643313,
            "longitude": -65.3506508,
            "description": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient"
        }, {
            "ownerId": 74,
            "price": 2242,
            "Rooms": 2,
            "latitude": 23.636404,
            "longitude": 111.658698,
            "description": "luctus rutrum nulla tellus in sagittis dui vel nisl duis"
        }, {
            "ownerId": 75,
            "price": 3216,
            "Rooms": 2,
            "latitude": 19.3803931,
            "longitude": -99.1476908,
            "description": "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris"
        }, {
            "ownerId": 76,
            "price": 2735,
            "Rooms": 5,
            "latitude": 49.7365816,
            "longitude": 19.4856654,
            "description": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec"
        }, {
            "ownerId": 77,
            "price": 3898,
            "Rooms": 5,
            "latitude": 38.3080648,
            "longitude": 23.6391172,
            "description": "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim"
        }, {
            "ownerId": 78,
            "price": 4227,
            "Rooms": 3,
            "latitude": -36.5951114,
            "longitude": -61.7625424,
            "description": "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue"
        }, {
            "ownerId": 79,
            "price": 2988,
            "Rooms": 5,
            "latitude": 48.9420658,
            "longitude": 25.7464148,
            "description": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit"
        }, {
            "ownerId": 80,
            "price": 1524,
            "Rooms": 3,
            "latitude": 46.7306768,
            "longitude": 29.9803379,
            "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat"
        }, {
            "ownerId": 81,
            "price": 2903,
            "Rooms": 3,
            "latitude": 52.339987,
            "longitude": 20.3286222,
            "description": "nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a"
        }, {
            "ownerId": 82,
            "price": 2532,
            "Rooms": 5,
            "latitude": 45.416456,
            "longitude": -73.9160797,
            "description": "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla"
        }, {
            "ownerId": 83,
            "price": 4794,
            "Rooms": 2,
            "latitude": 30.823054,
            "longitude": 110.973252,
            "description": "tristique est et tempus semper est quam pharetra magna ac consequat"
        }, {
            "ownerId": 84,
            "price": 4829,
            "Rooms": 1,
            "latitude": 16.5211599,
            "longitude": -88.3712796,
            "description": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam"
        }, {
            "ownerId": 85,
            "price": 3487,
            "Rooms": 5,
            "latitude": 26.312444,
            "longitude": 99.850365,
            "description": "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh"
        }, {
            "ownerId": 86,
            "price": 4877,
            "Rooms": 2,
            "latitude": 49.1063903,
            "longitude": 17.164335,
            "description": "rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non"
        }, {
            "ownerId": 87,
            "price": 4790,
            "Rooms": 3,
            "latitude": 42.5043656,
            "longitude": 24.7062087,
            "description": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci"
        }, {
            "ownerId": 88,
            "price": 3126,
            "Rooms": 3,
            "latitude": 41.0924881,
            "longitude": -73.4239143,
            "description": "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit"
        }, {
            "ownerId": 89,
            "price": 3330,
            "Rooms": 3,
            "latitude": 29.9919028,
            "longitude": -90.0795843,
            "description": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque"
        }, {
            "ownerId": 90,
            "price": 3480,
            "Rooms": 3,
            "latitude": 21.912701,
            "longitude": 111.902604,
            "description": "et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in"
        }, {
            "ownerId": 91,
            "price": 4743,
            "Rooms": 1,
            "latitude": 50.4225,
            "longitude": 104.1075,
            "description": "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in"
        }, {
            "ownerId": 92,
            "price": 2201,
            "Rooms": 5,
            "latitude": 45.0486976,
            "longitude": 16.3746171,
            "description": "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut"
        }, {
            "ownerId": 93,
            "price": 3572,
            "Rooms": 2,
            "latitude": -8.0614295,
            "longitude": 112.3546395,
            "description": "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes"
        }, {
            "ownerId": 94,
            "price": 2655,
            "Rooms": 1,
            "latitude": 35.709077,
            "longitude": 107.643631,
            "description": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla"
        }, {
            "ownerId": 95,
            "price": 4045,
            "Rooms": 3,
            "latitude": 42.6997116,
            "longitude": 23.2730306,
            "description": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl"
        }, {
            "ownerId": 96,
            "price": 1889,
            "Rooms": 4,
            "latitude": -13.1638737,
            "longitude": -74.2235641,
            "description": "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id"
        }, {
            "ownerId": 97,
            "price": 2288,
            "Rooms": 1,
            "latitude": 38.5434693,
            "longitude": -9.0610972,
            "description": "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat"
        }, {
            "ownerId": 98,
            "price": 4370,
            "Rooms": 2,
            "latitude": 40.9303746,
            "longitude": -8.4777484,
            "description": "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing"
        }, {
            "ownerId": 99,
            "price": 4073,
            "Rooms": 3,
            "latitude": 37.6533531,
            "longitude": 138.9099913,
            "description": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa"
        }, {
            "ownerId": 100,
            "price": 4011,
            "Rooms": 1,
            "latitude": 16.2676129,
            "longitude": -61.527249,
            "description": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam"
        }];


        return homesFactory;
    }
})();