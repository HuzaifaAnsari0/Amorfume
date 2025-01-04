import MaxWidthWrapper from "../../@/components/MaxWidthWrapper"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import axios from 'axios';
import { useState } from 'react';


function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA
  
    const handleChange = (e:any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        await axios.post(`${url}/contactus`, formData);
        alert('Message sent successfully');
        // Clear form or redirect user
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message');
      }
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            <Header />
        <MaxWidthWrapper>
        <section className="transition-colors duration-300 dark:bg-slate-800" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200 animate-fade-in">
                    Contact
                </p>
                <h2
                    className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl transition-all duration-300 hover:text-blue-600">
                    Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                    We are Listening
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-8 w-full">
                <div className="h-full pr-6 space-y-8">
                    <p className="mt-3 text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                        If you have any concerns related to 
                        our products or services, please feel free to contact us.
                        Fill out the form or send us an email.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F25763] text-gray-50 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400 transition-colors">Amor Eva Labs Amorfume 4, Andheri East, </p>
                                <p className="text-gray-600 dark:text-slate-400 transition-colors">Salma House, Marol Church Road, Mumbai, India</p>
                            </div>
                        </li>
                        <li className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F25763] text-gray-50 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400 transition-colors">Mobile: +91 9221097213</p>
                                <p className="text-gray-600 dark:text-slate-400 transition-colors">Mail: ai4fume@gmail.com <br/> info@amorfume.com </p>
                            </div>
                        </li>
                        <li className="flex items-start hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F25763] text-gray-50 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400 transition-colors">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400 transition-colors">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-6 md:p-12 bg-white dark:bg-slate-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" id="form">
                    <h2 className="mb-8 text-3xl font-bold dark:text-white text-center">Ready to Get Started?</h2>
                    <form onSubmit={handleSubmit} id="contactForm" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    placeholder="Your Name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full rounded-lg border border-gray-300 py-3 px-4 shadow-sm focus:border-[#F25763] focus:ring-2 focus:ring-[#F25763] dark:bg-slate-600 dark:text-white dark:border-gray-500 transition-all duration-300" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder="Your email address"
                                    required 
                                    className="w-full rounded-lg border border-gray-300 py-3 px-4 shadow-sm focus:border-[#F25763] focus:ring-2 focus:ring-[#F25763] dark:bg-slate-600 dark:text-white dark:border-gray-500 transition-all duration-300" 
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Your Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Write your message..." 
                                required 
                                className="w-full rounded-lg border border-gray-300 py-3 px-4 shadow-sm focus:border-[#F25763] focus:ring-2 focus:ring-[#F25763] dark:bg-slate-600 dark:text-white dark:border-gray-500 transition-all duration-300 min-h-[200px] resize-y"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="w-full md:w-auto bg-[#F25763] hover:bg-[#cc0010] text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </MaxWidthWrapper>
        <Footer />
        </div>
    )
}
export default Contact