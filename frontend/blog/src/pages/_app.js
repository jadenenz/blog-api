import "@/styles/globals.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Create tanstack query client
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
