import ImageSatu from '../../assets/imgSatu.png'
import { Link } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Button from '../button/Button';

function Home() {
  return (
    <div className="bg pt-[50px]  flex justify-center min-w-min">
      <div className="container pt-[50px] md:flex lg:mx-[50px] lg:justify-between">
        <div className="mx-[30px] justify-center md:w-1/3 lg:pt-[50px]">
          <h4 className="text-2xl md:text-lg lg:text-2xl font-semibold primary">
            Hi, I am
          </h4>
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide">
            Mochammad
          </h1>
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide">
            Fernanda<span className="primary">.</span>
          </h1>
          <div className="flex flex-row mt-3 gap-1 text-white md:text-sm lg:text-base">
            <a href="https://www.instagram.com/mchfrnnda_/">
              <p>Instagram</p>
            </a>
            <p>|</p>
            <p>Linkedin</p>
          </div>
          <div className="flex flex-row gap-1 text-white md:text-sm lg:text-base">
            <p>Whatsapp</p>
            <p>|</p>
            <p>Github</p>
          </div>
          <div className="mt-5">
            <Button />
          </div>
        </div>
        <div className="m-10 flex-col justify-center md:w-1/3 lg:m-0">
          <img src={ImageSatu} alt="me" className="m-auto" />
        </div>
        <div className="mx-[30px] md:w-1/3 lg:pt-[50px] pb-[50px]">
          <h4 className="text-2xl md:text-lg lg:text-2xl font-semibold primary">
            A
          </h4>
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide">
            UI/UX Designer
          </h1>
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-2 tracking-wide">
            Front End Developer
          </h1>
          <p className="text-white md:text-sm lg:text-base">
            Aku adalah seorang UI/UX designer dan juga Front End Web Developer.
            Mari bekerja sama mem-Bangun bisnis anda ke level berikutnya.
          </p>
          <div className="primary tracking-wide font-medium mt-3 md:text-sm">
            <Link to="/profile" className="flex flex-row gap-1">
              <p className="hover:underline">Learn more</p>
              <ArrowRightCircleIcon className="primary-h w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home