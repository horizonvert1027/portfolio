import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Loading from './component/Loading';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

import './App.css';

const Home = lazy(() => import('./component/Home'));

function App() {
  return (
    <div className='app py-7 bg-[#f5f5f5] dark:bg-gray-800'>
      <div className="container mx-auto">
        <div className='flex gap-4'>
            <div className='w-[17%]'>
              <Sidebar />
            </div>
            <div className='w-[77%]'>
              <Router>
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                  </Routes>
                </Suspense>
              </Router>
            </div>
            <div className='w-[6%]'>
              <Header />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
