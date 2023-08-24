import * as React from 'react';
import { ImageCarousel } from './components/image-carousel';
import './style.css';

export default function App() {
  const [items, setItems] = React.useState([]);
  const [hasError, setHasError] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://picsum.photos/v2/list');
        const json = await res.json();
        console.log(json)
        const transformed = json.map(({ id, download_url }) => ({
          id,
          url: download_url,
          alt: '',
          thumbnail: '',
        }));
        setItems(transformed)

      } catch (e) {
        setHasError(true);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="app-container" style={{ height: '500px', width: '100%' }}>
      <ImageCarousel items={items} />
    </div>
  );
}
