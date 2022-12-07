import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from '../HomePage/HomePage'
import HCGIMTrackerPage from '../HCGIMTrackerPage/HCGIMTrackerPage'
import OutOfOfficePage from '../OutOfOfficePage/OutOfOfficePage'
import CollectionsTrackerPage from '../CollectionsTrackerPage/CollectionsTrackerPage'
import MinesweeperPage from '../MinesweeperPage/MinesweeperPage'
import Header from '../../components/Header/Header'

export default function App() {

  return (
    <main className="App">
      <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/hcgim-tracker" element={<HCGIMTrackerPage />} />
            <Route path="/out-of-office" element={<OutOfOfficePage />} />
            <Route path="/collections-tracker" element={<CollectionsTrackerPage />} />
            <Route path="/minesweeper" element={<MinesweeperPage />} />
          </Routes>
    </main>
  );
}


