import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store"
import { Button } from "react-bootstrap";

export function LoginPage() {
  const {isLoggedIn, token, login} = useAuthStore();
  if(isLoggedIn && token){
      return <Navigate to={"/"} replace />
    }
  return (
    <div>
      LoginPage
      <Button onClick={() => login({ user: "sajad",token: "apply"})}>login</Button>
    </div>
  )
}

