import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from 'components/Spinner';
import ErrorBoundary from 'components/ErrorBoundary';
import './App.scss';

const TripReview = lazy(() => import('./pages/TripReview'));
const Checkout = lazy(() => import('./pages/Checkout'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner size={48} isAbsolute />}>
        <Routes>
          <Route path="/" element={<TripReview />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
