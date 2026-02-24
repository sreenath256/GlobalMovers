import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';

const ContactForm = ({ title = "Contact Us", desc = "Looking for professional storage and moving services. Let Global Icon Movers handle everything so you can focus on what matters. Reach out today for a free quote." }) => {
    
    // 1. Setup Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: ''
    });
    
    // 2. Setup States for Status and Errors
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errors, setErrors] = useState({}); // Tracks validation errors

    // 3. Handle standard inputs and clear errors on change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear the error for this field once the user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // 4. Handle PhoneInput specifically and clear error on change
    const handlePhoneChange = (value) => {
        setFormData(prev => ({ ...prev, phone: value }));
        
        if (errors.phone) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    // 5. Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- Custom Validation Logic ---
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.phone) newErrors.phone = "Mobile number is required.";
        if (!formData.service) newErrors.service = "Please select a service.";

        // If there are errors, set them in state and stop submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('loading');

        const serviceId = 'service_nbwtyxp';
        const templateId = 'template_fd3fovh';
        const publicKey = '8E1G2P4qNW91FN3Vb';

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                // Reset form
                setFormData({ name: '', phone: '', service: '' });
                
                // Reset success message after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('error');
            });
    };

    return (
        <div className="flex flex-col items-end">
            <div className="bg-white text-black p-8 rounded-3xl w-full max-w-md shadow-2xl mx-auto">
                <h2 className="text-3xl md:text-3xl font-medium mb-2 uppercase leading-snug text-center">
                    {title}
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-6 text-center">
                    {desc}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="sr-only">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-base outline-none transition-colors ${
                                errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-transparent focus:ring-2 focus:ring-gray-300'
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label className="sr-only">Mobile Number</label>
                        <div className={`rounded-lg transition-colors border ${errors.phone ? 'border-red-500' : 'border-transparent'}`}>
                            <PhoneInput
                                country={'ae'}
                                value={formData.phone}
                                onChange={handlePhoneChange}
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
                        {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                    </div>

                    {/* Service Field */}
                    <div>
                        <label className="sr-only">Service</label>
                        <div className="relative">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-base outline-none appearance-none text-gray-500 transition-colors ${
                                    errors.service ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-transparent focus:ring-2 focus:ring-gray-300'
                                }`}
                            >
                                <option value="" disabled>Select Service</option>
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
                        {errors.service && <p className="text-red-500 text-xs mt-1 ml-1">{errors.service}</p>}
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full bg-primary hover:bg-primaryHover text-white font-medium py-3 rounded-lg uppercase tracking-wide transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Sending...' : 'Submit Request'}
                    </button>
                    
                    {/* Feedback Messages */}
                    {status === 'success' && (
                        <p className="text-green-600 text-sm text-center mt-2 font-medium">Request sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600 text-sm text-center mt-2 font-medium">Failed to send. Please try again.</p>
                    )}
                </form>

                <div className="flex justify-center items-center mt-6 text-sm text-gray-500 font-medium uppercase">
                    <p className="text-center">Detailed Quote? <a href="#" className="hover:underline text-black">Contact Sales</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;