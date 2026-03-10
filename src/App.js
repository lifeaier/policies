import React from 'react';
import { Routes, Route } from "react-router-dom";

import { LangProvider } from "./contexts/LangContext";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermOfService from "./pages/TermOfService";
import DataDeletion from "./pages/DataDeletion";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./layouts/Theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LangProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/term-of-service" element={<TermOfService />} />
                    <Route path="/data-deletion" element={<DataDeletion />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </LangProvider>
        </ThemeProvider> 
    );
}

export default App;
