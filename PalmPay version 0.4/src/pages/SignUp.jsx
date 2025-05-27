import { useForm } from 'react-hook-form';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields }
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || 'Signup failed');
      } else {
        alert('Signup successful! You can now log in.');
        // Optionally reset form or redirect
      }
    } catch (err) {
      alert('Error connecting to server', err);
    }
  };


  return (
    <div className="min-h-screen w-full bg-gray-100 pt-20 pb-8 px-4 md:px-8 lg:px-12 flex items-center justify-center">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden min-h-0">
        {/* Left sidebar - teal section */}
        <div className="hidden md:flex md:w-1/3 flex-col items-center justify-center bg-teal-500 text-white p-4 lg:p-6 relative min-h-[400px]">
          <div className="absolute top-3 lg:top-4 left-3 lg:left-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 lg:h-7 lg:w-7 border-2 border-white flex items-center justify-center text-xs">
                <span className="text-white font-semibold">Pp</span>
              </div>
              <span className="font-medium text-sm lg:text-base">PalmPay</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-12 lg:top-16 right-12 lg:right-16 w-10 h-10 lg:w-12 lg:h-12 bg-teal-400 rounded-lg opacity-20 rotate-45"></div>
          <div className="absolute bottom-12 lg:bottom-16 left-12 lg:left-16 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-teal-400 opacity-20"></div>

          <div className="max-w-xs text-center">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">Welcome Back!</h2>
            <p className="text-teal-100 mb-4 lg:mb-6 text-xs lg:text-sm leading-relaxed">To keep connected with us please login with your personal info</p>

            <Link to={"/SignIn"}>
              <button className="border-2 border-white text-white font-medium py-2 px-6 lg:px-8 rounded-full hover:bg-teal-600 transition duration-300 text-xs lg:text-sm">
                SIGN IN
              </button>
            </Link>

          </div>
        </div>

        {/* Right section - white form */}
        <div className="w-full md:w-2/3 flex items-center justify-center p-3 md:p-4 lg:p-6">
          <div className="w-full max-w-sm mx-auto">
            <h1 className="text-xl lg:text-2xl font-bold text-teal-500 text-center mb-4 lg:mb-6">Create Account</h1>

            {/* Social login buttons */}
            {/* <div className="flex justify-center gap-2 lg:gap-3 mb-3 lg:mb-4">
              <button className="h-8 w-8 lg:h-9 lg:w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-xs lg:text-sm">
                <span className="text-gray-500">f</span>
              </button>
              <button className="h-8 w-8 lg:h-9 lg:w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-xs lg:text-sm">
                <span className="text-gray-500">G+</span>
              </button>
              <button className="h-8 w-8 lg:h-9 lg:w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-xs lg:text-sm">
                <span className="text-gray-500">in</span>
              </button>
            </div> */}

            {/* <div className="text-center text-gray-400 mb-3 lg:mb-4 text-xs lg:text-sm">
              or use your email for registration:
            </div> */}

            {/* Form Fields */}
            <div className="space-y-2 lg:space-y-3">
              <div className="relative">
                <User className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters"
                    },
                    maxLength: {
                      value: 30,
                      message: "Name must not exceed 30 characters"
                    }
                  })}
                  type="text"
                  placeholder="Name"
                  className={`w-full bg-gray-100 border-0 rounded-md py-2 lg:py-2.5 pl-8 lg:pl-9 pr-3 text-gray-600 focus:ring-2 focus:outline-none text-xs lg:text-sm ${errors.name && touchedFields.name ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                />
                {errors.name && touchedFields.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="relative">
                <Mail className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook|icloud|protonmail|numl)\.(com|org|net|edu|co|io|gov)\.(pk)$/i,
                      message: "Please enter a valid email from a common provider"
                    }
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full bg-gray-100 border-0 rounded-md py-2 lg:py-2.5 pl-8 lg:pl-9 pr-3 text-gray-600 focus:ring-2 focus:outline-none text-xs lg:text-sm ${errors.email && touchedFields.email ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                />
                {errors.email && touchedFields.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                      message: "Password must have at least 8 characters, one uppercase letter, one number, and one special character"
                    }
                  })}
                  type="password"
                  placeholder="Password"
                  className={`w-full bg-gray-100 border-0 rounded-md py-2 lg:py-2.5 pl-8 lg:pl-9 pr-3 text-gray-600 focus:ring-2 focus:outline-none text-xs lg:text-sm ${errors.password && touchedFields.password ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                />
                {errors.password && touchedFields.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-teal-500 text-white font-medium py-2 lg:py-2.5 px-4 rounded-full hover:bg-teal-600 transition duration-300 mt-3 lg:mt-4 text-xs lg:text-sm">
                SIGN UP
              </button>
            </div>

            {/* Mobile sign in link */}
            <div className="md:hidden text-center mt-4">
              <span className="text-gray-500 text-xs">Already have an account?</span>
              <button className="text-teal-500 font-medium ml-2 text-xs">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}