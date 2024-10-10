'use client'
import { EventButton } from "./components/EventButton";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    // Function to fetch GTM script
    const fetchGTM = async () => {
      try {
        const response = await fetch('https://server-side-tagging-plum.vercel.app/api/gtm');
        if (!response.ok) {
          throw new Error('Failed to fetch GTM script');
        }

        const scriptContent = await response.text();
        
        // Dynamically create and inject the script into the DOM (optional)
        const script = document.createElement('script');
        script.text = scriptContent;
        document.head.appendChild(script);

        console.log('GTM script loaded successfully');
      } catch (error) {
        console.error('Error loading GTM script:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchGTM();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Server Side Tagging</h1>
      <EventButton />
    </div>
  );
}
