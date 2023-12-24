import Div1 from "./div1/Div1";
import Div2 from "./div2/Div2";
import Div3 from "./div3/Div3";
import Div4 from "./div4/Div4";
import Div5 from "./div5/Div5";

const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      <div className="bg-white py-4"><Div1 /></div>
      <div className="bg-white"><Div2 /></div>
      <div className="bg-white"><Div3 /></div>
      <div className="bg-white"> <Div4 /></div>
      <div className="bg-white col-span-2 row-span-2"><Div5 /></div>
    </div>
  );
}

export default Home;
