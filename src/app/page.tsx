'use client';

import React from 'react';
import Image from 'next/image';
import folio_pic_2 from '../app/assets/folio_pic_2.webp';
import Log_analysis from '../app/assets/Log_analysis.gif';
import Security_server from '../app/assets/Security_server.gif';
import Firewall from '../app/assets/Firewall_rate.png';
import thesis from '../app/assets/Thesis.png';
import './globals.css';
import Link from 'next/link';
import { ClientImage } from '@/components/ClientImages';
import { melb_data } from '@/components/ImageData';
import ImageGallery from '@/components/ImageGallery';

export default function Home() {
  return (
    <>
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-6 md:p-10 mt-20 md:mt-20 gap-8 md:gap-20 ">
        <div className="flex justify-center mb-6 lg:mb-0">
          <Image
            className="h-40 w-40 sm:h-60 sm:w-60 lg:h-96 lg:w-96 rounded-full object-cover object-center"
            src={folio_pic_2}
            alt="headshot image"
            priority
          />
        </div>
        <div className="flex flex-col text-center w-full sm:w-3/4 md:w-2/3 lg:w-2/4 p-4 md:p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-indigo-900 bg-clip-text text-transparent">
            SOC Analyst <br /> 
          </h1>
          <h2 className="font-alegreya text-base sm:text-lg lg:text-2xl font-light mt-4 leading-relaxed">
            Final semester MSc Computing student and CompTIA Security+ certified professional with hands-on experience in log analysis, security monitoring, and network security. 
            Experienced in developing Python-based security tools with working knowledge of Splunk for threat detection and analysis.
          </h2>
          <Link href="/contact">
            <button className="font-inter text-sm sm:text-lg lg:text-xl mt-4 ml-auto mr-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-800">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-left from-blue-500 to-indigo-900 h-auto flex flex-col justify-center text-white pb-10 md:pb-24">
        <div className="flex flex-col bg-gray-800 justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-6 sm:mt-10 mb-3 sm:mb-5">Welcome!</h2>
          <p className="w-full sm:w-3/4 lg:w-4/5 mx-auto text-base sm:text-xl lg:text-2xl font-alegreya p-4">
            
            Welcome to my cybersecurity portfolio showcasing Python-based projects in security monitoring, network security, and log analysis. <br/> Currently developing a thesis on real-time, explainable and lightweight intrusion detection for IoT devices, while pursuing Linux certification to complement my networking and Splunk certifications.
          </p>
        </div>
        
        {/*Thesis*/}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">MSc Thesis</h1>
          <p className="w-full sm:w-3/4 lg:w-4/5 mx-auto mt-5">
            Developing a lightweight and efficient malware detection model for IoT devices using XGBoost, optimised with quantisation for edge deployment. The project uses the IoT-23 dataset to create a model that achieves over 90% accuracy while requiring minimal computational resources (under 10MB size, less than 10ms inference time). Includes SHAP/LIME explainability features to interpret model decisions and performance comparisons with larger deep learning models.
          </p>
          
          <Image
            className="mt-5 mb-5 mx-auto "
            src={thesis}
            alt="IoT malware detection thesis visualization"
            width={600}
            height={400}
          />
        </div>

        {/* Log Data Analysis */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <div>
            <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl"> Log Data Analysis </h1>
            <p className="w-full sm:w-3/4 lg:w-4/5 mx-auto mt-5">
             Python-based log analysis dashboard with multiple visualization types including user activity distribution, security metrics, and anomaly detection.<br/> Processes simulated log files to provide actionable security recommendations.
            </p>
            <div className="cursor-pointer">
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

          {/* Security Monitoring System */}
          <div className="flex justify-center">
            <div className="flex flex-col justify-center mt-6 sm:mt-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">Security Monitoring System</h1>
              <p className="w-full sm:w-4/5 lg:w-3/5 mx-auto mt-5">
               Python-based security platform with comprehensive user activity logging and role-based access control. Tracks page access with timestamps and IP addresses, allowing administrators to manage logs and user permissions.
              </p>
              <div className="cursor-pointer">
                <ClientImage
                src={Security_server}
                alt="Security server"
                width={600}
                height={400}
                unoptimized
                className="mt-5 mb-5 mx-auto "
                />
              </div>
            </div>
          </div>
        </div>
        {/* Firewall */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">Firewall</h1>
          <p className="w-full sm:w-3/4 lg:w-4/5 mx-auto mt-5">
            Currently working on a Python-based network firewall using Scapy for packet inspection and filtering. Capable of detecting and blocking various attack vectors including SQL injection, XSS, Log4j exploits, and DDoS attempts. Features IP blacklisting, protocol-based filtering, rate limiting, and comprehensive logging stored in an encrypted SQLite database.
          </p>
          <Image
            src={Firewall}
            alt="Firewall"
            width={600}
            height={400}
            className="mt-5 mb-5 mx-auto "
          />
          
        </div>


        
      </div>
    </>
  );
}
