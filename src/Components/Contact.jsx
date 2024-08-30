import { useEffect } from "react";
import { useState } from "react";
import bg5 from '../Images/bg5.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);


    const handleOrder = e => {
        e.preventDefault();
        const username = e.target.elements.user_name.value;
        const number = e.target.elements.user_phone.value;
        const email = e.target.elements.user_email.value;
        const item = e.target.elements.item.value;
        const quantity = e.target.elements.quantity.value;
        const address = e.target.elements.address.value;
        const message = e.target.elements.message.value;
        
        // send message to whatsapp
        const whatsappNumber = "+8801846937397" 


        var url = "https://wa.me/" + whatsappNumber + "?text="
        + "*Name :* " + username + "%0a"
        + "*Number :* " + number + "%0a"
        + "*Product Name :* " + item + "%0a"
        + "*Quantity :* " + quantity + "%0a"
        + "*Email :* " + email + "%0a"
        + "*Address :* " + address + "%0a"
        + "*Note :* " + message + "%0a%0a";

        window.open(url, '_blank').focus();
        
    
    };

    

    return (
        <div>
           <div className="relative w-full h-full shadow-2xl" 
            style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0)), url(${bg5})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-16 items-center py-16 px-5 md:px-28">
                {/* card 1 */}
                <div className="card glass text-gray-800 w-auto md:w-96 h-full">
                    <div className="card-body">
                        <FaLocationDot className="text-4xl"/>
                        <h2 className="card-title">Address</h2>
                        <p>Demo Address</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card glass text-gray-800 w-auto md:w-96 h-full">
                    <div className="card-body">
                        <FaPhoneSquareAlt className="text-4xl" />
                        <h2 className="card-title">Phone Number</h2>
                        <p>+880000000</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card glass text-gray-800 w-auto md:w-96 h-full">
                    <div className="card-body">
                        <MdEmail className="text-4xl" />
                        <h2 className="card-title">Email Address</h2>
                        <p>Email@gmail.com</p>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl md:text-5xl text-white font-bold text-center italic pb-5">Get In Touch</h1>
            {/* form */}
            <div className="w-full py-5 px-5 md:px-28 flex items-center justify-center">
                {/* form */}
                <div className="w-full md:w-2/3 glass p-3 md:p-10 rounded-md">
                <form onSubmit={handleOrder} className='flex flex-col w-full gap-5 border-none'>
                    <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 rounded text-base text-black' />
                    <input 
                    type="tel" 
                    required 
                    name="user_phone"  
                    placeholder="WhatsApp Number" 
                    className="py-2 px-5 rounded text-base text-black" 
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        }
                    }}
                    />
                    <input type="email" name="user_email" placeholder='Email' className='py-2 px-5  rounded text-base text-black' />

                    <select name="item" className="py-2 px-5  rounded text-base text-black">
                        <option value="none">Select a Product</option>
                        <option value="Shrimps">Shrimps</option>
                        <option value="Lobster">Lobster</option>
                        <option value="Eel">Eel</option>
                        <option value="Mud Crab">Mud Crab</option>
                        <option value="Tilapia">Tilapia</option>
                    </select>

                    <select name="quantity" className="py-2 px-5  rounded text-base text-black">
                        <option value="none">Select an amount</option>
                        <option value="50-100">50-100</option>
                        <option value="100-200">100-200</option>
                        <option value="200-500">200-500</option>
                        <option value="500-1000">500-1000</option>
                        <option value="1000-2000">1000-2000</option>
                    </select>

                    <textarea type="text" name="address" placeholder='Write Your Address' className='py-2 px-5  rounded text-base text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                    
                    <textarea type="text" name="message" placeholder='Any Message or change about product ?' className='py-2 px-5  rounded text-base text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                    
                    <button type="submit" value="Send" className='bg-green-400 text-white font-semibold p-5 rounded-md hover:bg-slate-700' >Send</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;