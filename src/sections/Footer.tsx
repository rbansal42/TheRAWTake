const Footer = () => {
  return (
    <div
      id="app__footer"
      className="flex flex-row bg-white justify-center align-middle items-center py-12"
    >
      <div className="flex flex-col justify-center align-middle items-center text-center gap-4">
        <div className="font-Raleway text-brandRed font-bold text-xl tracking-wide">
          Write to us!
        </div>
        <div className="text-center font-Raleway font-extralight text-sm leading-relaxed tracking-wide">
          <a href="mailto:contact@therawtake.in">contact@therawtake.in</a>
        </div>
        <div className="font-Raleway text-brandRed font-bold text-xl tracking-wide flex-row flex gap-2">
          <a href="https://twitter.com/TheRawTake" target="_blank">
            <img
              src="src/assets/icons/twitter.webp"
              alt="Twitter"
              height={24}
              width={24}
            />
          </a>
          <a href="https://www.instagram.com/therawtake.in/" target="_blank">
            <img
              src="src/assets/icons/instagram.webp"
              alt="Instagram"
              height={24}
              width={24}
            />
          </a>
          <a href="https://www.linkedin.com/company/82900957/" target="_blank">
            <img
              src="src/assets/icons/linkedin.webp"
              alt="LinkedIn"
              height={24}
              width={24}
            />
          </a>
        </div>
        <div className="text-center font-Raleway font-extralight text-sm leading-relaxed tracking-wide">
          ©2023 by The RAW Take
        </div>
      </div>
    </div>
  );
};

export default Footer;
