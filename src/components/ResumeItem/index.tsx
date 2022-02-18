import * as C from './styles';

type ResumeItemProps = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItem = ({ title, value, color }: ResumeItemProps)=> {
  return(
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(value)}
      </C.Info>
    </C.Container>
  )
}