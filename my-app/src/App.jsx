import Student from './Student.jsx'

function App() {
    return(
      <>                            
        <Student name="Batman" age={30} isStudent={true}/>
        <Student name="Superman" age={25} isStudent={true}/>
        <Student name="Superman" age={25} isStudent={true}/>
        <Student name="Superman" age={25} isStudent={true}/>
        <Student />
      </>
    )
}

export default App
