
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationPanel from './common/NavigationPanel'
import Home from './Home'
import HowItWorksPage from './HowItWorksPage'
import PricingPage from './PricingPage'

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <NavigationPanel />
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                
                
                <Route path="/pricing" element={<PricingPage />} />
                
                <Route path="/howitworks" element={<HowItWorksPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App