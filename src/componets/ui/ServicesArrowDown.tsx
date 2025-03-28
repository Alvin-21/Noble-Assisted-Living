'use client';

import { motion } from "motion/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function ServicesArrowDown() {
    return (
        <>
            <h1 className="text-3xl font-bold pr-2">Services</h1>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ArrowDownIcon className="w-7" />
            </motion.div>
        </>
    );
}