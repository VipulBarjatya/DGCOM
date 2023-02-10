import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./components/Homescreen";
import Productscreen from "./components/Productscreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Homescreen} exact />
          <Route path="/product/:id" component={Productscreen} />
          {/* <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
