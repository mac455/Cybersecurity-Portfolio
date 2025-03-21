import React from 'react'
import Image from 'next/image'
import BackButton from '@/components/BackButton';

import Log_analysis from '../assets/Log_analysis.gif';
import { ClientImage } from '@/components/ClientImages';

const Log_Analysis = () => {
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
                            Log Analysis
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full w-1/3 mx-auto" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center md:w-4/5 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 p-4 mb-4">
                    Project overview
                </h1>
                <div className="leading-relaxed text-lg md:text-xl font-alegreya text-gray-700 mb-6 px-4 space-y-6 ">
                    <p className="relative pl-6 ">
                         A Flask-based dashboard that transforms log data into actionable security insights. This application visualizes system activity patterns to help security analysts quickly spot anomalies and potential threats.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Core Features</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Interactive dashboard </li>
                                <li>Advanced filtering by time, user, IP, and actions</li>
                                <li>Comprehensive visualization library</li>
                            </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-purple-800 mb-2">Technology Stack</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Backend: Python, Flask</li>
                                <li>Database: SQLite </li>
                                <li>Data Processing: Pandas, NumPy</li>
                                <li>Visualization: Matplotlib</li>
                            </ul>
                        </div>
                    </div>
                    
                    <p>
                        The system processes simulated log data that mirrors real-world security events, including user logins, file operations, and configuration changes. This data is generated to demonstrate typical usage patterns:
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <div className="flex-1 bg-gray-50 border-l-4 border-green-500 p-3">
                            <span className="block font-bold">9am-5pm Weekday Patterns</span>
                            Normal business hour activity
                        </div>
                        <div className="flex-1 bg-gray-50 border-l-4 border-yellow-500 p-3">
                            <span className="block font-bold">Weekend Variations</span>
                            Reduced legitimate activity
                        </div>
                        <div className="flex-1 bg-gray-50 border-l-4 border-red-500 p-3">
                            <span className="block font-bold">Anomaly Indicators</span>
                            Off-hours access attempts
                        </div>
                    </div>
                    
                    <p>
                        The dashboard&apos;s intuitive interface allows security analysts to focus on specific time periods to investigate anomalies. The search functionality supports queries across multiple parameters, enabling precise investigation of security events.
                    </p>
                </div>
            </div>
            <a className="block mx-auto text-base w-full text-center md:w-1/6 font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 hover:text-blue-600 transition-colors duration-300" 
            href='https://github.com/mac455/Log-Analysis-Server'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

            {/* Results & Discussion */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Demo</h1>
            <div className="px-4">
                    <ClientImage
                    src={Log_analysis}
                    alt="Log analysis"
                    width={600}
                    height={400}
                    unoptimized
                    className="mt-5 mb-5 mx-auto "
              />
            </div>
            
        </div>
    );
}

export default Log_Analysis;