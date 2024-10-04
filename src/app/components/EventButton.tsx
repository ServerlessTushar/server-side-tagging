'use client';

// import { useState } from 'react';

// export function EventButton() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleClick = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('/api/gtm', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           event: 'buttonClicked',
//           data: { value: 'xyz' },
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Network response was not ok');
//       }

//       const result = await response.json();
//       console.log(result);

//       // Push to dataLayer
//       if (typeof window !== 'undefined' && window.dataLayer) {
//         window.dataLayer.push({
//           event: 'buttonClicked',
//           data: { value: 'xyz' },
//         });
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to send event');
//       console.error("event button error: ", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <button 
//         onClick={handleClick} 
//         disabled={loading} 
//         className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200'
//       >
//         {loading ? 'Sending...' : 'Send Event'}
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </>
//   );
// }


export function EventButton() {
  //const [loading, setLoading] = useState(false);
 //const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      // Push event to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "button_click", // Event name
        data: {
          VALUE: "xyz",
          CTA_Button_Text: "Send Event",
          Landing_Page_URL: `homepage`,
        },
      });

      console.log('Event sent to GTM dataLayer');
    }
  };

  // const handleClick = async () => {
  //   sendGTMEvent({
  //     event: "Button Click",
  //     value: {
  //       "CTA Button text": 'Send Event',
  //       "Landing Page URL": "homepage",
  //     },
  //   })
  // }

    return (
    <>
      <button 
        onClick={handleClick} 
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200'
      >
        Send Event
      </button>
      {/* {error && <p className="text-red-500">{error}</p>} */}
    </>
  );
}


// 'use client';

// //import { sendGTMEvent } from '@next/third-parties/google';
// import { useState } from 'react';
// import { usePathname } from 'next/navigation';

// export function EventButton() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const pathname = usePathname(); 

//   const handleClick = async () => {
//     setLoading(true);
//     setError(null);
  
//     try {
//       const response = await fetch('/api/gtm', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           event: "Button Clicked",
//           data: {
//             "VALUE": "xyz",
//             "CTA Button text": "Send Event",
//             "Landing Page URL": `https://localhost:3000${pathname}`,
//           },
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to send event to server');
//       }
  
//       console.log('Event sent to server successfully');
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to send event');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   // const handleClick = async () => {
//   //   setLoading(true);
//   //   setError(null);

//   //   try {
//   //     // Send the event to the server
//   //     const response = await fetch('/api/gtm', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         event: "Button Clicked",
//   //         data: {
//   //           "VALUE": "xyz",
//   //           "CTA Button text": "Send Event",
//   //           "Landing Page URL": `https://localhost:3003${pathname}`,
//   //         },
//   //       }),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error('Failed to send event to server');
//   //     }

//   //     console.log('Event sent to server successfully');
//   //   } catch (err) {
//   //     setError(err instanceof Error ? err.message : 'Failed to send event');
//   //     console.error(err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <>
//       <button 
//         id="my-button"
//         onClick={handleClick} 
//         disabled={loading} 
//         className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200'
//       >
//         {loading ? 'Sending...' : 'Send Event'}
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </>
//   );
// }