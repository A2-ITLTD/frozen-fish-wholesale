import { Link } from "react-router-dom";
import bg11 from "../Images/bg11.jpg";
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
                <img src={bg11} className="w-full h-full object-cover object-left md:object-center" />
                <div className="absolute inset-0 flex justify-center items-center text-white text-center">
                    <div className="flex flex-col gap-6 items-center">
                        <h1 className="text-3xl md:text-5xl font-semibold italic">
                            Welcome to the leading source for premium frozen fish. <br /> 
                            <span className="text-lg">
                                Where quality meets unbeatable prices—delivering the freshest catch from sea to your doorstep, all year round.
                            </span>
                        </h1>
                        <div className="divider divider-warning">
                            <FaRegCircleDot className="text-6xl" />
                        </div>
                        <button className="w-fit text-green-600 font-bold text-3xl hover:text-black bg-white px-8 py-3 rounded-md">
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
            {/* how we work */}
            <section className="mt-20 px-5 md:px-28">
            <h1 className="text-3xl md:text-4xl text-green-700 text-center font-semibold italic">How Do We Work ?</h1>
            <p className="text-base text-gray-700 py-3 text-center font-semibold pb-12">Eating fresh and delicious fish has never been easier</p>
                {/* CARD */}
                <div className='flex flex-col md:flex-row items-center gap-5 md:gap-28'>
                    {/* card 1 */}
                    <div className="card bg-green-300 text-primary-content w-full md:w-96">
                        <div className="card-body">
                            <p className='text-gray-900 text-2xl font-semibold'>Free Shipping</p>
                            <ul className='text-gray-700 text-base text-left'>
                                <li>Get Free Shipping on all orders over BDT 10,000</li>
                            </ul>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card bg-green-300 text-primary-content w-full md:w-96">
                        <div className="card-body">
                            <p className='text-black text-2xl font-semibold'>Customer Service</p>
                            <ul className='text-black text-base text-left'>
                                <li>24/7 Customer Support . We are ready to help you. </li>
                            </ul>
                        </div>
                    </div>
                     {/* card 3 */}
                     <div className="card bg-green-300 text-primary-content w-full md:w-96">
                        <div className="card-body">
                            <p className='text-black text-2xl font-semibold'>Fast Delivery</p>
                            <ul className='text-black text-base text-left'>
                            <li>Items are dispatched from the Dhaka and will be arrive within 2 days.</li>
                            </ul>
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
                    <div className="w-full md:w-3/5 text-center md:text-right flex flex-col gap-5">
                        <h1 className="text-2xl md:text-5xl text-green-700 font-bold italic">Why Frozen Fish is Better?</h1>
                        <p className='text-wrap text-justify'>We are a family-owned company that delivers new, frozen fish right to your door. We currently stock over 200 different items from around the world, enabling us to welcome you into our freezers.
                        Our fish is frozen at sea within 4 hours of being captured, ensuring the freshest and tastiest seafood. Fresh fish takes several days to travel from the water to the supermarket or fishmonger, losing its freshness along the way. Frozen fish retains all of the nutrients and goodness that the same fish would have if eaten fresh from the sea.
                        We can also provide a larger variety of fish by offering frozen fish from all over the world. This means you can try something new without having to wait for your favourite fish to be in season. We don't just market frozen eels; we specialise in jellied eels, and Gordon Ramsay has even paid us a visit to learn from Frank.</p>
                    </div>
                </div>
            </section>
            {/* our speciality */}
            <section className='mt-28 px-5 md:px-28'>
                <div>
                 {/* 1 */}
                <div className="flex flex-col md:flex-row items-center h-full">
                    <div className="w-full md:w-1/2 h-full md:h-96 bg-blue-600 opacity-80 text-left flex flex-col justify-center p-12 gap-3">
                        <h1 className="text-white text-4xl font-semibold">Our Story</h1>
                        <p className="text-white text-justify">
                            In 1976, a sport fisherman, business partner, boat captain and gourmet chef joined forces to open The Fish Market. With a pure love of seafood and a single goal in mind, they went on to build one of California’s most beloved seafood institutions.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-96">
                        <img src={bg3} className="w-full h-full object-cover" />
                    </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center h-full">
                    <div className="w-full md:w-1/2  h-full md:h-96 bg-red-600 opacity-80 text-left flex flex-col justify-center p-12 gap-3">
                        <h1 className="text-white text-4xl font-semibold">Retail Market</h1>
                        <p className="text-white text-justify">
                            Our guests can take part in our commitment to high-quality seafood not only by dining with us, but also by shopping at our retail markets. Located in the front of each restaurant location, our skilled ‘marketeers’ assist guests in selecting seafood straight from local boats and fisheries.s.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-96">
                        <img src={bg2} className="w-full h-full object-cover" />
                    </div>
                </div>
                {/* 1 */}
                <div className="flex flex-col md:flex-row items-center h-full">
                    <div className="w-full md:w-1/2  h-full md:h-96 bg-yellow-500 opacity-80 text-left flex flex-col justify-center p-12 gap-3">
                        <h1 className="text-white text-4xl font-semibold">Community</h1>
                        <p className="text-white text-justify">
                            The success of our restaurants is dependent on the success of the communities in which we operate. We endeavor to give back year round by donating gift cards to or serving Fish Market classics at charity fundraisers, through our quarterly Giving Sips program and more.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-96">
                        <img src={bg7} className="w-full h-full object-cover" />
                    </div>
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