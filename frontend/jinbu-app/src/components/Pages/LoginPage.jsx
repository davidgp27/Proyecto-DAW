import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../Navigation/TopNav';
import { Footer } from '../Layout/Footer';

export function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // SignUp state
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Validar login
  const validateLogin = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email es requerido';
    if (!password) newErrors.password = 'Contraseña es requerida';
    if (email && !email.includes('@')) newErrors.email = 'Email inválido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validar signup
  const validateSignUp = () => {
    const newErrors = {};
    if (!signUpData.name) newErrors.name = 'Nombre es requerido';
    if (!signUpData.email) newErrors.email = 'Email es requerido';
    if (signUpData.email && !signUpData.email.includes('@')) newErrors.email = 'Email inválido';
    if (!signUpData.password) newErrors.password = 'Contraseña es requerida';
    if (signUpData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (signUpData.password !== signUpData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    setIsLoading(true);
    // Simular API call
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
      setIsLoading(false);
      window.location.href = '/';
    }, 1000);
  };

  // Handle signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateSignUp()) return;

    setIsLoading(true);
    // Simular API call
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ 
        email: signUpData.email, 
        name: signUpData.name 
      }));
      setIsLoading(false);
      window.location.href = '/';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-surface flex flex-col">
      <TopNav />

      <main className="flex h-full w-full flex-1 pt-24">
        {/* Left Side: Image */}
        <section className="hidden lg:block lg:w-1/2 relative h-full">
          <div className="absolute inset-0 bg-surface-container-lowest dark:bg-surface-container-lowest">
            <img 
              alt="Minimalist architectural detail" 
              className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAusqIGe90eyEld4ljWg24haJYBDkuq2aPxv4aow7mPoaU5sqF3VuBNh18mKjHqXChiLIXUJW6M38RJhBhWfGy_hBXDh4vGCNvl2RJUMCsiHP8Rx5QWcMySXy_iQ5UBRQOSM455ErqFWdgjUzcsbckCTS0q9fF_Ne51_iPGuUXKiB9pFX9kJH9gwJYpccljkMeqHcWe3i4HSZHYVTtAY64cfZE23fXso3y6mGpqfsfKu4Te6lEgI8_APcLB4Q6jXnsLgztpH-bsVo0n"
            />
          </div>
          <div className="absolute bottom-16 left-16 z-10 max-w-md">
            <h2 className="font-headline text-5xl italic text-on-surface dark:text-on-surface leading-tight mb-4">
              The art of seeing.
            </h2>
            <p className="text-secondary-dim dark:text-secondary-dim text-lg font-light tracking-wide italic">
              Curated digital collections for the discerning eye.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-background via-transparent to-transparent opacity-80"></div>
        </section>

        {/* Right Side: Form */}
        <section className="w-full lg:w-1/2 bg-surface dark:bg-surface flex flex-col overflow-y-auto">
          <div className="flex-grow flex items-center justify-center px-8 md:px-16 lg:px-24 pb-8">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="mb-12">
                <span className="font-headline text-4xl text-on-surface dark:text-on-surface italic">Jinbu</span>
                <h1 className="font-headline text-2xl text-on-surface dark:text-on-surface mt-6 font-light">
                  {isSignUp ? 'Create Account' : 'Sign in to Jinbu'}
                </h1>
              </div>

              {/* Tab Switcher */}
              <div className="flex gap-4 mb-8 p-1 bg-surface-container-low dark:bg-surface-container-low rounded-xl">
                <button
                  onClick={() => {
                    setIsSignUp(false);
                    setErrors({});
                  }}
                  className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                    !isSignUp 
                      ? 'bg-primary dark:bg-primary text-on-primary dark:text-on-primary'
                      : 'text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsSignUp(true);
                    setErrors({});
                  }}
                  className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                    isSignUp 
                      ? 'bg-primary dark:bg-primary text-on-primary dark:text-on-primary'
                      : 'text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-8">
                {isSignUp && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant font-label mb-2">
                      Full Name
                    </label>
                    <input 
                      className={`w-full bg-surface-container-low dark:bg-surface-container-low border rounded-xl py-4 px-5 text-on-surface dark:text-on-surface focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-outline-variant dark:placeholder:text-outline-variant font-label ${
                        errors.name ? 'border-error' : 'border-outline-variant/20'
                      }`}
                      placeholder="Your name"
                      type="text"
                      value={signUpData.name}
                      onChange={(e) => setSignUpData({...signUpData, name: e.target.value})}
                    />
                    {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant font-label mb-2">
                    Email Address
                  </label>
                  <input 
                    className={`w-full bg-surface-container-low dark:bg-surface-container-low border rounded-xl py-4 px-5 text-on-surface dark:text-on-surface focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-outline-variant dark:placeholder:text-outline-variant font-label ${
                      errors.email ? 'border-error' : 'border-outline-variant/20'
                    }`}
                    placeholder="name@example.com"
                    type="email"
                    value={isSignUp ? signUpData.email : email}
                    onChange={(e) => isSignUp ? setSignUpData({...signUpData, email: e.target.value}) : setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant font-label">
                      Password
                    </label>
                    {!isSignUp && (
                      <a href="#" className="text-xs text-primary/80 hover:text-primary transition-colors font-label">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <input 
                      className={`w-full bg-surface-container-low dark:bg-surface-container-low border rounded-xl py-4 px-5 text-on-surface dark:text-on-surface focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-outline-variant dark:placeholder:text-outline-variant font-label ${
                        errors.password ? 'border-error' : 'border-outline-variant/20'
                      }`}
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      value={isSignUp ? signUpData.password : password}
                      onChange={(e) => isSignUp ? setSignUpData({...signUpData, password: e.target.value}) : setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-error mt-1">{errors.password}</p>}
                </div>

                {isSignUp && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant font-label mb-2">
                      Confirm Password
                    </label>
                    <input 
                      className={`w-full bg-surface-container-low dark:bg-surface-container-low border rounded-xl py-4 px-5 text-on-surface dark:text-on-surface focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-outline-variant dark:placeholder:text-outline-variant font-label ${
                        errors.confirmPassword ? 'border-error' : 'border-outline-variant/20'
                      }`}
                      placeholder="••••••••"
                      type="password"
                      value={signUpData.confirmPassword}
                      onChange={(e) => setSignUpData({...signUpData, confirmPassword: e.target.value})}
                    />
                    {errors.confirmPassword && <p className="text-xs text-error mt-1">{errors.confirmPassword}</p>}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-label font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity transform active:scale-[0.98] duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⚙️</span>
                      Loading...
                    </>
                  ) : (
                    isSignUp ? 'Create Account' : 'Sign In'
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-12 flex items-center">
                <div className="flex-grow border-t border-outline-variant/30"></div>
                <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant dark:text-on-surface-variant font-label">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-outline-variant/30"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                <button className="flex items-center justify-center gap-3 bg-surface-container-high dark:bg-surface-container-high hover:bg-surface-bright dark:hover:bg-surface-bright py-3 rounded-xl transition-colors border border-outline-variant/10">
                  <span className="material-symbols-outlined text-xl">google</span>
                  <span className="text-xs font-label font-medium uppercase tracking-wider hidden sm:inline">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-surface-container-high dark:bg-surface-container-high hover:bg-surface-bright dark:hover:bg-surface-bright py-3 rounded-xl transition-colors border border-outline-variant/10">
                  <span className="material-symbols-outlined text-xl">apple</span>
                  <span className="text-xs font-label font-medium uppercase tracking-wider hidden sm:inline">Apple</span>
                </button>
              </div>

              <p className="text-center text-on-surface-variant dark:text-on-surface-variant text-xs font-label">
                {isSignUp ? (
                  <>
                    Already have account? 
                    <button 
                      onClick={() => {
                        setIsSignUp(false);
                        setErrors({});
                      }}
                      className="text-primary hover:underline underline-offset-4 ml-1"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    New to Jinbu? 
                    <button 
                      onClick={() => {
                        setIsSignUp(true);
                        setErrors({});
                      }}
                      className="text-primary hover:underline underline-offset-4 ml-1"
                    >
                      Create an account
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          <Footer />
        </section>
      </main>
    </div>
  );
}
