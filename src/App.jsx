import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema/login.schema";
import { Button } from "./components/button/button";
// import { Posts } from './views/posts/posts.page';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const debouncedEmail = useDebounce(email, 1000);
  useEffect(() => {
    console.log({ debouncedEmail });
  }, [debouncedEmail]);

  const debouncedPassword = useDebounce(password, 1000);
  useEffect(() => {
    console.log({ debouncedPassword });
  }, [debouncedPassword]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: 1,
            id: 1,
            title: data.email,
            body: data.password,
          }),
        }
      );
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.error("Failed to submit:", error);
    }
    setIsLoading(false);
    reset();
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="my-3">Login Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            label="ABC"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            // {...register("email")}
          />
          {errors.email && <p>{errors.email?.message}</p>}
          <br />
          <input
            placeholder="Password"
            label="ABC"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            {...register("password")}
          />
          {errors.password && <p>{errors.password?.message}</p>}

          <br />
          <Button 
          disabled={isLoading} 
          type="submit" 
          size={"sm"} 
          className="btn btn-primary"
          label="Submit">
            Submit
          </Button>
        </form>
        <br />
      </div>
      {/* <Posts/> If needed, include the Posts component */}
    </Fragment>
  );
}
