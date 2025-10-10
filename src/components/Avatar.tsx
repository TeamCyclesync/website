function Avatar() {
  return (
    <div className="group flex items-center rounded-full border bg-black bg-opacity-50 hover:bg-black transition duration-700 p-1 px-2 shadow shadow-black/5 mx-auto">
      <div className="flex -space-x-1.5 transition-all duration-900 ease-in-out">
        <img
          className="rounded-full ring-1 ring-background md:w-[28px] md:h-[28px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://imgs.search.brave.com/Sa45aHVKZbn3YZBkT_mMUMQrjZ73d5vqY0wca4f1YHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC84/NTYtODU2MTI1MF9w/cm9maWxlLXBpYy1j/aXJjbGUtZ2lybC5w/bmc"
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background md:w-[28px] md:h-[28px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://imgs.search.brave.com/7r6IRsJDld37It3bvGM8gqlxk5A1pAV-I2SKcGl3r08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/OTM5NTc0OC9waG90/by9jaGVlcmZ1bC1i/dXNpbmVzcy13b21h/bi13aXRoLWdsYXNz/ZXMtcG9zaW5nLXdp/dGgtaGVyLWhhbmRz/LXVuZGVyLWhlci1m/YWNlLXNob3dpbmct/aGVyLXNtaWxlLmpw/Zz9iPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ckVZRnRKQXkw/blAyYk1XMU5ydGli/M2NCUkdYYVlVUnR1/RWVNd3dNRk1wcz0"
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background md:w-[28px] md:h-[28px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://imgs.search.brave.com/xsdx8GfJ6nnBYrMpsd4gLIUiOSBukh13-vtyd39_6-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zbWls/ZS1oYXBweS1mYWNl/LWhhbmRzLXdvbWFu/LW1hc3NhZ2Utc2Fk/LW5vcm1hbC1lbW90/aW9uLXBvc2l0aXZl/LWVtb3Rpb24tc21p/bGUtaGFwcHktZmFj/ZS1oYW5kcy13b21h/bi0zODY5NDE4MTQu/anBn"
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background md:w-[28px] md:h-[28px] w-[25px] h-[25px] transition-transform duration-700 ease-in-out group-hover:scale-105"
          src="https://imgs.search.brave.com/dnTBFgiEVj1l9Ut1yqrMmZYpD72-xXlG0oPrxhDaAhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cm9udC12aWV3LWdp/cmwtc21pbGluZy1j/YW1lcmFfMjMtMjE0/ODIyNzkyOS5qcGc_/c2VtdD1haXNfaHli/cmlk"
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-muted-foreground text-white md:text-sm text-xs font-medium font-poppins">
        Trusted by <strong className="text-foreground text-white text-xs md:text-sm font-medium font-poppins">2K+</strong> Women
      </p>
    </div>
  );
}

export default Avatar;
