export function findRestaurant(searchText, restaurants) {
    const data = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
  }

