function Avatar() {
    return (
      <div className="flex items-center rounded-full border bg-black bg-opacity-70 hover:bg-opacity-100 transition duration-3000 p-1 shadow shadow-black/5 mx-auto">
        <div className="flex -space-x-1.5">
        <img
      className="rounded-full ring-1 ring-background md:w-[35px] md:h-[35px] w-[25px] h-[25px]"
      src="https://originui.com/avatar-80-03.jpg"
      alt="Avatar 01"
    />
    <img
      className="rounded-full ring-1 ring-background md:w-[35px] md:h-[35px] w-[25px] h-[25px]"
      src="https://originui.com/avatar-80-04.jpg"
      alt="Avatar 02"
    />
    <img
      className="rounded-full ring-1 ring-background md:w-[35px] md:h-[35px] w-[25px] h-[25px]"
      src="https://originui.com/avatar-80-05.jpg"
  alt="Avatar 03"
/>
<img
  className="rounded-full ring-1 ring-background md:w-[35px] md:h-[35px] w-[25px] h-[25px]"
  src="https://originui.com/avatar-80-06.jpg"
  alt="Avatar 04"
/>

        </div>
        <p className="px-2 text-muted-foreground text-white md:text-xl text-xs font-medium font-poppins">
          Trusted by <strong className="text-foreground text-white text-xs md:text-xl font-medium font-poppins">2K+</strong> Women
        </p>
      </div>
    );
  }
  
  export default Avatar;