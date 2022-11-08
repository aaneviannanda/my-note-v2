import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useInput } from "../hooks/useInput";
import { login, putAccessToken } from "../utils/network-data";

export const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const navigate = useNavigate();
  const { setAuthUser } = useContext(AuthContext);

  const handleLogin = async (user) => {
    const { error, data } = await login(user);
    if (!error) {
      putAccessToken(data.accessToken);
      setAuthUser(data);
      navigate("/");
    }
  };

  return (
    <div className="m-10">
      <div className="flex flex-col justify-center rounded-lg p-5 border border-pink-500">
        <h1 className="text-5xl text-center font-bold dark:text-white">Login Page NoTo Urep</h1>
        <form
          className="mt-10"
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin({ email, password });
          }}
        >
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="password"
              type="password"
              placeholder="input password"
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <p className="my-3 dark:text-white">
            Create new account?
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer text-blue-800 hover:text-gray-400 dark:text-blue-500 dark:hover:text-blue-700"
            >
             {" "}Register
            </span>
          </p>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-pink-500 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
             Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};