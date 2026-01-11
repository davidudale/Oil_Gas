import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const docSnap = await getDoc(doc(db, "users", user.uid));
        setRole(docSnap.data()?.role);
      }
      setLoading(false);
    };
    checkRole();
  }, []);

  if (loading) return <div>Loading...</div>;

  return allowedRoles.includes(role) ? children : <Navigate to="/Login" />;
};


export default ProtectedRoute;