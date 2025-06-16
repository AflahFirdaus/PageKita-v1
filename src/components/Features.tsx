import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaDatabase, FaTools, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaCode className="w-8 h-8 text-primary" />,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code following best practices and design patterns.'
  },
  {
    icon: <FaMobile className="w-8 h-8 text-primary" />,
    title: 'Responsive Design',
    description: 'Creating beautiful and functional interfaces that work perfectly on all devices.'
  },
  {
    icon: <FaServer className="w-8 h-8 text-primary" />,
    title: 'Backend Development',
    description: 'Building robust server-side applications with modern technologies and frameworks.'
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-primary" />,
    title: 'Database Design',
    description: 'Designing efficient database structures and optimizing query performance.'
  },
  {
    icon: <FaTools className="w-8 h-8 text-primary" />,
    title: 'DevOps',
    description: 'Implementing CI/CD pipelines and managing cloud infrastructure.'
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
    title: 'Security',
    description: 'Implementing best security practices and protecting against common vulnerabilities.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized in modern web development technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 