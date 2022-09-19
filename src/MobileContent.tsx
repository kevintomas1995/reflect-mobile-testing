import { GiHamburger } from "react-icons/gi";

function MobileContent({ isTouch }: { isTouch: boolean }) {
  return (
    <div className="flex justify-center flex-col w-full">
      <nav id="mobile-nav">
        <GiHamburger className="text-3xl text-center m-4" />
      </nav>
      <h1 className="text-3xl pt-4 text-center">Mobile header</h1>
      {isTouch ? (
        <div className="text-center w-full font-bold mt-5" id="touchDevice">
          Touch device
        </div>
      ) : (
        <div className="text-center w-full font-bold mt-5" id="touchDevice">
          Not touch device
        </div>
      )}
      <div className="flex flex-col justify-center items-center">
        <span className="text-center w-72 m-5 p-3" id="mobile-span">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </span>
        <span className="text-center w-72 m-5 p-3" id="mobile-span">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </span>
        <span className="text-center w-72 m-5 p-3" id="mobile-span">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </span>
      </div>
    </div>
  );
}

export default MobileContent;
