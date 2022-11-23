import Theme from "../styles/theme";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
    )
  }
}
   

export default MyApp
