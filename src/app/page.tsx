export default function MainPage() {
  return (
    <div className="bg-[#EA5959] w-[1440px] h-[1024px] flex ">
      <div className="bg-[#FFFF] w-[983px] h-[702px] absolute left-[220px] top-[150px] rounded-[8px] box-shadow- [0 1px 3px 0] shadow-neutral-500"></div>
      <div className="bg-[#D8D8D8] relative m-[73px_300px_0_0] w-[1px] h-[702px] left-[450px] top-[77px] "></div>
      <div className="font-['Lato'] font-bold text-[#000000] text-[31px] absolute left-[520px] top-[180px]">
        All Tasks
        <div>
          <input
            type="text"
            id="todo"
            className=" border-none  text-gray-600  rounded-lg  w-[640px] p-2.5 px-5 dark:bg-[#F3F3F3] dark:border-gray-100 dark:placeholder-gray-400 font-normal text-[18px] "
            placeholder="Add a new task inside 'All' category"
            required
          />
        </div>
        <div className="text-[22px] font-bold font-['Lato'] text-[#EA5959] absolute left-[-230px] top-[150px]">
          All
        </div>
        <div className="text-[22px] font-normal font-['Lato'] text-[#525252] absolute left-[-230px] top-[200px]">
          Active
        </div>
        <div className="text-[22px] font-normal font-['Lato'] text-[#525252] absolute left-[-230px] top-[250px]">
          Complete
        </div>
      </div>
    </div>
  );
}
