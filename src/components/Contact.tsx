import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Check, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'surajkumare04@gmail.com',
      link: 'mailto:surajkumare04@gmail.com'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+91 9392836312',
      link: 'tel:+91 9392836312'
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Hyderabad, India',
      link: 'https://maps.app.goo.gl/R6PAjw8bYxJNhyMG6'
    }
  ];

  const inputClasses = "w-full rounded-lg border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400 shadow-sm transition-all duration-300";
  
  const inputErrorClasses = "border-error-300 text-error-900 placeholder-error-300 focus:border-error-500 focus:ring-error-500 dark:border-error-700 dark:text-error-100 dark:placeholder-error-700 dark:focus:border-error-500 dark:focus:ring-error-500";

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">Contact</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-600 dark:to-secondary-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative">Contact Information</h3>
            
            <p className="mb-8 text-primary-100 dark:text-primary-200 max-w-md relative">
              Feel free to reach out if you have any questions about my services or if you'd like to discuss a potential project.
            </p>
            
            <ul className="space-y-6 relative">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 text-white">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-primary-100 dark:text-primary-200">{item.label}</p>
                    <a 
                      href={item.link} 
                      className="text-white hover:text-primary-100 dark:hover:text-primary-200 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4">
              <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.name ? inputErrorClasses : ''}`}
                  placeholder="name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-error-600 dark:text-error-400 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.email ? inputErrorClasses : ''}`}
                  placeholder="yourname@gmail.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error-600 dark:text-error-400 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.message ? inputErrorClasses : ''}`}
                  placeholder="Type your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-error-600 dark:text-error-400 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex justify-center items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300
                  ${status === 'idle' ? 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600' : 
                    status === 'submitting' ? 'bg-primary-600 cursor-wait' : 
                    status === 'success' ? 'bg-success-600 dark:bg-success-500' : 
                    'bg-error-600 dark:bg-error-500'}`}
              >
                {status === 'idle' && (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
                {status === 'submitting' && (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check size={18} className="mr-2" />
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={18} className="mr-2" />
                    Please Try Again
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;