import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Log_Home from '../assets/Log_Home.png'
import Security_log from '../assets/Security_log.png'
import Firewall_rate from '../assets/Firewall_rate.png'

const Projects = () => {
    return (
        <div>
            {/* Projects Heading */}
            <div className="py-10 mt-20">
                <h1 className="text-4xl md:text-6xl text-center font-bold text-gray-900 tracking-tight">Projects</h1>
            </div>
            
            {/* Log Analysis */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                   <Link href='/log_analysis'>
                        <Image
                            
                            src={Log_Home}
                            alt='Log Analysis'
                            layout="responsive"
                            width={800}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                        />
                   </Link>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Log Analysis</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                    A Flask-based security application that analyzes and visualizes log data patterns to identify potential security incidents. 
                    Features an interactive dashboard with anomaly detection capabilities, advanced filtering by timestamp/user/IP, and comprehensive data visualization through charts and graphs. 
                    The system processes simulated log data including login events, file access operations, and configuration changes to identify suspicious patterns such as unusual access times and potential security breaches.
                    </p>
                   <div className='flex justify-center text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full '>
                       <Link href='/log_analysis'>
                            <button >
                                Go to project 
                            </button>
                       </Link>
                   </div>
                </div>
            </div>

            {/* Security Monitoring System  */}
            <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <Link href="/Security_server">
                        <Image
                            src={Security_log}
                            alt='Security Monitoring System'
                            layout="responsive"
                            width={800}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                        />
                    </Link> 
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Security Monitoring System</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                        A Flask-based security platform with role-based access control and comprehensive user activity monitoring. Features secure authentication, IP tracking, timestamp recording, and detailed audit trails for compliance. Administrators can view, download, and clear logs through an intuitive dashboard, while the system enforces strict access controls and session security. Designed with a responsive Tailwind CSS interface, the application provides robust user management and protection against unauthorized access to sensitive endpoints.
                    </p>
                    <Link href="/Security_server">
                        <button className='flex justify-center text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full'>
                            Go to project 
                        </button>
                    </Link>
                </div>
            </div>

            {/* Firewall */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <Link href="/Firewall">
                        <Image
                            src={Firewall_rate}
                            alt='Firewall Rate'
                            layout="responsive"
                            width={800}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                        />
                    </Link>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Firewall Rate</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                        A Python-based network firewall using Scapy for detecting and blocking various cyber threats. Features signature-based detection for SQL injection, XSS, and Log4j exploits, IP whitelisting/blacklisting, rate limiting to prevent DoS attacks, and protocol filtering. All security events are securely logged in an encrypted SQLite database. The modular architecture includes components for packet analysis, IP management, rate limiting, and encrypted logging, with built-in attack simulation tools for comprehensive testing.
                    </p>
                    <Link href="/Firewall">
                        <button className='flex justify-center text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full '>
                            Go to project 
                        </button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;

