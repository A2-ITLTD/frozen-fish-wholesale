import { useEffect } from "react";
import bg4 from '../Images/bg4.jpg';
import bg8 from '../Images/bg8.jpg';
import fish2 from '../Images/fish2.png';
import { RiMedalLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
const About = () => {
    useEffect(() => {
        document.title = "About Us";
    }, []);
    return (
        <div className="">
            <div className='mt-5 px-5 md:px-28 flex flex-col md:flex-row justify-center items-top gap-14 p-0 md:p-10'>
                <div className='w-full md:w-1/2 flex flex-col gap-7 '>
                    <div className='flex flex-col gap-5 text-left'>
                        <img src={bg8} className="w-full h-44 object-cover object-center rounded-md" />
                        <h1 className='text-2xl md:text-3xl font-bold text-green-700 text-wrap'>Frozen Fish Wholesale Trading</h1>
                        <p className='text-lg font-normal text-gray-700 text-wrap'>With a state-of-the-art processing facility in Chittagong, Bangladesh, capable of handling 11,000MT of fish daily, we partner with leading fisheries in Asia and South America.</p>
                    </div>
                    <div className='flex flex-col gap-5 text-left'>
                        <h1 className='text-2xl md:text-4xl font-bold text-green-700 text-wrap flex gap-4 items-center'>
                            How it works
                        </h1>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap flex gap-5'>
                        <img src={fish2} className="w-12 h-12" /> 
                        Our Mission: Delivering premium, sustainably sourced frozen fish to global markets, ensuring quality, freshness, and competitive pricing for all our clients.
                        </p>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap flex gap-5'>
                        <img src={fish2} className="w-12 h-12" /> 
                        What We Offer: A diverse selection of frozen fish products, including eel, tuna, mackerel, and more, tailored to meet the needs of distributors, restaurants, and food service providers worldwide.
                        </p>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap flex gap-5'>
                        <img src={fish2} className="w-12 h-12" /> 
                        Our Commitment: We prioritize sustainability and ethical sourcing, working closely with trusted fisheries to ensure our products meet the highest industry standards.
                        </p>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap flex gap-5'>
                        <img src={fish2} className="w-12 h-12" /> 
                        Global Reach: With a robust distribution network, we supply frozen fish to over 50 port cities across the globe, ensuring timely and efficient deliveries.
                        </p>
                        <p className='text-lg font-normal text-gray-700 text-justify text-wrap flex gap-5'>
                        <img src={fish2} className="w-12 h-12" /> 
                        Customer Focus: We pride ourselves on exceptional customer service, offering personalized support and logistical expertise to ensure a seamless experience for our clients.
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full h-full rounded-md'>
                        <img src={bg4} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-16 items-center bg-green-600 mt-10 p-5 md:p-24">
                {/* card 1 */}
                <div className="card bg-white text-green-700 w-auto md:w-96 h-full">
                    <div className="card-body">
                        <RiMedalLine className="text-4xl"/>
                        <h2 className="card-title">Product Quality</h2>
                        <p>Our access to the world best-in-class frozen fish producers to provide a full range fish qualities with privileged access to very high quality fish</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-white text-green-700 w-auto md:w-96 h-full">
                    <div className="card-body">
                        <FaRegHandshake className="text-4xl" />
                        <h2 className="card-title">Reliability</h2>
                        <p>Our talented team and their commitment to deliver on what we promise aligned with our customer with high expectations.</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-white text-green-700 w-auto md:w-96 h-full">
                    <div className="card-body">
                        <CiStar className="text-4xl" />
                        <h2 className="card-title">Advisory</h2>
                        <p>Extensive trading and risk management expertise, experience across commodities, proximity to producers, and strong analytics to support our business partners.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;