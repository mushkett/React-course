import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {title: "1 Item", date: new Date(2022, 11, 15), amount: 225.13},
    {title: "2 Item", date: new Date(2022, 5, 22), amount: 123.13},
    {title: "3 Item", date: new Date(2022, 3, 13), amount: 664.22},
    {title: "4 Item", date: new Date(2021, 4, 12), amount: 124.20},
    {title: "5 Item", date: new Date(2020, 2, 17), amount: 251.40}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
