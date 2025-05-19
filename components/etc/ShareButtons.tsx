'use client';

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ShareButtons = () => {
  const pathname = usePathname();
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  const encodedURL = encodeURIComponent(shareUrl);
  const text = encodeURIComponent('Halo! Cek Halaman Ini untuk Melihat Nusantara Legalitasku: ');

  const buttons = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      bg: 'bg-[#3b5998]',
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
    },
    {
      name: 'X',
      icon: <FaXTwitter />,
      bg: 'bg-black',
      link: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${text}`,
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      bg: 'bg-[#0077b5]',
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}`,
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      bg: 'bg-[#25D366]',
      link: `https://api.whatsapp.com/send?text=${text}%20${encodedURL}`,
    },
  ];

  if (!shareUrl) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <span className="font-semibold text-gray-700">Share This Page On:</span>
      <div className="flex gap-2">
        {buttons.map((btn) => (
          <a
            key={btn.name}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-4 py-2 text-white rounded ${btn.bg} hover:opacity-90 transition`}
          >
            {btn.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareButtons;
