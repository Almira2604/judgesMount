// GalleryData.js
import meeting1 from '../assets/meeting1.jpeg'
import meeting2 from '../assets/meeting2.jpeg'
import meeting3 from '../assets/meeting3.png'
import meeting4 from '../assets/meeting4.png'
import prayer1 from '../assets/prayer1.jpg'
import prayer2 from '../assets/prayer2.jpg'
import prayer3 from '../assets/prayer3.jpg'
import prayer4 from '../assets/prayer4.jpg'
import outreach1 from '../assets/outreach1.png'
import outreach2 from '../assets/outreach2.png'
import outreach3 from '../assets/outreach3.png'
import outreach4 from '../assets/outreach4.png'

export const categories = ['All', 'Meetings', 'Prayer Sessions', 'Outreach', 'Testimonies'];

export const galleryData = [
  {
    id: 1,
    category: 'Meetings',
    title: 'Word Exposition Service',
    images: [
      meeting1,
      meeting2,
      meeting3,
      meeting4
    ]
  },
  {
    id: 2,
    category: 'Prayer Sessions',
    title: 'Midnight Intercession Watch',
    images: [
      prayer1,
      prayer2,
      prayer3,
      prayer4
    ]
  },
    {
    id: 3,
    category: 'Outreach',
    title: 'Spreading the Gospel in the Community',
    images: [
        outreach1,
        outreach2,
        outreach3,
        outreach4
    ]
  }
];