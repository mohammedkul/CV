import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import ErrorFallback from "./components/error-fallback";
import { CanonicalManager } from "./components/canonical-manager";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () =>
<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onError={(error, errorInfo) => {
    console.error(`Error Boundary caught an error(pathname:${location.pathname + location.search}):`, error, errorInfo);
    setTimeout(() => {
      throw error;
    }, 0);
  }}>

    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route element={<CanonicalManager />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>;


export default App;