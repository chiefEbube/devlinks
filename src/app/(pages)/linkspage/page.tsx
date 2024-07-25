"use client"

import { useState, useEffect, FormEvent } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, getDoc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
import { auth, db } from '@/app/utils/firebase-config';

// Define TypeScript interfaces
interface Service {
    id: string;
    name: string;
}

interface ServiceLink {
    service: string;
    link: string;
}

const servicesList: Service[] = [
    { id: 'linkedin', name: 'LinkedIn' },
    { id: 'github', name: 'GitHub' },
    { id: 'twitter', name: 'Twitter' },
];

const LinksPage = () => {
    // Define state types
    const [serviceLinks, setServiceLinks] = useState<ServiceLink[]>([]);
    const [selectedService, setSelectedService] = useState<string>('');
    const [link, setLink] = useState<string>('');

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        setServiceLinks(userDoc.data()?.services || []);
                    }
                }
            } catch (error) {
                console.error('Error fetching links:', error);
                toast.error('Error fetching links');
            }
        };

        fetchLinks();
    }, []);

    const handleAddLink = async () => {
        if (selectedService && link) {
            try {
                const user = auth.currentUser;
                console.log(user)
                if (user) {
                    await updateDoc(doc(db, 'users', user.uid), {
                        services: arrayUnion({ service: selectedService, link })
                    });
                    setServiceLinks([...serviceLinks, { service: selectedService, link }]);
                    setSelectedService('');
                    setLink('');
                    toast.success('Link added successfully');
                } else {
                    toast.error('User is not authenticated');
                }
            } catch (error) {
                console.error('Error adding link:', error);
                toast.error('Error adding link');
            }
        }
    };

    const handleRemoveLink = async (serviceToRemove: ServiceLink) => {
        try {
            const user = auth.currentUser;
            if (user) {
                await updateDoc(doc(db, 'users', user.uid), {
                    services: arrayRemove(serviceToRemove)
                });
                setServiceLinks(serviceLinks.filter(link => link.service !== serviceToRemove.service || link.link !== serviceToRemove.link));
                toast.success('Link removed successfully');
            } else {
                toast.error('User is not authenticated');
            }
        } catch (error) {
            console.error('Error removing link:', error);
            toast.error('Error removing link');
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddLink();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="links-form">
                <div>
                    <label htmlFor="service">Select Service</label>
                    <select
                        id="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                    >
                        <option value="">Select a service</option>
                        {servicesList.map(service => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="link">Profile Link</label>
                    <input
                        id="link"
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Enter profile link"
                    />
                </div>
                <button type="submit">Add Link</button>
            </form>

            <div className="links-display mt-6">
                {serviceLinks.map(({ service, link }) => (
                    <div key={`${service}-${link}`} className="link-item">
                        <h3>{servicesList.find(s => s.id === service)?.name}:</h3>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {link}
                        </a>
                        <button onClick={() => handleRemoveLink({ service, link })}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinksPage;
