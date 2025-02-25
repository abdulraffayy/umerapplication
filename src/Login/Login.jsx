import { useState } from "react";
import { FaMobileAlt, FaLock, FaSignInAlt } from "react-icons/fa";
import bgImage from "../assets/medical-coverage-insurance-concept-hands-doctor-covering-symbols-icons-blue-background-copy-space-web-banner-template-152592412.webp";

const Login = () => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!mobile) {
            errors.mobile = "Mobile number is required.";
        } else if (!/^[0-9]+$/.test(mobile)) {
            errors.mobile = "Please enter only numbers.";
        }
        if (!password) {
            errors.password = "Password is required.";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully!");
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-opacity-70 p-8 rounded-lg w-[90%] shadow-lg bg-transparent">
                <form onSubmit={handleSubmit}>
                    {/* Mobile Number Field */}
                    <div className="mb-4 relative">
                        <label className="text-white text-sm block mb-1">Mobile Number</label>
                        <div className="flex items-center bg-transparent border border-white rounded-lg overflow-hidden">
                            <span className="px-3 text-white">
                                <FaMobileAlt />
                            </span>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-300 border-none outline-none"
                                placeholder="Enter your mobile number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 relative">
                        <label className="text-white text-sm block mb-1">Password</label>
                        <div className="flex items-center bg-transparent border border-white rounded-lg overflow-hidden">
                            <span className="px-3 text-white">
                                <FaLock />
                            </span>
                            <input
                                type="password"
                                className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-300 border-none outline-none"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                    >
                        <FaSignInAlt /> Login
                    </button>
                </form>

                {/* Forgot Password */}
                <div className="flex justify-between items-center mt-4 text-white">
                <button className="text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-pointer">
                        Forget Password
                    </button>
                    <button className=" text-white text-sm font-semibold py-2 px-4 rounded-lg">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
