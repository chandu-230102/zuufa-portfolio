"use client";

import { motion } from "framer-motion";

const techDescriptions = [
    "Microservices orchestrated across distributed Kubernetes clusters with CI/CD pipelines and zero-downtime deployments.",
    "Real-time AI inference with quantized transformer models on edge devices powered by TensorRT acceleration.",
    "Cloud-native architecture utilizing CDN edge caching, auto-scaling groups, and global failover strategies.",
    "Modular ERP systems interfacing via REST and WebSockets with event-driven microservices.",
    "CRM built with Lambda functions, message queues, and serverless WebSocket APIs handling millions of users.",
    "Progressive Web Apps (PWA) using Service Workers, dynamic imports, and code hydration on the fly.",
    "Database sharding with read replicas, connection pooling, and eventual consistency using event sourcing.",
    "Server optimization via NGINX reverse proxy, HTTP/2 multiplexing, Brotli compression and load balancing.",
    "IoT telemetry through MQTT brokers with real-time dashboards using WebGL rendering.",
];

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function WhyAndHow() {
    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
                <h1 className="text-3xl sm:text-5xl font-bold text-center mb-16 sm:mb-24">
                    How We Do It
                </h1>

                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 w-full lg:sticky lg:top-24 h-64 sm:h-[300px] lg:h-[80vh] mb-10 lg:mb-0">
                        <video
                            src="/videos/chip.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col gap-16 sm:gap-24 lg:pl-20">
                        {techDescriptions.map((desc, index) => (
                            <motion.p
                                key={index}
                                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                custom={index}
                            >
                                {desc}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
