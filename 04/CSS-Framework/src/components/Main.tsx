import latarPohon from "../assets/Bitmap (2).png";
import bulan from "../assets/Combined Shape.png";
export default function Main() {
  return (
    <>
      <main className="bg-white min-h-[100vh] w-[100%] relative z-0 p-0 flex items-center justify-center">
        <img
          src={latarPohon}
          className="absolute inset-0 object-cover h-[300px] w-[100%] z-[-1]"
        />

        <div className=" rounded-lg text-white z-10 h-[600px] w-[541px]">
          <div className="flex items-center justify-between h-[auto] mb-[45px]">
            <p className="text-[40px] font-bold font-josefin tracking-[14px]">
              TODO
            </p>
            <img src={bulan} className="h-[26px] w-[26px]" />
          </div>
          <div className="h-[64px] w-[541px] bg-white rounded-[5px] flex p-[20px] mb-[24px]">
            <button className="h-[24px] w-[24px] rounded-[50px] border-2 border-[#E3E4F1] mr-[24px]"></button>
            <p className="text-[#9495A5] font-josefin text-[18px]">
              Create a new todo...
            </p>
          </div>
          <div className="h-[auto] w-[541px] rounded-[5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="flex items-center p-[20px] border-b border-[#E3E4F1]">
              {/* Lingkaran Gradasi + Centang */}
              <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#55DDFF] to-[#C058F3] mr-[24px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M1 4.304L3.696 7l6-6"
                  />
                </svg>
              </div>
              {/* Teks Coret */}
              <p className="text-[#D1D2DA] line-through text-[18px] font-josefin text-[18px]">
                Complete online JavaScript course
              </p>
            </div>

            <div className="flex items-center p-[20px] border-b border-[#E3E4F1]">
              <button className="h-[24px] w-[24px] rounded-full border border-[#E3E4F1] mr-[24px]"></button>
              <p className="text-[#494C6B] font-josefin">
                Jog around the park 3x
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center p-[20px] border-b border-[#E3E4F1]">
              <button className="h-[24px] w-[24px] rounded-full border border-[#E3E4F1] mr-[24px]"></button>
              <p className="text-[#494C6B] font-josefin">
                10 minutes meditation
              </p>
            </div>

            <div className="flex items-center p-[20px] border-b border-[#E3E4F1]">
              <button className="h-[24px] w-[24px] rounded-full border border-[#E3E4F1] mr-[24px]"></button>
              <p className="text-[#494C6B] font-josefin">Read for 1 hour</p>
            </div>

            <div className="flex items-center p-[20px] border-b border-[#E3E4F1]">
              <button className="h-[24px] w-[24px] rounded-full border border-[#E3E4F1] mr-[24px]"></button>
              <p className="text-[#494C6B] font-josefin">Pick up groceries</p>
            </div>

            <div className="flex items-center p-[20px] border-b border-[#E3E4F1]">
              <button className="h-[24px] w-[24px] rounded-full border border-[#E3E4F1] mr-[24px]"></button>
              <p className="text-[#494C6B] font-josefin">
                Completed To Do App on Front-End Mentor
              </p>
            </div>

            {/* Bagian Footer (Status Bar) */}
            <div className="flex items-center justify-between p-[20px] text-[14px] text-[#9495A5]">
              <span className="font-josefin text-[14px]">5 items left</span>
              <div className="flex gap-4 font-bold">
                <button className="text-[#3A7CFD] font-josefin">All</button>
                <button className="hover:text-[#494C6B] font-josefin">
                  Active
                </button>
                <button className="hover:text-[#494C6B] font-josefin">
                  Completed
                </button>
              </div>
              <button className="hover:text-[#494C6B] font-josefin">
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
