import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

import * as C from './styles';

type TableProps = {
  item: Item;
}

export const TableItem = ({ item }: TableProps)=> {
  return(
    <C.TableRow>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>

      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red': 'green'}>

          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.value)}
        
        </C.Value>
      </C.TableColumn>     
    </C.TableRow>
  )
}