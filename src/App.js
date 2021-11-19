import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 0,
      title: "BMW",
      date: new Date(2021, 11, 10),
      amount: 1000,
    },
    {
      id: 1,
      title: "Audi",
      date: new Date(2020, 7, 19),
      amount: 2000,
    },
    {
      id: 2,
      title: "Benz",
      date: new Date(2021, 1, 10),
      amount: 3000,
    },
    {
      id: 3,
      title: "Mustang",
      date: new Date(2021, 10, 8),
      amount: 5000,
    },
  ];

  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses list={expenses} />
    </div>
  );
}

export default App;
