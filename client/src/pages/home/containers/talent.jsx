import Button from "../../../components/button";
import { berri, yarden, deela } from "../../../assets/images/artists";
import { useNavigate } from "react-router-dom";

const TalentSection = () => {
  const navigate = useNavigate();
  const artists = [
    { name: "Berri Tiga", img: berri },
    { name: "Deela", img: deela },
    { name: "Yarden", img: yarden },
  ];
  return (
    <div className="flex py-[44px] w-full gap-20 items-center">
      <div className="w-[504px] flex flex-col gap-6">
        <h2 className="text-5xl font-bold">
          Emerging talents in our Afrobeats space
        </h2>
        <p className="text-sm">
          Take a look at the hottest new kids on the block.
        </p>
        <Button
          text="Read about utilities"
          className="w-[276px]"
          onClick={() => navigate("/utilities")}
        />
      </div>
      <div className="flex-1 flex justify-between">
        {artists?.map((artist, idx) => (
          <div className="" key={idx}>
            <img
              src={artist?.img}
              alt=""
              loading="lazy"
              className="w-[200px] h-[200px] object-cover rounded-3xl"
            />
            <h3 className="font-bold text-[32px] leading-[32px] mt-3 text-primary">
              {artist?.name}
            </h3>
            <p className="text-sm">Afrobeats</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentSection;
