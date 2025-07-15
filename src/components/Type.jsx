import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <div data-aos="fade-up">
      <TypeAnimation
        sequence={[
          'Web Developer 💻',
          2000,
          'MERN Stack Developer🚀',
          2000,
          'AI & ML Enthusiast 🤖',
          2000,
        ]}
        wrapper="div"
        speed={70}
        
        repeat={Infinity}
        className="text-4xl mb-8 text-[#e99b63] font-medium"
      />
    </div>
  );
};

export default Type;
