import Image from "next/image";
import bcrypt from "bcryptjs";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { prisma } from "@/db";
// import ProductSize from './components/ProductSize'

// import shoe from "@/public/images/shoe.webp";

export default async function Dashboard() {
  const staff = await prisma.staff.create({
    data: {
      staffname:"admin",
      contracttype:"full-time",
      contactno:"0000000000",
      nic:"1111111111",
      designation:"developer",
    },
  });

  if (!staff.staffid) {
    throw new Error(`Staff not enterd`);
  }

  const headerId: number = staff.staffid;
  const hashedPassword = await bcrypt.hash("admin", 10);

  // 3. addnew user
  if (staff.staffid) {
    await prisma.users.create({
      data: {
        staffid: headerId,
        username:"admin",
        password: hashedPassword,
        role:"admin",
      },
    });
  }
  return (
    <div className="container flex flex-col items-center justify-center">
      <Card className="py-4 lg:w-3/4 xl:w-1/2">
        <CardBody className="overflow-visible py-2">
          <div className="flex gap-6">
            {/* <Image alt="Shoe" className="flex-1 object-cover" src={shoe} /> */}
            <div className="flex-1">
              <h2 className="text-lg font-bold uppercase">Nike Adapt BB 2.0</h2>
              <p className="text-sm text-default-500">
                Consistent, customized fit, game-changing.
              </p>

              <div className="mb-6 mt-2 flex gap-3">
                <span className="font-bold">$279.79</span>
                <span className="text-default-600 line-through">$350</span>
                <span className="text-success">20% off</span>
              </div>

              <div className="mt-6 flex gap-6">
                <Button color="primary">Buy now</Button>
                <Button color="primary" variant="bordered" radius="full">
                  Add to bag
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
