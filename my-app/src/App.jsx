import UserGreeting from './UserGreeting.jsx'

function App() {
    return(
      <>                         
        <UserGreeting isLoggedIn={true} />
        <UserGreeting isLoggedIn={false} username="Shoaib"/>
        <UserGreeting/>
        
      </>
    )
}

export default App
