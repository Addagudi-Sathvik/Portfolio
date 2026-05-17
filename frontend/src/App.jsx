import React from "react";
import PortfolioContent from './components/PortfolioContent';
import usePortfolioEffects from './components/usePortfolioEffects';

export default function App() {
  usePortfolioEffects();

  return <PortfolioContent />;
}
