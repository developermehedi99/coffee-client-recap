import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCurd from "./components/CoffeeCurd";

function App() {
  const lodedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(lodedCoffees);

  return (
    <>
      <h1 className="text-4xl mb-10 text-green-800">Coffee store</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCurd
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCurd>
        ))}
      </div>
    </>
  );
}

export default App;
