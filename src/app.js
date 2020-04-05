import React, {Component} from 'react'
import { Route, HashRouter } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/content/Home'
import Education from './components/content/Education'
import Experience from './components/content/Experience'
import Life from './components/content/Life'
import Contact from './components/content/Contact'


export default class App extends Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/experience" component={Experience}/>
                    <Route path="/life" component={Life}/>
                    <Route path="/contact" component={Contact}/>
                </HashRouter>
                <Footer />
            </div>
        )
    }
}