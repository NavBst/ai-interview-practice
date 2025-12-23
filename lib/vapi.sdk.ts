import Vapi from "@vapi-ai/web";


export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
// export const vapi = new VapiClient({ token: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!});

if (!process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN) {
  console.error('NEXT_PUBLIC_VAPI_PUBLIC_KEY is not set');
} 

