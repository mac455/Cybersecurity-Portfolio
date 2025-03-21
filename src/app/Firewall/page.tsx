import React from 'react'
import BackButton from '@/components/BackButton';
import Firewall from '../assets/Firewall_rate.png';
import { ClientImage } from '@/components/ClientImages';

const Firewall_Page = () => {
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
                            Network Firewall
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full w-1/2 mx-auto" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center md:w-4/5 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 p-4 mb-4">
                    Project overview
                </h1>
                <div className="leading-relaxed text-lg md:text-xl font-alegreya text-gray-700 mb-6 px-4 space-y-6 ">
                    <p className="relative pl-6 ">
                        A Python-based network firewall built for monitoring and protecting networks from various cyber threats using signature detection, rate limiting, protocol filtering, and IP management. The system leverages Scapy for packet inspection and analysis.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Core Protection Features</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Signature-based attack detection (SQL injection, XSS, Log4j)</li>
                                <li>Rate limiting to prevent DoS attacks</li>
                                <li>Protocol filtering (blocks unwanted protocols like UDP)</li>
                                <li>IP whitelisting and blacklisting capabilities</li>
                            </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-purple-800 mb-2">Security & Logging</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Nimda worm detection and blocking</li>
                                <li>Encrypted logging with Fernet symmetric encryption</li>
                                <li>SQLite database for secure event storage</li>
                                <li>Attack simulation tools for security testing</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Architecture</h3>
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <div className="flex-1 bg-gray-50 border-l-4 border-blue-500 p-3">
                            <span className="block font-bold">PacketAnalyzer</span>
                            Examines packet contents for malicious patterns and signatures
                        </div>
                        <div className="flex-1 bg-gray-50 border-l-4 border-green-500 p-3">
                            <span className="block font-bold">IPManager</span>
                            Handles IP address whitelisting, blacklisting, and blocking
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <div className="flex-1 bg-gray-50 border-l-4 border-yellow-500 p-3">
                            <span className="block font-bold">RateLimiter</span>
                            Monitors and limits traffic rates from specific sources
                        </div>
                        <div className="flex-1 bg-gray-50 border-l-4 border-red-500 p-3">
                            <span className="block font-bold">Logger</span>
                            Securely stores encrypted logs of all detected events
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-green-800 mb-2">Technical Requirements</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Python 3.6+</li>
                                <li>Scapy for packet inspection</li>
                                <li>Cryptography for secure logging</li>
                                <li>Python-dotenv for configuration</li>
                                <li>SQLite for database storage</li>
                            </ul>
                        </div>
                        
                        <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-amber-800 mb-2">Signature Detection</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>SQL injection patterns</li>
                                <li>XSS attack vectors</li>
                                <li>Log4j exploitation attempts</li>
                                <li>Directory traversal attacks</li>
                                <li>Remote code execution patterns</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500 mt-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Attack Simulation</h3>
                        <p className="mb-2">The firewall includes tools to simulate various attacks for testing, including:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>SQL Injection attacks</li>
                            <li>Cross-Site Scripting (XSS)</li>
                            <li>Log4j Exploitation</li>
                            <li>Rate Limit Breach</li>
                            <li>UDP Flooding</li>
                            <li>Nimda Worm Attack</li>
                        </ul>
                        <p className="mt-3">These simulations allow security professionals to test the effectiveness of the firewall without exposing systems to actual threats.</p>
                    </div>
                    
                    
                </div>
            </div>
            <a className="block mx-auto text-base w-full text-center md:w-1/6 font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 hover:text-blue-600 transition-colors duration-300" 
            href='https://github.com/mac455/Python-Firewall'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

            {/* Demo */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Implementation</h1>
            <div className="px-4">
                <ClientImage
                    src={Firewall}
                    alt="Network Firewall"
                    width={600}
                    height={400}
                    unoptimized
                    className="mt-5 mb-5 mx-auto"
                />
            </div>
            
        </div>
    );
}

export default Firewall_Page;