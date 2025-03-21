import React from 'react'
import BackButton from '@/components/BackButton';
import Security_server from '../assets/Security_server.gif';
import { ClientImage } from '@/components/ClientImages';
import Admin2_security from '../assets/Admin2_security.gif';

const Security_Monitoring = () => {
    return (
        <div>
         {/* Heading */}
            <div className="pt-10 mt-20">
                <div className="md:flex items-center justify-center gap-20">
                    <div className="cursor-pointer transition-opacity duration-300 hover:opacity-25">
                        <BackButton />
                    </div>
                    <div className="md:ml-10 flex flex-col  md:w-2/3  mx-auto px-4 md:px-0">
                        <h1 className="inline-block text-3xl md:text-5xl text-center font-bold text-gray-900 tracking-tight p-4">
                            Security Monitoring System
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full w-3/4 mx-auto" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center md:w-4/5 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 p-4 mb-4">
                    Project overview
                </h1>
                <div className="leading-relaxed text-lg md:text-xl font-alegreya text-gray-700 mb-6 px-4 space-y-6 ">
                    <p className="relative pl-6 ">
                        A Python-based web application for monitoring and logging user activity with role-based access control. This Flask-based security server provides a secure platform for tracking user actions, managing logs, and implementing different permission levels for administrators and standard users.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Authentication System</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Secure login with session management</li>
                                <li>Role-based access control (Admin and Standard User roles)</li>
                                <li>Protection against unauthorized access</li>
                                <li>Login activity logging with IP address tracking</li>
                            </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-purple-800 mb-2">Activity Monitoring</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Comprehensive logging of user actions</li>
                                <li>Timestamp recording for all activities</li>
                                <li>IP address tracking for security analysis</li>
                                <li>Detailed audit trails for compliance purposes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-green-800 mb-2">Admin Capabilities</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>View, download, and clear system logs</li>
                                <li>Access to admin-only sections</li>
                                <li>User management interface</li>
                                <li>System monitoring dashboard</li>
                            </ul>
                        </div>
                        
                        <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-amber-800 mb-2">Security Features</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Environment variable configuration for sensitive data</li>
                                <li>Password protection</li>
                                <li>Protection against unauthorized endpoint access</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">User Roles and Permissions</h3>
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <div className="flex-1 bg-gray-50 border-l-4 border-blue-500 p-3">
                            <span className="block font-bold">Admin User</span>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Full access to all features</li>
                                <li>Can view, download, and clear logs</li>
                                <li>Access to admin panel</li>
                                <li>User management capabilities</li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-gray-50 border-l-4 border-green-500 p-3">
                            <span className="block font-bold">Standard User</span>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Limited access based on permissions</li>
                                <li>Can view logs but cannot download or clear them</li>
                                <li>Cannot access admin-only sections</li>
                                <li>Receives visual feedback for unauthorized actions</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500 mt-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Logging System</h3>
                        <p className="mb-2">The application logs various activities to activity.log, including:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>User logins (successful and failed attempts)</li>
                            <li>Page access and navigation events</li>
                            <li>Admin actions (log downloads, log clearing)</li>
                            <li>Unauthorized access attempts</li>
                        </ul>
                        <p className="mt-3">Log entries include timestamps, usernames, IP addresses, and action descriptions.</p>
                    </div>
                </div>
            </div>
            <a className="block mx-auto text-base w-full text-center md:w-1/6 font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 hover:text-blue-600 transition-colors duration-300" 
            href='https://github.com/mac455/Web-server'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

            {/* User Demo */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Standard User Demo</h1>
            <div className="px-4">
                <ClientImage
                    src={Security_server}
                    alt="Security Monitoring System"
                    width={600}
                    height={400}
                    unoptimized
                    className="mt-5 mb-5 mx-auto"
                />
            </div>
            
                {/* Admin Demo */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Admin Demo</h1>
            <div className="px-4">
                <ClientImage
                    src={Admin2_security}
                    alt="Security Monitoring System"
                    width={600}
                    height={400}
                    unoptimized
                    className="mt-5 mb-5 mx-auto"
                />
            </div>
            
        </div>
    );
}

export default Security_Monitoring;