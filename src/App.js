import { Layout } from "antd";
import { HashRouter, Switch, Route } from "react-router-dom";

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
      <HashRouter basename="/">
        <Header className="header">
          <MenuTop />
        </Header>
        <Content style={{minHeight:'fit-content'}}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/new-movies" component={NewMovies} />
            <Route exact={true} path="/popular" component={Popular} />
            <Route exact={true} path="/search" component={Search} />
            <Route exact={true} path="/movie/:id" component={Movie} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
        <Footer />
      </HashRouter>
    </Layout>
  );
}

export default App;
