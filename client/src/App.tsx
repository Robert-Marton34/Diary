import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./Home"
import { About } from "./About"
import { Diary } from "./Diary"
import { Entry } from "./Entry"
import { ThemeProvider } from "./ThemeProvider";
import { Layout } from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Edit } from "./Edit";

const queryClient = new QueryClient();


function App() {
    return (  
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/entry" element={<Entry />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
  )
}

export default App
