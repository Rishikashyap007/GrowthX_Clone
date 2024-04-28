import { motion } from "framer-motion";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { apiConnector } from "../../services/apiconnector";
import "./Register.css";
import Logo from "./logobg.png";

const show = {
  opacity: 1,
  transitionEnd: {
    display: "block",
  },
};

const hide = {
  opacity: 0,
  y: -400,
  transitionEnd: {
    display: "none",
  },
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [empty, setEmpty] = useState(false);

  const [isVisible, setIsVisible] = useState(0);
  const navigate = useNavigate();

  //form handle
  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    otp: "",
  });

  const { role, firstName, lastName, email, password, otp } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  const register = async (role, firstName, lastName, email, password, otp) => {
    try {
      const response = await apiConnector(
        "POST",
        "http://localhost:3000/api/auth/register",
        {
          role,
          firstName,
          lastName,
          email,
          password,
          otp,
        }
      );

      console.log("Register API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      navigate("/login");
    } catch (error) {
      console.log("Register API ERROR............", error);
    }
  };

  const sendOtp = async (email) => {
    try {
      const response = await apiConnector(
        "POST",
        "http://localhost:3000/api/auth/send-otp",
        {
          email,
          checkPresent: true,
        }
      );
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      navigate("/login");
    }
  };

  //handle sendotp button click
  const handlePassBtnClick = (e) => {
    e.preventDefault();
    if (password === "") {
      setEmpty(true);
    } else {
      sendOtp(email);
      setIsVisible(6);
    }
  };

  // Handle Form Submission
  const handleOnSubmit = async(e) => {
    e.preventDefault();

    const res = await register(role, firstName, lastName, email, password, otp);
    if (!res.ok) {
      return console.log("invalid otp");
    }
    // Reset
    setFormData({
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      otp: "",
    });
  };

  // change handler for checkbox
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <div className="registerPage">
      <div className="registerPage-top">
        <img
          src={Logo}
          alt="logo"
          width={100}
          height={24}
          className="registerPage-logo"
        />

        <Link to={"/login"} className="loginPage-btn">
          Login
        </Link>
      </div>

      <div style={{}}>
        <motion.div
          className="registerPage-bottom"
          style={{}}
          animate={isVisible === 0 ? show : hide}
        >
          <p className="top-1">GrowthX is built to create the top 1% leaders</p>

          <p className="few-questions">
            We'll now ask you a few questions (~15 secs). This will give you
            clarity on if GrowthX is the right fit for your professional goals.
            This application process has helped us find our first 2,500+ members
            from ~25,000 applications in the last 3 years.
          </p>

          <button
            className="register-form-btn"
            style={{ marginTop: "10px" }}
            onClick={() => setIsVisible(1)}
          >
            Let's do this
          </button>
        </motion.div>

        {/* Page 1 */}
        <motion.form
          animate={isVisible === 1 ? show : hide}
          className="registerPage-bottom"
          style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
        >
          <div className="register-form-div">
            <p className="form-question">
              What describes your current Role? <sup>*</sup>
            </p>

            <div className="form-options-div">
              <label className="register-form-label">
                <span className="form-radio">
                  <input
                    name="role"
                    id="Manager"
                    type="radio"
                    value="Manager"
                    onChange={handleOnChange}
                  />
                </span>
                <span className="form-title">Manager</span>
              </label>
              <label className="register-form-label">
                <span className="form-radio">
                  <input
                    name="role"
                    id="Employee"
                    type="radio"
                    value="Employee"
                    onChange={handleOnChange}
                  />
                </span>
                <span className="form-title">Employee</span>
              </label>
              <label className="register-form-label">
                <span className="form-radio">
                  <input
                    name="role"
                    id="Intern"
                    type="radio"
                    value="Intern"
                    onChange={handleOnChange}
                  />
                </span>
                <span className="form-title">Intern</span>
              </label>
            </div>
          </div>

          <div className="register-form-btn-div">
            <button
              className="register-form-btn"
              onClick={(e) => {
                e.preventDefault();
                role === ""
                  ? setEmpty(true)
                  : (setEmpty(false), setIsVisible(2));
              }}
            >
              {empty ? "Invalid" : "Next"}
            </button>

            <span className="register-form-btn-span">Press Enter ↵</span>
          </div>
        </motion.form>

        {/* Page 2 */}
        <motion.form
          animate={isVisible === 2 ? show : hide}
          className="registerPage-bottom"
          style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
        >
          <div className="register-form-div">
            <div>
              <p className="form-question">
                What is your first name? <sup>*</sup>
              </p>
            </div>

            <div
              className="form-options-div"
              style={{ alignItems: "flex-start" }}
            >
              <label className="register-form-label email-label">
                <span className="" style={{ width: "100%" }}>
                  <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleOnChange}
                    placeholder="For example, Suraj"
                    className="email-input"
                  />
                </span>
              </label>
            </div>
          </div>

          <div className="register-form-btn-div">
            <button
              className="register-form-btn"
              onClick={(e) => {
                e.preventDefault();
                firstName === ""
                  ? setEmpty(true)
                  : (setEmpty(false), setIsVisible(3));
              }}
            >
              {empty ? "Invalid" : "Next"}
            </button>
            <span className="register-form-btn-span">Press Enter ↵</span>
          </div>
        </motion.form>

        {/* Page 3 */}
        <motion.form
          animate={isVisible === 3 ? show : hide}
          className="registerPage-bottom"
          style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
        >
          <div className="register-form-div">
            <div>
              <p className="form-question">
                What is your last name? <sup>*</sup>
              </p>
            </div>

            <div
              className="form-options-div"
              style={{ alignItems: "flex-start" }}
            >
              <label className="register-form-label email-label">
                <span className="" style={{ width: "100%" }}>
                  <input
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={handleOnChange}
                    placeholder="For example, Singh"
                    className="email-input"
                  />
                </span>
              </label>
            </div>
          </div>

          <div className="register-form-btn-div">
            <button
              className="register-form-btn"
              onClick={(e) => {
                e.preventDefault();
                lastName === ""
                  ? setEmpty(true)
                  : (setEmpty(false), setIsVisible(4));
              }}
            >
              {empty ? "Invalid" : "Next"}
            </button>
            <span className="register-form-btn-span">Press Enter ↵</span>
          </div>
        </motion.form>

        {/* Page 4 */}
        <motion.form
          animate={isVisible === 4 ? show : hide}
          className="registerPage-bottom"
          style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
        >
          <div className="register-form-div">
            <div className="" style={{ marginBottom: "16px" }}>
              <p className="form-question">
                Your primary email address? <sup>*</sup>
              </p>
              <p className="option-question">
                Pick an email that you check everyday.
              </p>
            </div>

            <div
              className="form-options-div"
              style={{ alignItems: "flex-start" }}
            >
              <label className="register-form-label email-label">
                <span className="" style={{ width: "100%" }}>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="For example, example@gmail.com"
                    className="email-input"
                  />
                </span>
              </label>
            </div>
          </div>

          <div className="register-form-btn-div">
            <button
              className="register-form-btn"
              onClick={(e) => {
                e.preventDefault();
                email === "" || !isValidEmail(email)
                  ? setEmpty(true)
                  : (setEmpty(false), setIsVisible(5));
              }}
            >
              {empty ? "Invalid" : "Next"}
            </button>

            <span className="register-form-btn-span">Press Enter ↵</span>
          </div>
        </motion.form>

        {/* Page 5 */}
        <motion.form
          animate={isVisible === 5 ? show : hide}
          className="registerPage-bottom"
          style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
        >
          <div className="register-form-div">
            <div className="" style={{ marginBottom: "16px" }}>
              <p className="form-question">
                Enter a new password <sup>*</sup>
              </p>
              <p className="option-question">
                Pick a strong password for security.
              </p>
            </div>

            <div
              className="form-options-div"
              style={{ alignItems: "flex-start" }}
            >
              <label className="register-form-label email-label">
                <span
                  className=""
                  style={{ width: "100%", position: "relative" }}
                >
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleOnChange}
                    placeholder="password"
                    className="email-input"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="register-form-password-span"
                  >
                    {showPassword ? (
                      <IoEyeOff fontSize={20} fill="#ffffff" />
                    ) : (
                      <IoEye fontSize={20} fill="#ffffff" />
                    )}
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div>
            <label className="register-terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={isChecked}
                onChange={handleChange}
              />
              <span>I agree to the user terms and conditions</span>
            </label>
          </div>

          <div className="register-form-btn-div">
            <button
              className="register-form-btn"
              disabled={!isChecked}
              onClick={handlePassBtnClick}
            >
              {empty ? "Invalid" : "Send OTP"}
            </button>

            <span className="register-form-btn-span">Press Enter ↵</span>
          </div>
        </motion.form>

        {/* Page 6 */}
        <motion.form
          onSubmit={handleOnSubmit}
          animate={isVisible === 6 ? show : hide}
          className="registerPage-bottom"
          style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
        >
          <div className="register-form-div">
            <div className="" style={{ marginBottom: "16px" }}>
              <p className="form-question otp">Enter OTP</p>
              <p
                className="option-question otp"
                onClick={() => {
                  sendOtp(email);
                }}
              >
                Haven't received OTP? Click to resend
              </p>
            </div>

            <div
              className="form-options-div"
              style={{ alignItems: "flex-start" }}
            >
              <label className="register-form-label email-label">
                <span className="" style={{ width: "100%" }}>
                  <input
                    name="otp"
                    type="number"
                    value={otp}
                    onChange={(e) => {
                      setFormData((prevData) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }));
                      otp !== "" && setEmpty(false);
                    }}
                    placeholder="123456"
                    className="email-input"
                  />
                </span>
              </label>
            </div>
          </div>

          <div className="register-form-btn-div">
            <button
              type="submit"
              className="register-form-btn"
              disabled={otp === ""}
            >
              Register
            </button>

            <span className="register-form-btn-span">Press Enter ↵</span>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Register;
