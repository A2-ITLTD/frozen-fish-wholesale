import { Link } from "react-router-dom";
import bg10 from "../Images/bg10.jpg";
import bg1 from "../Images/bg1.jpg";
import bg2 from "../Images/bg2.jpg";
import bg3 from "../Images/bg3.jpg";
import bg7 from "../Images/bg7.jpg";
import orangebg from "../Images/orangebg.jpg";
import { FaRegCircleDot } from "react-icons/fa6";
import { AiOutlineAlibaba } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import i1 from "../Images/it1.jpg";
import i2 from "../Images/it2.jpg";
import i3 from "../Images/it3.jpg";
import i4 from "../Images/it4.jpg";
import i5 from "../Images/it5.jpg";

import d1 from "../Images/d1.jpg";
import d2 from "../Images/d2.jpg";
import d3 from "../Images/d3.jpg";
import d4 from "../Images/d4.jpg";
import d5 from "../Images/d5.jpg";

import fish from "../Images/fish.png";
import user from "../Images/user.png";


const Banner = () => {
    return (
        <div >  
           {/* main banner */}
           <section className="relative w-full h-[700px]">
            <img src={bg1} className='w-full h-full object-cover object-left md:object-center' />
            <div className='absolute left-28 top-20 md:top-20 text-white flex flex-col justify-center text-center '>
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-5xl font-semibold italic">Welcome to the leading source for premium frozen fish. <br /> 
                    <span className="text-lg ">
                    Where quality meets unbeatable prices—delivering the freshest catch from sea to your doorstep, all year round.
                    </span>
                    </h1>
                    <div className="divider divider-warning"><FaRegCircleDot className='text-6xl' /></div>
                    <button className='w-fit items-center text-green-600 font-bold text-3xl hover:text-black bg-white px-8 py-3 rounded-md'>
                        <Link to="/allproducts">Shop Now</Link>
                    </button>
                </div>
            </div>
            </section>
            {/* alibab button */}
            <section className="my-16 relative w-full h-32 rounded-md flex items-center justify-center">
                <img src={orangebg} className='absolute inset-0 w-full h-full object-cover object-left md:object-center rounded-md' />
                <div className='relative z-10'>
                    <Link to="/" className='flex gap-2 items-center bg-white hover:bg-slate-200 text-[#FF6701] text-sm md:text-2xl font-bold py-2 px-3 md:px-8 rounded-md'>
                    Get In Touch With Alibaba <AiOutlineAlibaba className='text-base md:text-5xl' />
                    </Link>
                </div>
            </section>
            {/* best setting products */}
            <section className='mt-20 px-5 md:px-28'>
                <h1 className="text-4xl text-green-700 text-center font-semibold italic">Frozen Fish Wholesale Specials</h1>
                <p className="text-base text-gray-700 py-3 text-center font-semibold pb-12">Frozen Fish, Seafood Delivered To Your Door & Online Fishmonger</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>
                {/* 1 */}
                <div className="card bg-base-100 w-full md:w-96 h-fulls shadow-xl">
                    <figure>
                        <img
                        src={i1}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col gap-4">
                        <h2 className="card-title text-base">
                        Frozen shrimp seafood black tiger prawn OEM box style packaging
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price : $11.14-$14.65 / Kgs</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Frozen Fish</div>
                        <div className="badge badge-outline">Black Tiger Shrimp</div>
                        <Link to={`/item/1`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                    <figure>
                        <img
                        src={i2}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col gap-4">
                        <h2 className="card-title text-base">
                        Best Quality Lobsters Healthy Seafood Items with High Quality
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price : $27.71-$30.14 / Kgs</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Frozen Fish</div>
                        <div className="badge badge-outline">Rock lobster</div>
                        <Link to={`/item/2`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                    <figure>
                        <img
                        src={i3}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col gap-4">
                        <h2 className="card-title text-base">
                        Eel Fish 100% Frozen Export Oriented High Quality Cheap Price
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price : $2.35-$5.40 / Kgs</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Frozen Fish</div>
                        <div className="badge badge-outline">Freshwater Drum</div>
                        <Link to={`/item/3`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                    <figure>
                        <img
                        src={i4}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col gap-4">
                        <h2 className="card-title text-base">
                        Mud Crab 100% Fresh Export Oriented High Quality Cheap Price
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price : $3.50-$6.75 / Kgs</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Frozen Fish</div>
                        <div className="badge badge-outline">Scylla Serrata</div>
                        <Link to={`/item/4`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                    <figure>
                        <img
                        src={i5}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body flex flex-col gap-4">
                        <h2 className="card-title text-base">
                        Wholesale Frozen Tilapia Fresh Tilapia Supplier Block Bulk for sale
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price : $1.40-$2.60 / Kgs</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Frozen Fish</div>
                        <div className="badge badge-outline">Tilapia</div>
                        <Link to={`/item/5`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* featred products */}
            <section className='mt-20 px-5 md:px-28'>
                <h1 className="text-4xl text-green-700 text-center font-semibold italic">To Make Your Best Meal</h1>
                <p className="text-base text-gray-700 py-3 text-center font-semibold pb-12">The freshest and most exciting recipes
                </p>
                <div className="flex items-center gap-5">
                    <div className="w-1/2 h-full">
                        <img src={d1} alt="" />
                    </div>
                    <div className="w-1/2 h-full grid grid-cols-2 gap-5">
                        <img src={d2} className="w-full h-full object-cover object-center" />
                        <img src={d3} className="w-full h-full object-cover object-center" />
                        <img src={d4} className="w-full h-full object-cover object-center" />
                        <img src={d5} className="w-full h-full object-cover object-center" />
                    </div>
                </div>
            </section>
            {/* Why Frozen Fish is Better? */}
            <section className='mt-28 px-5 md:px-28'>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-2/5">
                        <img src={fish} alt="" />
                    </div>
                    <div className="w-full md:w-3/5 text-right flex flex-col gap-5">
                        <h1 className="text-2xl md:text-5xl text-green-700 font-bold italic">Why Frozen Fish is Better?</h1>
                        <p className='text-wrap text-justify'>We are a family-owned company that delivers new, frozen fish right to your door. We currently stock over 200 different items from around the world, enabling us to welcome you into our freezers.
                        Our fish is frozen at sea within 4 hours of being captured, ensuring the freshest and tastiest seafood. Fresh fish takes several days to travel from the water to the supermarket or fishmonger, losing its freshness along the way. Frozen fish retains all of the nutrients and goodness that the same fish would have if eaten fresh from the sea.
                        We can also provide a larger variety of fish by offering frozen fish from all over the world. This means you can try something new without having to wait for your favourite fish to be in season. We don't just market frozen eels; we specialise in jellied eels, and Gordon Ramsay has even paid us a visit to learn from Frank.</p>
                    </div>
                </div>
            </section>
            {/* our speciality */}
            <section className='mt-28 px-5 md:px-28'>
                <div
                    className="relative w-full h-auto md:h-[400px] flex items-center justify-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      
                    >
                    <div className="relative text-center flex flex-col gap-5 items-center py-5 px-5 md:px-28 text-white">
                        <h1 className="text-2xl md:text-5xl text-green-400 font-bold">Our Specialty</h1>
                        <p className='text-wrap text-justify md:text-center'>We offer a wide range of premium frozen fish products, including eel, tuna, and mackerel, all sourced directly from trusted fisheries. Benefit from direct shipments with no broker fees, ensuring the highest quality and freshness. Our stringent quality controls also guarantee no cross-contamination. For more information or to check availability in your region, please contact your local distributor.</p>
                        <Link to="/about" className="mt-4 px-6 py-2 w-fit bg-green-400 text-white rounded-lg">Learn More</Link>
                    </div>
                </div>
            </section>
            {/* testimonials */}
            <section className='my-28 px-5 md:px-28'>
                <h1 className="text-2xl md:text-5xl text-green-700 font-bold text-center italic pb-12">Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-5 bg-base-200 flex flex-col gap-5 rounded-md">
                        <div className="flex items-center gap-3 text-yellow-400">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <p className="text-justify">
                            "MCS Global Seafood Trading has been our go-to supplier for premium frozen fish for over two years now. Their products are consistently fresh, and the quality is unmatched. We've seen a noticeable improvement in our dishes since switching to their eel and mackerel. The team's professionalism and commitment to timely deliveries make them a pleasure to work with. Highly recommended!"
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                                <img src={user} className="w-12" />
                                <p> — Chef Daniel R., Gourmet Seafood Restaurant</p>
                            </div>
                      </div>

                      <div className="p-5 bg-base-200 flex flex-col gap-5 rounded-md">
                        <div className="flex items-center gap-3 text-yellow-400">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <p className="text-justify">
                            "As a seafood distributor, I rely on suppliers who can deliver both quality and consistency. MCS Global Seafood Trading has exceeded my expectations every time. The fish arrives perfectly frozen, without any signs of freezer burn or damage. My clients are always impressed with the taste and freshness. Plus, the customer service is top-notch, always ready to assist with any queries."
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                                <img src={user} className="w-12" />
                                <p> Emily S., Wholesale Distributor</p>
                            </div>
                      </div>

                      <div className="p-5 bg-base-200 flex flex-col gap-5 rounded-md">
                        <div className="flex items-center gap-3 text-yellow-400">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div>
                            <p className="text-justify">
                            "I've been purchasing frozen fish from MCS Global Seafood Trading for my catering business, and I couldn't be happier. The variety they offer is impressive, and the quality is always excellent. Their attention to detail, from packaging to delivery, ensures that I receive my orders in perfect condition every time. It's clear that they care about their customers and the products they deliver."
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                                <img src={user} className="w-12" />
                                <p> Michael L., Catering Business Owner</p>
                            </div>
                      </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;