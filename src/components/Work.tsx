import { Link } from 'react-router-dom';


type Props = {
  image: string;
}

const Work: React.FC<Props> = (props) => {
  const Img = props.image;
  return (
    <>
      <div className="work p-6 pt-2 text-dark">
        <Link to="/Home">
          <img src={Img} alt="RakutanRakuda" className="hover:opacity-75" />
        </Link>
        <div className="overview">
          <Link to="/Home" className="">
            <p className="py-1 font-bold hover:underline">落単らくだ</p>
          </Link>
          <p className="text-sm">落単した授業の情報を評価・共有できるサイトです。</p>
          <p className="text-gray text-xs">2020.11｜React/Rails</p>
        </div>
      </div>
    </>
  );
}

export default Work;