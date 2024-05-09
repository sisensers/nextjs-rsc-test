import { SisenseContextProvider } from '@sisense/sdk-ui';
import { AiContextProvider, Chatbot } from '@sisense/sdk-ui/ai';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SisenseContextProvider
          url="https://talsandbox.sisensepoc.com" // replace with the URL of your Sisense instance
          token='supersecret' // replace with the API token of your user account
      >
              <AiContextProvider>
          <Chatbot />
        </AiContextProvider>
      </SisenseContextProvider>
    </main>
  );
}
