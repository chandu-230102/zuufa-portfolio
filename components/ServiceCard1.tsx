"use client"

import Image from "next/image"

function ServiceCard1() {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[400px] md:w-[550px] xl:w-[600px] snap-center bg-white shadow-lg border border-gray-200 p-8 transition-transform hover:scale-[1.02]">

            <Image
                width={100}
                height={100}
                className=" rounded-lg object-contain bg-gray-100 p-3 shadow-md"
                src="customsoft.svg"
                alt="Custom Software Development"
            />

            <div className="px-6 text-center">
                <h4 className="text-2xl font-semibold text-gray-800">Custom Software Development</h4>
                <p className="font-medium text-lg text-gray-600 mt-2">Tailored Solutions for Your Business</p>

                <div className="flex justify-center space-x-4 my-5">
                    <Image src="flutter.svg" height={40} width={40} alt="Flutter" />
                    <Image src="graphql.svg" height={40} width={40} alt="Graphql" />
                    <Image src="javascript.svg" height={40} width={40} alt="JS" />
                    <Image src="redux.svg" height={40} width={40} alt="Redux" />
                </div>
                <p className="uppercase text-sm text-gray-500 mt-2">Bespoke Web & App Development</p>

                <ul className="list-disc space-y-3 text-sm text-gray-700 mt-5 text-left px-8">
                    <li>Custom web and mobile applications built for scalability.</li>
                    <li>End-to-end development tailored to business needs.</li>
                    <li>Seamless integration with cloud and existing systems.</li>
                    <li>Secure, high-performance solutions with modern tech stack.</li>
                    <li>Optimized UX/UI design for better user experience.</li>
                </ul>
            </div>
        </article>
    )
}

export default ServiceCard1
