import FrontFace from "./frontFace";
import BackFace from "./backFace";

import bike_1 from "../../assets/bike_1.png";
import bike_2 from "../../assets/bike_2.png";
import bike_3 from "../../assets/bike_3.png";
import bike_4 from "../../assets/bike_4.png";

const CubeA = ({ sections }) => {
    return (
        <>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `rotateX(${index * 90}deg) translateZ(200px)`,
                        transformStyle: "preserve-3d",
                        backgroundImage: `url(${
                            section.productImage === "bike_1"
                            ? bike_1
                            : section.productImage === "bike_2"
                            ? bike_2
                            : section.productImage === "bike_3"
                            ? bike_3
                            : bike_4
                        })`,
                        backgroundSize: "cover",   
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        transition: "all 1s ease-out",
                        
                    }}
                >
                    <FrontFace section={section} index={index} />
                    {/* <BackFace section={section} index={index} /> */}
                </div>
            ))}
        </>
    );
};

export default CubeA;
