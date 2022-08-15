import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantCard from "../components/RestaurantCard";

const yelpAPIKey =
  "i4JPjeg1GLTg51TeDtuGx4ZG_cbHyywscLaoHL-djvHtOq1unDWtVwV6lB8fwFKViyjpIDVUjTqH9q84_GHOG0fxqvHlacro8y3YuycCpgB3qzocAqQ-SYluOq_5YnYx";

export default function Home() {
  const [restaurant, setRestaurant] = useState([]);
  const [city, setCity] = useState("New York City");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${yelpAPIKey}`,
      },
    };

    return await fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurant(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantCard restaurant={restaurant} />
      </ScrollView>
    </SafeAreaView>
  );
}
