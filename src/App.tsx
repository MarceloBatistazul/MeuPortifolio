import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialLoader from "./components/InitialLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MIN_LOADING_MS = 1200;
const MAX_LOADING_MS = 4500;
const LOADER_FADE_OUT_MS = 450;

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [isLoaderFading, setIsLoaderFading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MIN_LOADING_MS - elapsed, 0);

      window.setTimeout(() => {
        if (isMounted) {
          setIsInitialLoading(false);
        }
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    const failSafeTimeout = window.setTimeout(() => {
      if (isMounted) {
        setIsInitialLoading(false);
      }
    }, MAX_LOADING_MS);

    return () => {
      isMounted = false;
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(failSafeTimeout);
    };
  }, []);

  useEffect(() => {
    if (isInitialLoading) {
      return;
    }

    setIsLoaderFading(true);

    const hideLoaderTimeout = window.setTimeout(() => {
      setShowInitialLoader(false);
    }, LOADER_FADE_OUT_MS);

    return () => {
      window.clearTimeout(hideLoaderTimeout);
    };
  }, [isInitialLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {showInitialLoader ? (
          <div
            className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
              isLoaderFading ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <InitialLoader />
          </div>
        ) : null}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
