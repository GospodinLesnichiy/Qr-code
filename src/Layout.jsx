import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator.jsx';
import { QrCodeScanner } from './components/Scan/QrCodeScanner.jsx';
import { GenerateHistory } from './components/Generate/GenerateHistory.jsx';
import { ScanHistory } from './components/Scan/ScanHistory.jsx';

export const Layout = () => {
    return (
        <div>
            <Navigation />



            {/*<QrCodeGenerator />*/}

            {/*<QrCodeScanner/>*/}
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div>
    );
};
