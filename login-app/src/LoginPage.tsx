import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

interface DemoCredential {
  label: string;
  username: string;
  password: string;
}

const demoCredentials: DemoCredential[] = [
  { label: 'Administrador', username: 'admin@example.com', password: 'admin123' },
  { label: 'Usuário', username: 'user@example.com', password: 'user123' },
];

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  const handleDemoLogin = (credential: DemoCredential) => {
    setFormData({
      username: credential.username,
      password: credential.password,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-20 animate-pulse-slow"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Main Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
              <p className="text-blue-200">Acesse sua conta</p>
            </motion.div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                  <input
                    type="email"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Senha"
                    className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Entrar
              </motion.button>
            </form>
          </motion.div>

          {/* Demo Credentials Section - Separate Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10"
          >
            <div className="text-center mb-4">
              <h2 className="text-lg font-semibold text-white mb-1">Credenciais de Demonstração</h2>
              <p className="text-sm text-blue-200">Clique para preencher automaticamente</p>
            </div>

            <div className="space-y-3">
              {demoCredentials.map((credential, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  onClick={() => handleDemoLogin(credential)}
                  className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-xl text-left transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium group-hover:text-blue-200 transition-colors">
                        {credential.label}
                      </div>
                      <div className="text-blue-300 text-sm">
                        {credential.username}
                      </div>
                    </div>
                    <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;