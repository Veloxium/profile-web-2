import web1 from '../../assets/flowerweb.svg'
import web2 from '../../assets/profileweb.svg'
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";


function Project() {
  return (
    <div className="bg3 pt-[50px]">
      <div className="flex flex-col justify-center text-center">
        <p className="pt-10">Portofolio</p>
        <h1 className="text-2xl font-semibold text-white">My Latest Project</h1>
        <p className="text-white">
          Berikut beberapa project yg telah saya buat
        </p>
      </div>
      <div className="py-5 mx-5 md:flex-row md:flex">
        <div className="flex-col my-5 md:w-1/2 md:mx-5 md:p-5">
          <img src={web1} alt="web1" className="web w-full" />
          <div className="bg2 text-white p-3 web md:pb-5">
            <h3 className="font-semibold flower">Flower.co</h3>
            <p>Website e-commerce bunga yang dapat anda kunjungi</p>
            <a
              className="flower underline flex justify-end mt-2"
              href="https://veloxium.github.io/flower-co/"
            >
              Klik Disini
              <ArrowRightCircleIcon className="mx-1 w-5" />
            </a>
          </div>
        </div>
        <div className="flex-col my-5 md:w-1/2 md:mx-5 md:p-5">
          <img src={web2} alt="web2" className="web w-full" />
          <div className="bg2 text-white p-3 web pb-5">
            <h3 className="font-semibold profile">Profile</h3>
            <p>Website Profile pertama saya yang bisa anda kunjungi</p>
            <a
              className="profile mx-1 underline flex justify-end mt-2"
              href="https://veloxium.github.io/profile-web/"
            >
              Klik Disini
              <ArrowRightCircleIcon className="mx-1 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project