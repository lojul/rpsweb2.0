import React from 'react'
import logo from './assets/logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './public/home';
import ListMemberComponent from './member/ListMemberComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Loading from "./Loading";
import Profile from "./dashboard/profile"
import ExternalApi from "./externalapiexample/external-api";
import CreateMemberComponent from './member/CreateMemberComponent';
import ViewMemberComponent from './member/ViewMemberComponent';
import PlanGroupComponent from "./plangroup/PlanGroupComponent";

// Auth removed; routes are now public

function App() {

    // No authentication loading state

  return (
    <div className="App">
        <Router>
            <HeaderComponent />
            <div className="container">
                <Switch>
                    <Route path = "/" exact component = {HomePage}></Route>
                    <Route path = "/members" component = {ListMemberComponent}></Route>
                    <Route path = "/add-member/:id" component = {CreateMemberComponent}></Route>
                    <Route path = "/view-member/:id" component = {ViewMemberComponent}></Route>
                    {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    <Route path = "/plangroups" component = {PlanGroupComponent}></Route>
                    <Route path = "/profile" component = {Profile}></Route>
                    <Route path="/external-api" component={ExternalApi} />
                </Switch>
            </div>
            <FooterComponent />
        </Router>
    </div>

  );
}

export default App;
