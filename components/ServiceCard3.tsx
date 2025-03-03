"use client"

import Image from "next/image"

function ServiceCard3() {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[400px] md:w-[550px] xl:w-[600px] snap-center bg-white shadow-lg border border-gray-200 p-8 transition-transform hover:scale-[1.02]">
            <Image
                width={100}
                height={100}
                className=" rounded-lg object-contain bg-gray-100 p-3 shadow-md"
                src="IOT.svg"
                alt="Internet of Things"
            />
            <div className="px-6 text-center">
                <h4 className="text-2xl font-semibold text-gray-800">Internet of Things (IoT)</h4>
                <p className="font-medium text-lg text-gray-600 mt-2">Smart Connectivity Solutions</p>
                <div className="flex justify-center space-x-4 my-5">
                    <Image src="aws.svg" height={40} width={40} alt="AWS" />
                    <Image src="azure.svg" height={40} width={40} alt="Azure" />
                    <Image src="gcp.svg" height={40} width={40} alt="GCP" />
                    <Image src="docker.svg" height={40} width={40} alt="Docker" />
                </div>
                <p className="uppercase text-sm text-gray-500 mt-2">Connected Devices & Automation</p>
                <ul className="list-disc space-y-3 text-sm text-gray-700 mt-5 text-left px-8">
                    <li>Seamless device connectivity and automation.</li>
                    <li>IoT-enabled real-time monitoring solutions.</li>
                    <li>Smart home and industrial IoT integrations.</li>
                    <li>Secure cloud-based IoT platforms.</li>
                    <li>Data-driven insights for better decision-making.</li>
                </ul>
            </div>
        </article>
    )
}

export default ServiceCard3
