
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationPanel from './common/NavigationPanel'



import Home from './components/Home'
import PricingPage from './components/PricingPage'
import HowItWorksPage from './components/HowItWorksPage'
import FAQs from './components/FAQs'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <NavigationPanel />
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/howitworks" element={<HowItWorksPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App