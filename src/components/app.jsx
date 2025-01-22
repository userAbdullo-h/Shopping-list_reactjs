import Filter from './filter'
import Information from './information'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

function App() {

  const data = [
    {
      id: 1,
      size: 14,
      title: 'Buy bananas',
      active: false
    },
    {
      id: 2,
      size: 10,
      title: 'Buy apples',
      active: true
    },
    {
      id: 3,
      size: 8,
      title: 'Buy milk',
      active: false
    },
  ]
  return (
    <div className='app'>
      <div className="wrapper">
        <div className="card">
          <Information/>

          <ShoppingAddForm/>

          <ShoppingList data={data} />

          <Filter/>
        </div>
        <img src="/public/earth.svg" alt="earthPhoto" />
      </div>
    </div>
  )
}

export default App
