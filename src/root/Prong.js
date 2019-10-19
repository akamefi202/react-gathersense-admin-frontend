import React from 'react';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import routes from './routes';

import Login from '../containers/Login';
import '../assets/css/index.css';
import { connect } from 'react-redux';
import { getData } from '../actions';
class Prong extends React.Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {location} = this.props;
    const tokensession = localStorage.getItem('GSAtoken');
    if (location.pathname === '/') {
      if (tokensession === null) {
        return ( <Redirect to={'/Login'}/> );
      }
      else
      {
        return ( <Redirect to={'/Overview'}/> );
      } 
    //   else if (initURL === '' || initURL === '/' || initURL === '/Login') {
    //     return ( <Redirect to={'/Overview'}/> );
    //   } 
    //   else {
    //     return ( <Redirect to={initURL}/> );
    //   }
    }
    if (tokensession !== null)
      this.props.getAllData();
    
    return (
      <div className="body"> 
        <BrowserRouter>
          <Switch>
            <Route exact path='/Login' component={Login}/>
            {tokensession === null ?
                (
                  <Redirect to={'/Login'}/>
                  ) : (
                    routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })
            )}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({Auth}) => {
    const {userName} = Auth;
    return {userName}
};
const mapDispatchToProps = { getAllData: getData,};
Prong = connect(mapStateToProps, mapDispatchToProps)(Prong)
export default Prong;
