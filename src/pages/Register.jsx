import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/network-data";

export const Register = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");

  const navigate = useNavigate();

  const handleRegister = async (newUser) => {
    const { error } = await register(newUser);

    if (!error) {
      navigate("/login");
    }
  };

  return (
    <div className="m-10">
      <div className="flex flex-col justify-center rounded-lg p-5 border border-pink-500">
        <h1 className="text-5xl text-center font-bold dark:text-white">Register Page NoTo Urep</h1>
        <form
          className="mt-10"
          onSubmit={(event) => {
            event.preventDefault();
            if (password === confirmPassword) {
              handleRegister({ name, email, password });
            } else {
              alert(`password doesn't same`);
            }
          }}
        >
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="name"
              type="text"
              placeholder="input name"
              value={name}
              onChange={setName}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="email"
              type="email"
              placeholder="input email"
              value={email}
              onChange={setEmail}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="password"
              type="password"
              placeholder="Input Password"
              value={password}
              onChange={setPassword}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:border-secondary-dark dark:text-white"
              id="confirmPassword"
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              required
            />
          </div>
          <p className="my-3 dark:text-white">
            Already have an account?
            <span onClick={() => navigate("/login")} className="cursor-pointer text-blue-800 hover:text-gray-400 dark:text-blue-500 dark:hover:text-blue-700">
              {" "}
              Login
            </span>
          </p>
          <div className="flex items-center justify-center">
            <button className="w-full bg-pink-500 hover:bg-pink-300 text-white  font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outlinedark:bg-black dark:border-secondary-dark dark:text-white" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
