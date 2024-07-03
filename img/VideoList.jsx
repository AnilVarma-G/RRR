


import Video from 'next-video';
import { FaPlus } from 'react-icons/fa';

export default function VideoList() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-4xl font-bold mb-10 text-purple-900 blink'>
          Video Testimonials
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {['video1.webm', 'video2.webm', 'video3.webm', 'video4.webm'].map((video, index) => (
            <div key={index} className='relative overflow-hidden'>
              <a href={video} target='_blank' className='block relative'>
                <Video
                  src={video}
                  accentColor='#9333ea'
                  className='w-full h-auto'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50'>
                  <FaPlus className='text-white text-3xl' />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

