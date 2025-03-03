"use client"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactMe() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href = `mailto:info@zuufa.com?subject=${formdata.subject}&body=Hi, my name is ${formdata.name} and i would like to work with you. ${formdata.message} (${formdata.email})`
    }
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="h-screen flex relative flex-col text-center md:flex-row max-w-7xl md:text-left justify-evenly mx-auto items-center px-10">

            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between space-y-12 md:space-y-0">
                <div className="space-y-6 md:w-1/2">
                    <h2 className="text-xl sm:text-2xl uppercase tracking-[4px] sm:tracking-[20px] text-gray-500 text-center">
                        Contact Us@
                    </h2>
                    <h2 className="text-4xl font-bold tracking-tight">Lets Work Together</h2>
                    <p className="text-gray-400 text-lg">
                        Have a question or want to work with us? Feel free to reach out.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <PhoneIcon className="h-6 w-6 text-[#F7AB0A]" />
                            <p className="text-lg font-medium">+91 73374 28406</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <EnvelopeIcon className="h-6 w-6 text-[#F7AB0A]" />
                            <p className="text-lg font-medium">info@zuufa.com</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPinIcon className="h-6 w-6 text-[#F7AB0A]" />
                            <p className="text-lg font-medium">Madurai, Tamil Nadu</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 w-full md:w-1/2
                ">
                    <form
                        onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full sm:w-fit mx-auto px-4 sm:px-0">
                        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                            <input {...register("name")} placeholder="Name" type="text" className="contactInput" />
                            <input  {...register("email")} placeholder="Email" className="contactInput" type="email" />
                        </div>
                        <input {...register("subject")}
                            placeholder="Subject" className="contactInput" type="text" />
                        <textarea {...register("message")} placeholder="Message" className="contactInput" />
                        <button type="submit" className="w-full bg-[#F7AB0A] hover:bg-yellow-600 transition-all py-3 rounded-lg text-black font-semibold text-lg shadow-md">Submit</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactMe