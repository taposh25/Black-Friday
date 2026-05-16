import React from 'react';
import useAuth from '../../hooks/useAuth';


const Dashboard = () => {
    const {user, loading}  = useAuth()

    if (loading) {
        return <div className="text-center p-5">Loading...</div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Hi...</h2>
            
            {user ? (
                <div >
                    <p className="text-4xl">
                        Welcome to our Black Friday,{' '}
                        <span className="font-semibold text-blue-600">
                            {user.displayName || 'User'}
                        </span>!
                    </p>
                </div>
            ) : (
                <p className="text-red-500">Please log in to see your dashboard.</p>
            )}
        </div>
    );
};

export default Dashboard;