import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import NewsPage from "./NewsPage/NewsPage.jsx";
import Heroes from "./Heroes/Heroes.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Navigator from "./Navigator/Nav.jsx";
import About from "./Support/AboutUs.jsx";
import Contact from "./Support/ContactUs.jsx";
import Footer from "./Footer/Foo.jsx"
import kunkka from "./Heroes/kunkka.jsx";
import nevermore from "./Heroes/nevermore.jsx";
import voidSpirit from "./NewsPage/voidSpirit.jsx";
import nigma from "./Baz/nigma.jsx";



const externalContent = {
    id: "article-1",
    title: "An Article",
    author: "April Bingham",
    text: "Some text in the article"
};

function App() {
    return (
        <Router>
            <header>
                <Navigator></Navigator>
            </header>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/NewsPage" exact component={NewsPage} />
                <Route path="/Heroes" exact component={Heroes} />
                <Route path="/kunkka" exact component={kunkka} />
                <Route path="/nevermore" exact component={nevermore}  />
                <Route path="/voidSpirit" exact component={voidSpirit} />
                <Route path="/nigma" exact component={nigma} />
                <Route path="/baz" exact render={() => <Baz content={externalContent} />} />
                <Route path="/AboutUs" exact component={About} />
                <Route path="/ContactUs" exact component={Contact} />
                <Route component={Error} />
            </Switch>
            <footer>
                <Footer></Footer>
            </footer>
        </Router>
    );
}

export default App;
