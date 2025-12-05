import {RecoilRoot, useRecoilValue} from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {

  return <RecoilRoot>
    <Todo id={1}/>
    <br />
    <Todo id={2}/>
  </RecoilRoot>
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div> 
      {currentTodo.title}
      <br />
      {currentTodo.description}
      
    </div>
  )
}

export default App;