import Image from "next/image";

export default function MainPage() {
  return (
    <div className="bg-[#EA5959] flex flex-row p-[161px_0_161px_0] w-[1440px] box-sizing-border">
      <div className="shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25)] rounded-[8px] bg-[#FFFFFF] absolute left-[14%] top-[235px] translate-x-[-50%] w-[983px] h-[702px]"></div>
      <div className="relative m-[300px_52.1px_437px_0] flex flex-col box-sizing-border">
        <div className="m-[0_0_24px_0] inline-block self-start break-words font-['Lato'] font-bold text-[22px]  absolute left-[250px] bottom-[170px] text-[#646060]">
          All
        </div>
        <div className="m-[0_0_24px_300px] inline-block self-start break-words font-['Lato'] font-normal absolute top-[0px] left-[70px] text-[22px] text-[#525252]">
          Active
        </div>
        <span className="break-words font-['Lato'] font-normal text-[22px] absolute top-[50px] left-[250px] text-[#525252]">
          Completed
        </span>
      </div>
      <div className="bg-[#D8D8D8] relative m-[73px_300px_0_0] w-[1px] h-[702px] "></div>
      <div className="relative m-[191px_0_327px_0] flex flex-col w-[678px] box-sizing-border">
        <div className="m-[0_0_25px_0] inline-block self-start break-words font-['Lato'] font-bold text-[31px] text-[#000000]">
          All Tasks
        </div>
        <div className="rounded-[8px] bg-[#F3F3F3] relative m-[0_0_32px_0] p-[10px_27px_15px_27px] w-[fit-content] box-sizing-border">
          <span className="break-words font-['Lato'] font-normal text-[18px] text-[#B5B5B5]">
            Add a new task inside ‘All’ category
          </span>
        </div>
        <div className="m-[0_500px_16px_0] flex flex-row justify-between w-[668px] box-sizing-border">
          <div className="flex flex-row box-sizing-border">
            <div className="rounded-[8px] border-[1px_solid_#5A5A5A] m-[0_18px_0_0] w-[28px] h-[28px]"></div>
            <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] text-[#5A5A5A]">
              Get a new helmet
            </div>
          </div>
          <img className="m-[0_0_11.7px_0] w-[14px] h-[16.3px]" />
        </div>
        <div className="m-[0_0_16px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] bg-[rgba(90,90,90,0.5)] m-[0_18px_0_0] w-[28px] h-[28px]"></div>
          <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] line-through text-[rgba(90,90,90,0.5)]">
            Purchase Milk &amp; Corn Flakes
          </div>
        </div>
        <div className="m-[0_0_16px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] border-[1px_solid_#5A5A5A] m-[0_18px_0_0] w-[28px] h-[28px]"></div>
          <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] text-[#5A5A5A]">
            Pay mortgage
          </div>
        </div>
        <div className="m-[0_0_16px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] border-[1px_solid_#5A5A5A] m-[0_18px_0_0] w-[28px] h-[28px]"></div>
          <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] text-[#5A5A5A]">
            Complete Assignments
          </div>
        </div>
        <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] bg-[rgba(90,90,90,0.5)] relative m-[0_18px_0_0] flex p-[8.5px_6.6px_8.5px_6.6px] w-[28px] h-[28px] box-sizing-border">
            <div className="flex w-[14.8px] h-[11px] box-sizing-border">
              <img className="w-[14.8px] h-[11px]" />
            </div>
          </div>
          <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] line-through text-[rgba(90,90,90,0.5)]">
            Replace laptop’s screen
          </div>
        </div>
      </div>
    </div>
  );
}
