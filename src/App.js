import './App.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'

function App() {
  return (
    <>
      {/* this is a react fragment, just a wrapper because every component
    MUST return a single JSX element */}
      <MyNavBar title="Strivestaurant" />
      <ReservationForm />
      <Home name="André" />
    </>
  )
}

export default App
