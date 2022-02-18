import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { Summary } from './components/Summary';
import { InputArea } from './components/InputArea';


import * as C from './App.style';


const App = ()=> {
  const [listItem, setListItem] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=> {
    setFilteredList(filterListByMonth(listItem, currentMonth));
  }, [listItem, currentMonth]);

  useEffect(()=> {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } 
      else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
    
  }, [filteredList])


  const handleMonthChange = (newMonth: string)=> {
    setCurrentMonth(newMonth);
  } 

  const handleAddItem = (item: Item)=> {
    let newList = [...listItem];
    newList.push(item);
    setListItem(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema financeiro</C.HeaderTitle>
      </C.Header>
      <C.Body>

        {/* Área de informações */}
        <Summary 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Área de inserção */}
        <InputArea onAdd={handleAddItem}/>
        {/* Tabela de itens */}
        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;
