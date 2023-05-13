import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import loginImg from '../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUserEmail = {
          email: user.email,
        };
        console.log(user);

        //now heading to jwt authorization
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loggedUserEmail),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('jwt response', data);
            //Warning: local storage is not the best way to store access token
            localStorage.setItem('car-access-token', data.token);
            navigate(from, { replace: true });
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p>
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="font-bold text-orange-600">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
