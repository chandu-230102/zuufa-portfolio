"use client"

import Image from "next/image"

function ServiceCard2() {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[400px] md:w-[550px] xl:w-[600px] snap-center bg-white shadow-lg border border-gray-200 p-8 transition-transform hover:scale-[1.02]">
            <Image
                width={100}
                height={100}
                className=" rounded-lg object-contain bg-gray-100 p-3 shadow-md"
                src="AI.svg"
                alt="Artificial Intelligence"
            />
            <div className="px-6 text-center">
                <h4 className="text-2xl font-semibold text-gray-800">Artificial Intelligence</h4>
                <p className="font-medium text-lg text-gray-600 mt-2">Smart Solutions for Your Business</p>
                <div className="flex justify-center space-x-4 my-5">
                    <Image src="three.svg" height={40} width={40} alt="three.svg" />
                    <Image src="nginx.svg" height={40} width={40} alt="Azure" />
                    <Image src="AI.svg" height={40} width={40} alt="GCP" />
                    <Image src="gitlab.svg" height={40} width={40} alt="Docker" />
                </div>
                <p className="uppercase text-sm text-gray-500 mt-2">AI-Powered Development & Automation</p>
                <ul className="list-disc space-y-3 text-sm text-gray-700 mt-5 text-left px-8">
                    <li>Advanced AI models for automation and analytics.</li>
                    <li>Machine learning solutions tailored to business needs.</li>
                    <li>AI-powered chatbots and virtual assistants.</li>
                    <li>Data-driven insights and predictive analytics.</li>
                    <li>Seamless integration with cloud and enterprise systems.</li>
                </ul>
            </div>
        </article>
    )
}

export default ServiceCard2
