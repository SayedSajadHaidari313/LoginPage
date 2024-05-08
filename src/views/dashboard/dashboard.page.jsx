// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { Button } from "react-bootstrap";

export function Dashboard() {
 const {token, logout} = useAuthStore()
  return (
    <>
      {token ? (
        <>
          <div>Dashboard</div>
          <Link to="/posts">Posts</Link>
          <br />
          <Button 
          onClick={logout}
          >Logout</Button>
     
        </>
      ) : (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          ipsa, beatae consequatur maxime dolorum, officia aliquam ut
          accusantium obcaecati, excepturi velit mollitia vel provident modi
          optio tenetur ipsam culpa iure!
          <br />
        </div>
      )}
    </>
  );
}


