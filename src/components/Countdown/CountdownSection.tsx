
"use client"
import { useState, useEffect } from 'react';

const CountdownSection: React.FC = () => {

  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {

    setTimeout(() => {
      setAnimationState("animating");
    }, 500);
    setTimeout(() => {
      setAnimationState("completed");
    }, 800);

  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">

      {animationState !== "initial" && (

        <div className="overflow-hidden relative h-64 flex items-center justify-center">
          <div className="text-center">

            <h1
              className="text-7xl md:text-9xl font-black tracking-tight"
              style={{
                opacity: animationState === "animating" ? 0 : 1,
                transform: animationState === "animating"
                  ? 'translateY(20px) rotate(-2deg)'
                  : 'translateY(0) rotate(0deg)',
                transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
              }}
            >
              HARSH
            </h1>

            <div
              className="h-1 bg-gray-900 w-full mt-2 mb-8"
              style={{
                transform: animationState === "animating" ? 'scaleX(0)' : 'scaleX(1)',
                transformOrigin: 'left',
                transition: 'transform 1.3s ease-out 1.3s'
              }}
            ></div>

            <h2
              className="text-2xl md:text-3xl font-semibold  tracking-widest"
              style={{
                opacity: animationState === "animating" ? 0 : 1,
                transform: animationState === "animating"
                  ? 'translateY(20px)'
                  : 'translateY(0)',
                transition: 'opacity 2s ease-out 2s, transform 1s ease-out 1.2s'
              }}
            >
              SOFTWARE ENGINEER
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownSection





// const CountdownSection: React.FC = () => {
//   const [count, setCount] = useState(3);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     if (count > 0) {
//       const timer = setTimeout(() => {
//         setCount(count - 1);
//         setSeconds(seconds + 1);
//       }, 1000);

//       return () => clearTimeout(timer);
//     }
//   }, [count, seconds]);

//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-white">

//       <div className="relative w-80 h-80">
//         <div
//           className="absolute top-1/2 left-1/2 w-full h-full rounded-full overflow-hidden origin-center"
//           style={{
//             transform: `translate(-50%, -50%) rotate(-${seconds * 90}deg)`,
//             transition: 'transform 1s linear'
//           }}
//         >
//           <div className="w-full h-full relative">
//             <div
//               className="absolute top-0 left-0 w-full h-full"
//               style={{
//                 opacity: Number(`0.${(count * 1.5).toString().replaceAll(".", "")}`), //
//                 backgroundImage: `conic-gradient(from 360deg, #333 0%, #999 ${(Math.round(count * 3))}%, transparent ${(Math.round(count * 10))}%)`,
//               }}
//             ></div>
//           </div>

//         </div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-9xl font-medium text-gray-800">
//             {count}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CountdownSection