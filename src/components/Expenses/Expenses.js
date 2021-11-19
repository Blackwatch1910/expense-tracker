import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props) {
    //console.log(props);
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.list[0].title}
        date={props.list[0].date}
        amount={props.list[0].amount}
      />
      <ExpenseItem
        title={props.list[1].title}
        date={props.list[1].date}
        amount={props.list[1].amount}
      />
      <ExpenseItem
        title={props.list[2].title}
        date={props.list[2].date}
        amount={props.list[2].amount}
      />
      <ExpenseItem
        title={props.list[3].title}
        date={props.list[3].date}
        amount={props.list[3].amount}
      />
    </Card>
  );
}

export default Expenses;