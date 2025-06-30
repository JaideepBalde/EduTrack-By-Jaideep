import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    const savedUser = localStorage.getItem('educrack_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate login
    if (email && password.length >= 6) {
      const newUser: User = {
        id: '1',
        name: email.split('@')[0],
        email,
        joinedDate: new Date().toISOString(),
        totalStudyHours: 0,
        streak: 0,
        level: 1,
        xp: 0
      };
      setUser(newUser);
      localStorage.setItem('educrack_user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('educrack_user');
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate registration
    if (name && email && password.length >= 6) {
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        joinedDate: new Date().toISOString(),
        totalStudyHours: 0,
        streak: 0,
        level: 1,
        xp: 0
      };
      setUser(newUser);
      localStorage.setItem('educrack_user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  return { user, loading, login, logout, register };
};