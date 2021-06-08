import { Child, ChildEx2 } from './Child'

const Parent = () => {



  return (
    <div>
      <Child color='farted' onClick={() => console.log('ligma')}/>
      <ChildEx2 color='pooped' onClick={() => console.log('balls')}>
        goose shit<br/>
      </ChildEx2>
      
    </div>
  )
}

export default Parent;