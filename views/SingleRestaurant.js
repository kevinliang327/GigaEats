import { View, Text } from "react-native";
import React from "react";
import About from "../components/About";
import { Divider } from "react-native-elements";
import FoodCard from "../components/FoodCard";
import ViewCartButton from "../components/ViewCartButton";

const foods = [
  {
    title: "Butter Chicken",
    description: "Boneless chicken cooked with tomato sauce and spices",
    price: "$9.00",
    imageUrl:
      "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-27-683x1024.jpg",
  },
  {
    title: "Volcano Roll",
    description:
      "Smoked salmon, white fish, cheese, kani, manago, scallion, deep fried with special sauce",
    price: "$12.95",
    imageUrl:
      "http://yotsuba-restaurant.com/wp-content/uploads/2015/09/volcano-roll.jpg",
  },
  {
    title: "Avocado Salad",
    description:
      "Avocado, lettuce, tomato, cucumber, onion, seasoned with olive oil and lemon",
    price: "$15.95",
    imageUrl:
      "https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-salad-16-600x900.jpg",
  },
  {
    title: "Cheeseburger",
    description:
      "American-style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun.",
    price: "$21.50",
    imageUrl:
      "https://dynl.mktgcdn.com/p/2oq-YYPAxuHqBnw5SF-mNZvh1zeg_9WBdpAC_ctgq8U/450x450.jpg",
  },
  {
    title: "Ribeye",
    description:
      "Well-marbled, juicy and savory. Seasoned and seared. Served with two freshly made sides.",
    price: "$27.48",
    imageUrl:
      "https://thecozyapron.com/wp-content/uploads/2022/05/cowboy-ribeye_thecozyapron_01.jpg",
  },
  {
    title: "Crepe",
    description: "Strawberry, banana, nutella, and powdered sugar.",
    price: "$12.00",
    imageUrl:
      "https://bellyfull.net/wp-content/uploads/2021/07/Banana-Nutella-Crepes-blog-5-640x853.jpg",
  },
  {
    title: "Coke",
    description: "12 oz. can",
    price: "$1.50",
    imageUrl:
      "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coca-cola-original/desktop/coca-cola-original-12oz.jpg",
  },
];

export default function SingleRestaurant({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <FoodCard foods={foods} restaurantName={route.params.name} />
      <ViewCartButton navigation={navigation} />
    </View>
  );
}
