import './styles/styles.css'


function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <select name="selectExpense" id="selectExpense">
        <option value="">Housing</option>
        <option>Food</option>
        <option>Transportation</option>
        <option>Utilities</option>
        <option>Insurance</option>
        <option>Savings</option>
        <option>Personal Spending</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export default App;