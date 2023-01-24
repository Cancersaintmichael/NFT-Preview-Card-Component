import Equilibrium from "../assets/image-equilibrium.jpg";
import EthereumIcon from "../assets/icon-ethereum.svg";
import ClockIcon from "../assets/icon-clock.svg";
import AvatarImage from "../assets/image-avatar.png";
import ViewIcon from "../assets/icon-view.svg";

type NFTCardProps = {
  imageUrl?: string;
  number: number;
  name: string;
  description: string;
  currency: string;
  price: string;
  daysLeft: number;
  creatorAvatarUrl?: string;
  creatorName: string;
};

export default function NFTCard({
  imageUrl,
  number,
  name,
  description,
  currency,
  price,
  daysLeft,
  creatorAvatarUrl,
  creatorName,
}: NFTCardProps) {
  return (
    <>
      <div className="bg-card p-6 rounded-2xl shadow-xl max-w-[350px] flex flex-col gap-4">
        <div className="group rounded-xl flex items-center justify-center overflow-hidden relative before:content-[/src/assets/icon-view.svg] before:absolute before:block after:transition-all cursor-pointer hover:after:block after:hidden after:top-0 after:absolute after:h-full after:w-full after:bg-cyan/50">
          <img src={Equilibrium} alt="Equilibrium" />
          <img
            className="hidden absolute group-hover:flex z-50"
            src={ViewIcon}
            alt="View icon"
          />
        </div>
        <div className="text-white text-2xl font-semibold flex">
          <a className="flex gap-2 transition-colors hover:text-cyan" href="#">
            {name}
            <span>#{number}</span>
          </a>
        </div>
        <p className="text-soft-blue font-light">{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center text-cyan">
            <span>
              <img src={EthereumIcon} alt="Ethereum icon" />
            </span>
            <span>
              {price}&nbsp;{currency}
            </span>
          </div>
          <div className="flex gap-1 items-center text-soft-blue font-light">
            <span>
              <img src={ClockIcon} alt="Clock icon" />
            </span>
            <span>{daysLeft}&nbsp;days left</span>
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-solid border-divider font-light">
          <span className="border border-solid border-white rounded-full">
            <img src={AvatarImage} alt="Avatar image" width="34px" />
          </span>
          <span className="text-soft-blue">
            Creation of&nbsp;
            <a
              href="#"
              className="text-white transition-colors hover:text-cyan"
            >
              {creatorName}
            </a>
          </span>
        </div>
      </div>{" "}
    </>
  );
}
