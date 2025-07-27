"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import dynamique de Lottie pour éviter les problèmes SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div style={{ width: '95%', height: '200px' }} />
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isClient) {
    return <div style={{ width: '95%', height: '200px' }} />;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;