import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";

//components
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header className="header">
          <MenuTop />
        </Header>
        <Content style={{minHeight:'fit-content'}}>
          <Switch>
            <Route exact={true} path="Movies-proyect-ADA/" component={Home} />
            <Route exact={true} path="Movies-proyect-ADA/new-movies" component={NewMovies} />
            <Route exact={true} path="Movies-proyect-ADA/popular" component={Popular} />
            <Route exact={true} path="Movies-proyect-ADA/search" component={Search} />
            <Route exact={true} path="Movies-proyect-ADA/movie/:id" component={Movie} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
