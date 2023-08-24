import * as React from 'react';
import { ImageCarousel } from './components/image-carousel'
import './style.css';

export default function App() {
  return (
    <div
      className="app-container"
      style={{ height: '500px', width: '100%' }}
    >
      <ImageCarousel/>
    </div>
  );
}
