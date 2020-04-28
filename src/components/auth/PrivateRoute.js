import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth'; // const que = React.creteContext 

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    
    const {userCurrent} = useContext(AuthContext);
    
    return ( 
        <Route
            {...rest}
            render={routeProps => 
                !!userCurrent ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/"} />
                )
            }
        />
     );
}
 
export default PrivateRoute;