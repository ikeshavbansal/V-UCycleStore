import React, { useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";

import BgImageA from "./bgImageA";
import CubeA from "./cubeA";
import Tracker from "./tracker";
// import Loader from "../Components/Loader";

const SectionA = () => {
    const { scrollY } = useScroll();
    const adjustedScrollY = useTransform(scrollY, (y) => y / 2);

    const [sectionsData] = useState([
        {
            title: "Avenger",
            productImage: "bike_1",
            bgColor: "#FF6022",
            bgImage: "photo4",
            initialScale: 1.2,
            finalScale: 1,
        },
        {
            title: "Spiderman",
            productImage: "bike_2",
            bgColor: "#1E293B",
            bgImage: "photo5",
            initialScale: 1.2,
            finalScale: 1,
        },
        {
            title: "BatMan",
            productImage: "bike_3",
            bgColor: "#0F766E",
            bgImage: "photo6",
            initialScale: 1.2,
            finalScale: 1,
        },
        {
            title: "Hulk",
            productImage: "bike_4",
            bgColor: "#1D4ED8",
            bgImage: "photo1",
            initialScale: 1.2,
            finalScale: 1,
        },
    ]);

    // useEffect(() => {
    //     fetch(`https://the-ladder-opal.vercel.app/api/sections?type=sectiona`)
    //         .then((res) => res.json())
    //         .then((data) => setSectionsData(data))
    //         .catch((err) => console.error("Error fetching sections:", err));
    // }, []);

    const rotateX = useTransform(
        adjustedScrollY,
        [0, 400, 800, 1200],
        [0, -90, -180, -270]
    );

    const headerScale = useTransform(
        adjustedScrollY,
        [0, 400, 800, 1200],
        [1, 0.9, 0.85, 0.8]
    );

    return (
        <>
            {/* {sectionsData.length > 0 ? ( */}
                <div
                    className="h-[350vh] overflow-hidden"
                    style={{
                        fontFamily:
                            "var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))",
                    }}
                >
                    <BgImageA
                        sections={sectionsData}
                        adjustedScrollY={adjustedScrollY}
                    />

                    <div className="md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        <motion.h1
                            className="md:mb-[-50px] sm:mt-0 mt-14 md:-translate-x-1/2 text-[50px] md:text-[100px] text-[rgb(255,96,22)] font-[200px] z-10 text-center"
                            style={{ scale: headerScale }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            New Arrivals
                        </motion.h1>
                        <div className="relative  md:block hidden">
                            <motion.div
                                className="relative w-[90vw] max-w-[600px] aspect-[3/2]"
                                style={{
                                    rotateX,
                                    transformStyle: "preserve-3d",
                                    transition: "transform 1s ease-out",
                                }}
                            >
                                <CubeA sections={sectionsData} />
                            </motion.div>
                        </div>
                        <div className="md:hidden block">
                            {sectionsData.map((section, index) => (
                                <div
                                    key={index}
                                    className="relative mb-8 p-6 "
                                    style={{
                                        backgroundColor: section.bgColor,
                                    }}
                                >
                                    <h2 className="text-3xl font-light mb-4 text-white">
                                        {section.title}
                                    </h2>
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="fixed right-1/4 top-1/2 -translate-y-1/2 flex flex-col space-y-2 md:block hidden">
                        <Tracker
                            sections={sectionsData}
                            adjustedScrollY={adjustedScrollY}
                        />
                    </div>
                </div>
            {/* ) : (
                <AnimatePresence mode="wait">
                    <p>Loading</p>
                </AnimatePresence>
            )} */}
        </>
    );
};

export default SectionA;
