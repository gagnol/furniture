import PropTypes from "prop-types";

const ShareContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3500px] left-[-196px] w-[1799px] h-[780px] text-center text-xl text-color-gray-2 font-poppins ${className}`}
    >
      <div className="absolute top-[59px] left-[0px] w-[1799px] h-[721px]">
        <div className="absolute top-[0px] left-[0px] bg-silver w-[274px] h-[312px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[274px] h-[382px] object-cover"
          alt=""
          src="/rectangle-36@2x.png"
        />
        <img
          className="absolute top-[70px] left-[290px] w-[451px] h-[312px] object-cover"
          alt=""
          src="/rectangle-38@2x.png"
        />
        <img
          className="absolute top-[156px] left-[757px] w-[295px] h-[392px] object-cover"
          alt=""
          src="/rectangle-40@2x.png"
        />
        <img
          className="absolute top-[398px] left-[397px] w-[344px] h-[242px] object-cover"
          alt=""
          src="/rectangle-39@2x.png"
        />
        <img
          className="absolute top-[463px] left-[1068px] w-[178px] h-[242px] object-cover"
          alt=""
          src="/rectangle-41@2x.png"
        />
        <img
          className="absolute top-[463px] left-[1262px] w-[258px] h-[196px] object-cover"
          alt=""
          src="/rectangle-44@2x.png"
        />
        <img
          className="absolute top-[99px] left-[1068px] w-[290px] h-[348px] object-cover"
          alt=""
          src="/rectangle-43@2x.png"
        />
        <img
          className="absolute top-[14px] left-[1374px] w-[425px] h-[433px] object-cover"
          alt=""
          src="/rectangle-45@2x.png"
        />
        <img
          className="absolute top-[398px] left-[0px] w-[381px] h-[323px] object-cover"
          alt=""
          src="/rectangle-37@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[721px] w-[356px] h-[86px]">
        <div className="absolute top-[0px] left-[67px] leading-[150%] font-semibold">
          Share your setup with
        </div>
        <b className="absolute top-[38px] left-[0px] text-21xl leading-[120%] text-color-gray-1">
          #FuniroFurniture
        </b>
      </div>
    </div>
  );
};

ShareContainer.propTypes = {
  className: PropTypes.string,
};

export default ShareContainer;
