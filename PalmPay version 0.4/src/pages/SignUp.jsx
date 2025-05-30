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
      }
    } catch (err) {
      alert('Error connecting to server', err);
    }
  };

  return (
    <div
      className="flex w-full bg-gray-100 items-center justify-center relative"
      style={{
        height: '100dvh', // Dynamic viewport height for mobile browsers
        paddingTop: 'clamp(60px, 8vh, 100px)', // Dynamic navbar space
        paddingBottom: 'clamp(20px, 3vh, 60px)', // Dynamic bottom space
        paddingLeft: 'clamp(16px, 4vw, 64px)', // Responsive horizontal padding
        paddingRight: 'clamp(16px, 4vw, 64px)'
      }}
    >
      <div
        className="flex w-full max-w-6xl shadow-lg rounded-2xl overflow-hidden relative"
        style={{
          height: 'clamp(500px, 80vh, 800px)', // Responsive height based on viewport
          minHeight: '500px' // Ensure minimum usable height
        }}
      >

        {/* Left sidebar - teal section */}
        <div className="hidden md:flex md:w-1/3 flex-col items-center justify-center bg-teal-500 text-white p-10 relative">
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 border-2 border-white flex items-center justify-center">
                <span className="text-white font-semibold">Pp</span>
              </div>
              <span className="font-medium">PalmPay</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-teal-400 rounded-lg opacity-20 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-teal-400 opacity-20"></div>

          <div className="max-w-xs text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-teal-100 mb-8">To keep connected with us please login with your personal info</p>

            <Link to={"/SignIn"}>
              <button className="border-2 border-white text-white font-medium py-2 px-12 rounded-full hover:bg-teal-600 transition duration-300">
                SIGN IN
              </button>
            </Link>
          </div>
        </div>

        {/* Right section - white form */}
        <div className="w-full md:w-2/3 flex items-center justify-center p-6 md:p-10 bg-white">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-teal-500 text-center mb-8">Create Account</h1>

            {/* Social login buttons */}
            {/* <div className="flex justify-center gap-4 mb-6">
              <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <span className="text-gray-500">f</span>
              </button>
              <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <span className="text-gray-500">G+</span>
              </button>
              <button className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <span className="text-gray-500">in</span>
              </button>
            </div>

            <div className="text-center text-gray-400 mb-6">
              or use your email for registration:
            </div> */}

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
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
                  className={`w-full bg-gray-100 border-0 rounded-md py-3 pl-10 pr-3 text-gray-600 focus:ring-2 focus:outline-none ${errors.name && touchedFields.name ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                />
                {errors.name && touchedFields.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@((gmail|yahoo|hotmail|outlook|icloud|aol|protonmail|zoho|numl)\.(com|org|net|edu|co|io|gov)|numl\.edu\.pk)$/i,
                      message: "Please enter a valid email from a common provider"
                    }
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full bg-gray-100 border-0 rounded-md py-3 pl-10 pr-3 text-gray-600 focus:ring-2 focus:outline-none ${errors.email && touchedFields.email ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                />
                {errors.email && touchedFields.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
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
                  className={`w-full bg-gray-100 border-0 rounded-md py-3 pl-10 pr-3 text-gray-600 focus:ring-2 focus:outline-none ${errors.password && touchedFields.password ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                />
                {errors.password && touchedFields.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-teal-500 text-white font-medium py-3 px-4 rounded-full hover:bg-teal-600 transition duration-300 mt-6"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Mobile login link */}
        <div className="md:hidden absolute bottom-6 w-full text-center">
          <span className="text-gray-500">Already have an account?</span>
          <Link to="/SignIn" className="text-teal-500 font-medium ml-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}