import React from 'react';
import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  const croppedUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  return croppedUrl;
};

export default getCroppedImageUrl;
