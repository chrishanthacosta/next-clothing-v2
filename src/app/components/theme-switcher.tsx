// // 'use client'

// // import { useEffect, useState } from 'react'
// // import { useTheme } from 'next-themes'

// // import { Button } from '@nextui-org/button'

// // export default function ThemeSwitcher() {
// //   const [mounted, setMounted] = useState(false)
// //   const { theme, setTheme } = useTheme()

// //   useEffect(() => {
// //     setMounted(true)
// //   }, [])

// //   if (!mounted) return null

// //   return (
// //     <div className='flex gap-4'>
// //       <Button size='sm' variant='flat' onClick={() => setTheme('light')}>
// //         Light
// //       </Button>
// //       <Button size='sm' variant='flat' onClick={() => setTheme('dark')}>
// //         Dark
// //       </Button>
// //       {/* <Button size='sm' variant='flat' onClick={() => setTheme('modern')}>
// //         Modern
// //       </Button> */}
// //     </div>
// //   )
// // }
// // app/components/ThemeSwitcher.tsx
// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className="flex items-center justify-center">
//       {/* The current theme is: {theme} */}

//       {theme == "dark" ? (
//         <button className=" m-2" onClick={() => setTheme("light")}>
//           <FaSun style={{ color: "white" }} />
//         </button>
//       ) : (
//         <button className=" m-2" onClick={() => setTheme("dark")}>
//           <FaMoon />
//         </button>
//       )}
//     </div>
//   );
// }
