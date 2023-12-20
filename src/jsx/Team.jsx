import nijat from "../assets/nijat.png";
import murad from "../assets/murad.png";
import aykhan from "../assets/aykhan.png";
import tural from "../assets/tural.png";
import suleyman from "../assets/suleyman.png";
import '../css/Team.css'
import TeamCard from "./TeamCard";

export default function Team() {

  const members = [
    { name: "Nijat Ahmadov", src: nijat, about: "Lorem 1psum dolor sit amet" },
    { name: "Tural Gasimov", src: tural, about: "Lorem 2psum dolor sit amet" },
    { name: "Suleyman Mammadov", src: suleyman, about: "Lorem 3psum dolor sit amet" },
    { name: "Murad Muradzada", src: murad, about: "Lorem 4psum dolor sit amet" },
    { name: "Aykhan Ismayilzada", src: aykhan, about: "Lorem 5psum dolor sit amet"},
  ];



  return (
    <>
      <h1 className='text-center text-6xl'>Our Team</h1>
      <div className="px-80 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {members.map((member) => (
          <TeamCard member={member} />
        ))}
      </div>
     

      <style jsx>{`
        .team-card:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
}
