import { useForm } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';

export default function SignInPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        // Add your authentication logic here
    };

    return (
        <div className="flex h-screen w-full bg-gray-100 p-8 md:p-12 lg:p-16 items-center justify-center">
            <div className="flex w-full max-w-6xl h-auto md:h-5/6 shadow-lg rounded-2xl overflow-hidden">
                {/* Left sidebar - white form */}
                <div className="w-full md:w-2/3 flex items-center justify-center p-6 md:p-10 bg-white">
                    <div className="w-full max-w-md mx-auto">
                        <h1 className="text-3xl font-bold text-teal-500 text-center mb-8">Sign In</h1>

                        {/* Social login buttons */}
                        <div className="flex justify-center gap-4 mb-6">
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
                            or use your email account:
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook|icloud|aol|protonmail|zoho|mail)\.(com|org|net|edu|co|io|gov)$/i,
                                            message: "Please enter a valid email"
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
                                        required: "Password is required"
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className={`w-full bg-gray-100 border-0 rounded-md py-3 pl-10 pr-3 text-gray-600 focus:ring-2 focus:outline-none ${errors.password && touchedFields.password ? 'focus:ring-red-500 border-red-300' : 'focus:ring-teal-500'}`}
                                />
                                {errors.password && touchedFields.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                                )}
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-500">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" className="text-sm text-teal-500 hover:text-teal-600">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="w-full bg-teal-500 text-white font-medium py-3 px-4 rounded-full hover:bg-teal-600 transition duration-300 mt-6"
                            >
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right section - teal CTA */}
                <div className="hidden md:flex md:w-1/3 flex-col items-center justify-center bg-teal-500 text-white p-10 relative">
                    <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 border-2 border-white flex items-center justify-center">
                                <span className="text-white font-semibold">Dp</span>
                            </div>
                            <span className="font-medium">Diprella</span>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-20 right-20 w-16 h-16 bg-teal-400 rounded-lg opacity-20 rotate-45"></div>
                    <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-teal-400 opacity-20"></div>

                    <div className="max-w-xs text-center">
                        <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                        <p className="text-teal-100 mb-8">Enter your personal details and start your journey with us</p>

                        <button className="border-2 border-white text-white font-medium py-2 px-12 rounded-full hover:bg-teal-600 transition duration-300">
                            SIGN UP
                        </button>
                    </div>
                </div>

                {/* Mobile signup link */}
                <div className="md:hidden absolute bottom-6 w-full text-center">
                    <span className="text-gray-500">Don't have an account?</span>
                    <button className="text-teal-500 font-medium ml-2">Sign Up</button>
                </div>
            </div>
        </div>
    );
}