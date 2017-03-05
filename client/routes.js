import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';
import Nav from './components/nav';
import Main from './components/main';

const App = (props) => (
    <div className='app'>
        <Nav />
        <div className='main'>
            {props.children}
        </div>
        {/*
        <Footer />
        <h3 className='attribution'>
            WEB DESIGN BY&nbsp;&nbsp;
            <a href='http://www.jbenjaminy.com'>
                JBENJAMINY
            </a>
        </h3>
        */}
    </div>
);

const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Main} />
          {/*
          <Route path='/projects/:category'>
              <IndexRoute component={Projects} />
              <Route path='/projects/:category/:project'>
                  <IndexRoute component={Project} />
              </Route>
          </Route>
          <Route path='/about_us' component={About} />
          <Route path='/contact_us' component={Contact} />
          */}
        </Route>
    </Router>
);

export default routes;
