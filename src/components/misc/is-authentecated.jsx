import { Fragment} from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthStore } from "../../store/auth.store";

export function IsAuthenticated({children}) {
      const {isLoggedIn, token} = useAuthStore()
      if(!token && !isLoggedIn){  
            return <Navigate to={'/login'} replace />
      }
      return (
            <Fragment>
            {children}
          </Fragment>
      )
}
IsAuthenticated.propTypes = {
      children: PropTypes.any,
    };

 