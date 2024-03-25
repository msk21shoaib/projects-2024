import UserGreeting from './UserGreeting.jsx'

function App() {
    return(
      <>                         
        <UserGreeting isLoggedIn={false} />
        <UserGreeting isLoggedIn={true} username="thanks"/>
        <UserGreeting/>
        <UserGreeting/>
        
      </>
    )
}

export default App
