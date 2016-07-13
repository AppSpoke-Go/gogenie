<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$str = '[
  {
    "id": 12312312,
    "name": "Himalaya",
    "distance": 0.5,
    "delivery_fee": "£5",
    "minimum_order": "£25",
    "delivery_time": "10-15",
    "rating": 5.0,
    "restaurant_reviews": 80,
    "restaurant_image": "/wew/ewew.jpg",
    "cuisine": {
      "id": 24324000,
      "type": "Indian"
    },
    "Menus": [
      {
        "id": 234234,
        "name": "Himalaya Special Tandoori Veg Sizzler",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1001,
        "category_name": "Vegetarian Starters",
        "Price" : "£11.95",
        "short_description":"Test description about Himalaya Special Tandoori Veg Sizzler"
      },
      {
        "id": 234235,
        "name": "Veg Spring Rolls",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1001,
        "category_name": "Vegetarian Starters",
        "Price" : "£9.95",
        "short_description":"Test Description about Veg Spring Rolls"
      },
      {
        "id": 234236,
        "name": "Himalaya Veg Platters",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1001,
        "category_name": "Vegetarian Starters",
        "Price" : "£12.95",
        "short_description":"Test Description about Himalaya Veg Platters"
      },
      {
        "id": 234237,
        "name": "Paneer Shashlik",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1001,
        "category_name": "Vegetarian Starters",
        "Price" : "£7.95",
        "short_description":"Test Description about Paneer Shashlik" 
      }
    ]
  },
  {
    "id": 12312313,
    "name": "Willen Tandoori",
    "distance": 1.8,
    "delivery_fee": "£10",
    "minimum_order": "£20",
    "delivery_time": "20-30",
    "rating": 3.5,
    "restaurant_reviews": 100,
    "restaurant_image": "/wew/ewew.jpg",
    "cuisine": {
      "id": 2432401,
      "type": "Chineese"
    },
    "Menus": [
      {
        "id": 234238,
        "name": "King Prawn Delight",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1002,
        "category_name": "Chefs Specials",
        "Price" : "£9.95",
        "short_description":"Grilled king prawns cooked in a creamy spicy sauce"
      },
      {
        "id": 234239,
        "name": "King Prawn Chilli Masala",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1002,
        "category_name": "Chefs Specials",
        "Price" : "£9.95",
        "short_description":"King prawn cooked in a hot masala sauce with green chilies and onion"
      },
      {
        "id": 234240,
        "name": "Chicken Pasanda",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1002,
        "category_name": "Chefs Specials",
        "Price" : "£6.95",
        "short_description":"Chicken fried in butter and tossed in a very mild creamy sauce"
      },
      {
        "id": 234241,
        "name": "Chicken Tikka Masala",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1002,
        "category_name": "Chefs Specials",
        "Price" : "£6.95",
        "short_description":"Tender diced pieces of spring chicken cooked in a mild masala sauce"
      },
      {
        "id": 234141,
        "name": "Chicken Biryani",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1009,
        "category_name": "Biryani Dishes",
        "Price" : "£7.50",
        "short_description":"Cooked with basmati rice and served with vegetable curry"
      }
    ]
  },
   {
    "id": 12312314,
    "name": "Sai Mantra",
    "distance": 1.0,
    "delivery_fee": "£5",
    "minimum_order": "£25",
    "delivery_time": "10-20",
    "rating": 4.5,
    "restaurant_reviews": 70,
    "restaurant_image": "/wew/ewew.jpg",
    "cuisine": {
      "id": 2432400,
      "type": "Indian"
    },
    "Menus": [
      {
        "id": 234242,
        "name": "CHICKEN 65",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1003,
        "category_name": "STARTERS (S.Indian & Srilankan) - Non-Veg",
        "Price" : "£4.99",
        "short_description":"Bone Chicken Marinated With Egg,Gram Flour.Rice Flour.Spices And Deep Fried"
      },
      {
        "id": 23423,
        "name": "MUTTON ROLLS",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1003,
        "category_name": "STARTERS (S.Indian & Srilankan) - Non-Veg",
        "Price" : "£2.99",
        "short_description":"Minced Mutton With Sri Lankan Spices In A Roll Deep Fried With Bread Crumbs"
      },
      {
        "id": 23424,
        "name": "MUTTON MYSORE",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1003,
        "category_name": "STARTERS (S.Indian & Srilankan) - Non-Veg",
        "Price" : "£6.49",
        "short_description":"Boneless Meat Shallow Fried With Onion And Black Pepper"
      },
      {
        "id": 23425,
        "name": "SAI MANTRA FISH FRY",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1003,
        "category_name": "STARTERS (S.Indian & Srilankan) - Non-Veg",
        "Price" : "£5.99",
        "short_description":"Tilapia Fillets Marinated In South Indian Spices With Gram Flour And Fried"
      }
    ]
  },
   {
    "id": 12312315,
    "name": "GoGo Pizza",
    "distance": 2.0,
    "delivery_fee": "£10",
    "minimum_order": "£20",
    "delivery_time": "30-45",
    "rating": 4.0,
    "restaurant_reviews": 10,
    "restaurant_image": "/wew/ewew.jpg",
    "cuisine": {
      "id": 2432403,
      "type": "Italian"
    },
    "Menus": [
      {
        "id": 23426,
        "name": "SWEET LEE",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1004,
        "category_name": "PIZZAS",
        "Price" : "£10.95",
        "short_description":"Sweet chilli base, chicken, bacon, peppers, and pineapple."
      },
      {
        "id": 23427,
        "name": "CHILLI CHAN",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1004,
        "category_name": "PIZZAS",
        "Price" : "£10.95",
        "short_description":"Sweet chilli base, salami, bacon, red peppers, jalapeno peppers."
      },
      {
        "id": 23428,
        "name": "ALLIGATOR",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1004,
        "category_name": "PIZZAS",
        "Price" : "£10.95",
        "short_description":"Pepperoni, Ham, Beef, Bacon, Garlic Sausage & Salami."
      },
      {
        "id": 23429,
        "name": "AMERICAN HOT",
        "menu_image":"/wew/small_image.jpg",
        "category_id": 1004,
        "category_name": "PIZZAS",
        "Price" : "£9.95",
        "short_description":"Pepperoni, onions, chillies & green peppers."
      }
    ]
  }
]';

echo $str;
?>