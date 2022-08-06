
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

// page & layout imports
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import SiteHeader from './components/SiteHeader'
import Footer from './components/Footer'

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
      <div className="App">
        <SiteHeader />
        <Routes>
        <Route path="/" element ={<Homepage />} />
          <Route path="/details/:id" element={<ReviewDetails />}  />
        </Routes>
        </div>
      </ApolloProvider>
      <Footer/>
    </Router> 
  );
}

export default App