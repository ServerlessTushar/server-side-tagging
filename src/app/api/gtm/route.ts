// import { NextResponse } from 'next/server';

// export async function GET(req: Request) {
//     try{
//     //console.log('Received event data:', req);
//     const { event, data } = await req.json();

//     // Validate the incoming data
//     if (!event) {
//         return NextResponse.json({ error: 'Event is required' }, { status: 400 });
//     }

//     // Log the event data (or process it as needed)
//     console.log('Event:', event);
//     console.log('Data:', data);

//     // Get the GTM ID from environment variables
//     const gtmId = 'GTM-M3R4LGJG' //'GTM-T9BNSS83';

//     // Example: Send data to GTM
//     try {
//         const gtmEndpoint = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        
//         // Here you would typically send a request to your GTM server-side endpoint
//         // This is a placeholder for the actual implementation
//         await fetch(gtmEndpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ event, data }),
//         });

//     //     // Respond with a success message
//         return NextResponse.json({ message: 'Event received successfully' });
//     } catch (error) {
//         console.error('Error sending data to GTM:', error);
//         return NextResponse.json({ error: 'Failed to send data to GTM' }, { status: 500 });
//     }
// } catch (error) {
//     console.error('Error processing event:', error);
//     return NextResponse.json({ error: 'Failed to process event' }, { status: 500 });
// }
// }

//import { NextResponse } from 'next/server';

//const allowedOrigins = ['http://localhost:3003']; // Add other allowed origins here

// export async function POST(req: Request) {
//   //const origin = req.headers.get('origin');

// //   // Check if the request's origin is allowed
// //   if (origin && !allowedOrigins.includes(origin)) {
// //     return NextResponse.json(
// //       { error: 'CORS policy does not allow access from this origin' },
// //       { status: 403 }
// //     );
// //   }

//   try {
//     // Parse the incoming request body
//     const { event, data } = await req.json();

//     // Validate the event
//     if (!event) {
//       return NextResponse.json(
//         { error: 'Event is required' },
//         { status: 400 }
//       );
//     }

//     // Log the received event and data for debugging
//     console.log('Event:', event);
//     console.log('Data:', data);

//     // Define your GTM server endpoint
//     const gtmServerEndpoint = 'http://localhost:3003/api/gtm'; // Replace with your actual endpoint

//     // Send the event data to the GTM server
//     const gtmResponse = await fetch(gtmServerEndpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         dataLayer: [
//           {
//             event: 'Button Clicked',
//             data: data,
//           },
//         ],
//       }),
//     });

//     // Check the response from the GTM server
//     if (!gtmResponse.ok) {
//       const errorMessage = await gtmResponse.text();
//       console.error('GTM request failed:', errorMessage);
//       return NextResponse.json(
//         { error: 'Failed to send data to GTM' },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { message: 'Event received successfully' },
//     //   {
//     //     status: 200,
//     //     headers: {
//     //       'Access-Control-Allow-Origin': origin || '*',
//     //       'Access-Control-Allow-Methods': 'POST, OPTIONS',
//     //       'Access-Control-Allow-Headers': 'Content-Type',
//     //     },
//     //   }
//     );
//   } catch (error) {
//     console.error('Error processing event:', error);
//     return NextResponse.json(
//       { error: 'Failed to process event' },
//       { status: 500 }
//     );
//   }
// }

//-----------

// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//     try {
//         const { event, data } = await req.json();

//         // Validate the incoming data
//         if (!event) {
//             return NextResponse.json({ error: 'Event is required' }, { status: 400 });
//         }

//         // Log the event data
//         console.log('Event:', event);
//         console.log('Data:', data);

//         // Process the event data as needed
//         return NextResponse.json({ message: 'Event received successfully' });
//     } catch (error) {
//         console.error('Error processing event:', error);
//         return NextResponse.json({ error: 'Failed to process event' }, { status: 500 });
//     }
// }

//------------------

//// app/api/gtm/route.ts
// import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Path to the gtm.js file in your project (adjust the path as necessary)
  const gtmFilePath = join(process.cwd(), 'src', 'scripts', 'gtm.js');
  const gtmScript = readFileSync(gtmFilePath, 'utf8');

  // Return the script with the correct content type
  return new NextResponse(gtmScript, {
    headers: {
      'Content-Type': 'application/javascript',
    },
  });
}

//--------------------

// app/api/gtm/route.ts (or route.js if using JavaScript)
// import { NextRequest, NextResponse } from 'next/server';

// Handle POST requests (for custom events from EventButton)
export async function POST(req: NextRequest) {
    try {
      const eventData = await req.json(); // Parse the event data from the request body
      console.log('Event data received:', eventData);
  
      // You can add logic here to process the event, send it to a third-party service, etc.
  
      return new NextResponse(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error processing event:', error);
      return new NextResponse(JSON.stringify({ error: 'Failed to process event' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  
  // Handle GET requests (for loading GTM script)
// export async function GET(req: NextRequest) {
//   const gtmId = req.nextUrl.searchParams.get('id'); // Get GTM ID from query parameters
//   const gtmUrl = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`; // Google's GTM URL with your GTM ID

//   try {
//     const response = await fetch(gtmUrl); // Fetch GTM script from Google
//     const gtmScript = await response.text(); // Get the script content as text

//     return new NextResponse(gtmScript, {
//       headers: {
//         'Content-Type': 'application/javascript',
//       },
//     });
//   } catch (error) {
//     return new NextResponse(JSON.stringify({ error: 'Failed to load GTM script' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }

//----------------------


// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const { event, data } = await req.json();

//     if (!event) {
//       return NextResponse.json({ error: 'Event is required' }, { status: 400 });
//     }

//     console.log('Event:', event);
//     console.log('Data:', data);

//     //const gtmServerEndpoint = 'https://42c5-14-143-179-162.ngrok-free.app/api/gtm'; // Replace with your actual endpoint

//     // try {
//     //   const response = await fetch('/api/gtm', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({
//     //         dataLayer: [{
//     //             event: 'button_click',
//     //             page_location: window.location.href,
//     //             button_text: 'Send Event',
//     //             button_id: 'my-button',
//     //         }]
//     //     }),
//     //   });

//     //   if (!response.ok) {
//     //     throw new Error(`GTM request failed with status ${response.status}`);
//     //   }

//       return NextResponse.json({ message: 'Event received successfully' });
//     // } catch (error) {
//     //   console.error('Error sending data to GTM:', error);
//     //   return NextResponse.json({ error: 'Failed to send data to GTM' }, { status: 500 });
//     // }
//   } catch (error) {
//     console.error('Error processing event:', error);
//     return NextResponse.json({ error: 'Failed to process event' }, { status: 500 });
//   }
// }

// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//     const { event, data } = await req.json();

//     // Validate the incoming data
//     if (!event) {
//         return NextResponse.json({ error: 'Event is required' }, { status: 400 });
//     }

//     // Log the event data
//     console.log('Event:', event);
//     console.log('Data:', data);

//     // Respond with a success message
//     return NextResponse.json({ message: 'Event received successfully' });
// }