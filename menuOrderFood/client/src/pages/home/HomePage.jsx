import { useMemo, useState } from "react";
import { Footer } from "../../components";
import DefaultLayout from "../../layouts/DefaultLayout";
import CategoryItem from "./CategoryItem";
import MenuItem from "./MenuItem";
const HomePage = () => {
  const [action, setAction] = useState("All");

  const handleClick = (type) => {
    setAction(type);
  };
  const dataCategories = [
    { id: 1, name: "All" },
    { id: 2, name: "sushi" },
    { id: 3, name: "pizza" },
    { id: 4, name: "burger" },
    { id: 5, name: "drink" },
    { id: 6, name: "order" },
  ];

  const foodItems = [
    {
      id: 1,
      name: "sushi",
      children: [
        {
          id: 1,
          name: "Salmon Sushi",
          price: 12,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 2,
          name: "Tuna Sushi",
          price: 15,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 3,
          name: "Eel Sushi",
          price: 18,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "pizza",
      children: [
        {
          id: 1,
          name: "Margherita",
          price: 10,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 2,
          name: "Pepperoni",
          price: 14,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 3,
          name: "BBQ Chicken",
          price: 16,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "burger",
      childrenr: [
        {
          id: 1,
          name: "Cheeseburger",
          price: 8,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 2,
          name: "Bacon Burger",
          price: 10,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 3,
          name: "Veggie Burger",
          price: 9,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "drink",
      children: [
        {
          id: 1,
          name: "Coca Cola",
          price: 3,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 2,
          name: "Orange Juice",
          price: 4,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
        {
          id: 3,
          name: "Water",
          price: 2,
          image:
            "https://i.pinimg.com/564x/b6/ff/6f/b6ff6f1069bdb3ec62a6e40a7177a397.jpg",
        },
      ],
    },
  ];

  const getData = useMemo(() => {
    if (foodItems?.length > 0) {
      const filterData = foodItems.filter((item) => item.name === action);
      if (filterData.length > 0) {
        return filterData[0].children;
      }
    }
  }, [foodItems, action]);

  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex sticky top-2 p-3 bg-white z-10 items-center gap-4 mt-4 overflow-scroll">
          {dataCategories.map((item) => (
            <CategoryItem
              action={action}
              onChange={handleClick}
              key={item.id}
              data={item}
            />
          ))}
        </div>

        {/* Các món ăn */}

        <div className="flex flex-wrap gap-4 overflow-scroll w-full mt-3">
          {getData?.length > 0 &&
            getData?.map((item) => <MenuItem {...item} key={item.id} />)}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
