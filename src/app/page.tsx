import Image from "next/image";

export default function MainPage() {
  return (
    <div className="bg-[#EA5959] flex flex-row p-[161px_0_161px_0] w-[1440px] box-sizing-border">
      <div className="shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25)] rounded-[8px] bg-[#FFFFFF] absolute left-[690px] top-[200px] translate-x-[-50%] w-[983px] h-[702px]"></div>
      <div className="relative m-[300px_52.1px_437px_0] flex flex-col top-[40px] left-[0px] box-sizing-border">
        <div className="m-[0_0_24px_0] inline-block self-start break-words font-['Lato'] font-bold text-[22px]  absolute left-[250px] bottom-[170px] text-[#ea5959]">
          All
        </div>
        <div className="m-[0_0_24px_250px] inline-block self-start break-words font-['Lato'] font-normal  bottom-[120px] absolute left-[0px] text-[22px] text-[#525252]">
          Active
        </div>
        <span className="break-words font-['Lato'] font-normal text-[22px]  bottom-[90px] absolute left-[250px] text-[#525252]">
          Completed
        </span>
      </div>
      <div className="bg-[#D8D8D8] relative m-[73px_300px_0_0] left-[350px] bottom-[34px] w-[1px] h-[702px] "></div>
      <div className="relative m-[100px_0_327px_0] flex flex-col w-[678px]  bottom-[40px] left-[100px] box-sizing-border">
        <div className="m-[0_0_25px_0] inline-block self-start break-words font-['Lato'] font-bold text-[31px] text-[#000000]">
          All Tasks
        </div>
        <div className="rounded-[8px] bg-[#F3F3F3] relative m-[0_0_32px_0] p-[10px_385px_15px_27px] w-[fit-content] box-sizing-border">
          <span className="break-words font-['Lato'] font-normal text-[18px] text-[#B5B5B5]">
            Add a new task inside ‘All’ category
          </span>
        </div>
        <div className="m-[0_500px_16px_0] flex flex-row justify-between w-[668px] box-sizing-border">
          <div className="flex flex-row box-sizing-border">
            <div className="rounded-[8px] border-[1px_solid_#5A5A5A] m-[0_18px_0_0] top-[332px] left-[490px]  w-[28px] h-[28px]"></div>
            <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] text-[#5A5A5A]">
              Get a new helmet
            </div>
          </div>
         
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round"  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
        </div>
        <div className="m-[0_0_16px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] bg-[rgba(92,91,91,0.5)] m-[0_18px_0_0] w-[28px] h-[28px]"></div>
          <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] line-through text-[rgba(90,90,90,0.5)]">
            Purchase Milk &amp; Corn Flakes
          </div>
        </div>
        <div className="m-[0_0_16px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] border-[1px_solid_#5a5a5a] m-[0_18px_0_0] w-[28px] h-[28px]"></div>
          <div className="m-[3px_0_3px_0] inline-block break-words font-['Lato'] font-normal text-[18px] text-[#5a5a5a]">
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
          <div className="rounded-[8px] bg-[rgba(87,87,87,0.5)] relative m-[0_18px_0_0] flex p-[8.5px_6.6px_8.5px_6.6px] w-[28px] h-[28px] box-sizing-border">
            <div className="flex w-[14.8px] h-[11px] box-sizing-border">
          
              
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
