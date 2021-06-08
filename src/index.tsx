import ReactDOM from 'react-dom'
import Parent from './props/Parent'
import GuestList from './state/GuestList'


const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))