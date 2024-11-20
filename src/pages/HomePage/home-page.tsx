import Card from "../../components/common/Card/Card";
import { Image } from "antd";
import ChartIc from "../../assets/svgs/chart.svg";

const HomePage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5">
        <Card>
          <div className="flex items-center justify-center rounded-full bg-[#F4F7FE] w-8 h-8">
            <Image src={ChartIc} />
          </div>
          <div>
            <div>Active</div>
            <div>2h 37m</div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center rounded-full bg-[#F4F7FE] w-8 h-8">
            <Image src={ChartIc} />
          </div>
          <div>
            <div>Active</div>
            <div>2h 37m</div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center rounded-full bg-[#F4F7FE] w-8 h-8">
            <Image src={ChartIc} />
          </div>
          <div>
            <div>Active</div>
            <div>2h 37m</div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-center rounded-full bg-[#F4F7FE] w-8 h-8">
            <Image src={ChartIc} />
          </div>
          <div>
            <div>Active</div>
            <div>2h 37m</div>
          </div>
        </Card>
        <div className="col-span-2">
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
