const rawInstagramId = import.meta.env.VITE_INSTAGRAM_ID ?? '';
const rawWhatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

export const instagramId = rawInstagramId.trim().replace(/^@+/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/\/+$/, '');

export const instagramLabel = instagramId ? `@${instagramId}` : '@instagram';

export const whatsappNumber = rawWhatsappNumber.replace(/[^\d]/g, '');

export function getInstagramUrl() {
  return instagramId ? `https://www.instagram.com/${instagramId}` : 'https://www.instagram.com/';
}

export function getWhatsappUrl(message?: string) {
  const baseUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : 'https://wa.me/';

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
