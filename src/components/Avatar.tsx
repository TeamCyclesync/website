function Avatar() {
  return (
    <div className="group flex items-center rounded-full border bg-black bg-opacity-50 hover:bg-black transition duration-700 p-1 px-2 shadow shadow-black/5 mx-auto">
      <div className="flex -space-x-1.5 transition-all duration-900 ease-in-out">
        <img
          className="rounded-full ring-1 ring-background md:w-[40px] md:h-[40px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://imgs.search.brave.com/Sa45aHVKZbn3YZBkT_mMUMQrjZ73d5vqY0wca4f1YHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC84/NTYtODU2MTI1MF9w/cm9maWxlLXBpYy1j/aXJjbGUtZ2lybC5w/bmc"
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background md:w-[40px] md:h-[40px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://originui.com/avatar-80-04.jpg"
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background md:w-[40px] md:h-[40px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://originui.com/avatar-80-05.jpg"
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background md:w-[40px] md:h-[40px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
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
