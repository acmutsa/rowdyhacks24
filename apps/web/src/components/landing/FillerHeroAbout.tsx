import D6 from "../../../public/img/landing/d6.svg";
import D3 from "../../../public/img/landing/d3.svg";
import D4 from "../../../public/img/landing/d4.svg";
import Land_Before from "../../../public/img/landing/Land_Before.svg"
import Image from "next/image";
export default function Filler(){
    return (
      // Christian:  Purpose is to add a bit of fluff and affect between the hero and about section
      <div className=" relative w-full min-h-screen bg-[url('/img/landing/filler.svg')] bg-no-repeat bg-cover">

        {/* Extra filler images. Uncomment to see what they would look like
        <Image
          src={D6}
          alt="D6.svg"
          priority={true}
          className="rotate-[-30deg] w-40 sm:w-44 md:w-48 absolute right-8 top-[60%]"
        />
        <Image
          src={D4}
          priority={true}
          alt="D6.svg"
          className=" w-24 sm:w-32 lg:w-40 absolute left-8 bottom-[20%] sm:right-20 sm:bottom-1/3"
        />
        <Image
          src={D3}
          priority={true}
          alt="D3.svg"
          className="rotate-12 w-32 sm:w-40 md:w-44 lg:w-52 absolute left-1/3 bottom-0 sm:bottom-6 lg:left-1/4"
        />
    */}

      </div> 
    );
}