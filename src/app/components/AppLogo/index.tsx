import Image from "next/image";
const AppLogo = () => {
  return (
    <div>
      <Image src="/foodielogo.png" alt="app-logo" width={300} height={300} priority />
    </div>
  );
};

export default AppLogo;
