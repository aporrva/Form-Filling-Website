
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationPanel from './common/NavigationPanel'



import Home from './components/Home'
import PricingPage from './components/PricingPage'
import HowItWorksPage from './components/HowItWorksPage'
import FAQs from './components/FAQs'
import AboutPage from './components/AboutPage'

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <NavigationPanel />
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/howitworks" element={<HowItWorksPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App