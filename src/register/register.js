import { useState } from "react";
export default function Register() {
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        username:"",
        password:"",
        confirm:''
      });
    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        const req = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const white = /\s/g;
        const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setUser({
            ...user,
            [e.target.name]: e.target.value,
          });
          switch (e.target.name) {
            case "Name":
              setUserErrors({
                ...userErrors,
                Name:
                  e.target.value.length === 0
                    ? "This field is required"
                    : null,
              });
              break;
            case "Email":
              setUserErrors({
                ...userErrors,
                Email: req.test(e.target.value) === false? "This Email is invalid" : null,
              });
              break;
            case "username":
                setUserErrors({
                  ...userErrors,
                  username: white.test(e.target.value) !== false? "Empty spaces are not allowed" : null,
                });
                break;
            case "password":
                setUserErrors({
                    ...userErrors,
                    password: pass.test(e.target.value) === false? "password is invalid" : null,
                });
                break;
            case "confirm":
                setUserErrors({
                    ...userErrors,
                    confirm: e.target.value !== user.password ? "password is invalid" : null,
                });
                break;
            default:
              break;
          }
      }
    const [userErrors, setUserErrors] = useState({
        Name: null,
        Email: null,
        username:null,
        password:null,
        confirm:null
      });
    const submitAddUser = (e) => {
        e.preventDefault();
        if(!userErrors.Name && !userErrors.Email && !userErrors.username && !userErrors.password && !userErrors.confirm ){
            console.log(user);
        }
      };
  return (
    <>
    <div className="text-lg-left">
    <form className="col-md-8 text-left m-auto" onSubmit={(e) => submitAddUser(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-lg-left">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="Name"
            value={user.Name}
            onChange={(e) => handleInputChange(e)}
          />
         <small className="text-danger">{userErrors.Name}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-lg-left">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="Email"
            value={user.Email}
            onChange={(e) => handleInputChange(e)}
          />
         <small className="text-danger">{userErrors.Email}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-lg-left">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={(e) => handleInputChange(e)}
          />
        <small className="text-danger">{userErrors.username}</small>

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="pass"
            value={user.password}
            onChange={(e) => handleInputChange(e)}
          />
        <small className="text-danger">{userErrors.password}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirm"
            value={user.confirm}
            onChange={(e) => handleInputChange(e)}
          />
        <small className="text-danger">{userErrors.confirm}</small>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
