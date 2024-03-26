import List from './List.jsx'

function App() {
  const fruits = [{id:1, name:"Apple", calories:95},
                        {id:2, name:"Orage", calories:45},
                        {id:3, name:"Banana", calories:105},
                        {id:4, name:"Coconut", calories:159},
                        {id:5, name:"Pineapple", calories:37}];  

  const vegetables = [{id:6, name:"batata", calories:95},
                      {id:7, name:"hakuna", calories:45},
                      {id:8, name:"matata", calories:105},
                      {id:9, name:"Coconut", calories:159},
                      {id:10, name:"Pineapple", calories:37}];  

  return(
    <>
      <List items = {fruits} category="Fruits" />
      <List items = {vegetables} category="Vegetables" />

    </>
  )
}

export default App
