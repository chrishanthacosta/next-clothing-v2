import Image from "next/image";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
// import ProductSize from './components/ProductSize'

// import shoe from "@/public/images/shoe.webp";

export default function Home() {
  return (
    <div className="flex ml-3">
      <span className="mx-auto text-3xl font-black leading-none text-gray-900 select-none">
        Dashboa<span className="text-indigo-600">rd</span>
      </span>
    </div>
  );
}
