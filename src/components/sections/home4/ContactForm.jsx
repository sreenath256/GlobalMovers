import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
    return (
        <div className="flex flex-col items-end">
            <div className="bg-white text-black p-8 rounded-3xl w-full max-w-md shadow-2xl">
                <h2 className="text-2xl font-semibold mb-2 uppercase leading-snug text-center">
                    Get a Quote
                </h2>
                <p className="text-gray-500 text-sm mb-6 text-center">
                    Fill out the form below and we will get back to you shortly.
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="sr-only">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gray-300 outline-none"
                        />
                    </div>
                    <div>
                        <label className="sr-only">Mobile Number</label>
                        <PhoneInput
                            country={'ae'}
                            inputStyle={{
                                width: '100%',
                                height: '44px',
                                backgroundColor: '#f3f4f6',
                                border: 'none',
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem',
                                paddingLeft: '48px'
                            }}
                            buttonStyle={{
                                backgroundColor: '#f3f4f6',
                                border: 'none',
                                borderRadius: '0.5rem 0 0 0.5rem',
                                paddingLeft: '5px'
                            }}
                            dropdownStyle={{
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                            placeholder="Mobile Number"
                            enableSearch={true}
                        />
                    </div>
                    <div>
                        <label className="sr-only">Service</label>
                        <div className="relative">
                            <select
                                className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gray-300 outline-none appearance-none text-gray-500"
                            >
                                <option value="" disabled selected>Select Service</option>
                                <option value="moving">Moving</option>
                                <option value="storage">Storage</option>
                                <option value="both">Both</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-primary hover:bg-primaryHover text-white font-medium py-3 rounded-lg uppercase tracking-wide transition-colors mt-2">
                        Submit Request
                    </button>
                </form>

                <div className="flex justify-center items-center mt-6 text-xs text-gray-500 font-medium uppercase">
                    <p className="text-center">Detailed Quote? <a href="#" className="hover:underline text-black">Contact Sales</a></p>
                </div>
            </div>
        </div>
    );
};


export default ContactForm;
