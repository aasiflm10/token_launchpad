import Image from "next/image";
import { SolanaTokenGenerator } from "./components/CreateToken";

export default function Home() {
  return (
    <div>
      <SolanaTokenGenerator/>
    </div>
  );
}
