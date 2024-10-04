// import React from 'react';
// import Lottie from 'lottie-react';

// export default function Page1() {
//   return (
//     <div className="page1">
//       <div className="banner1">
//         <div className="firstbanner">
//           <div className="bannertagdiv">
//             <div className="bannertag">
//               <div className="tag"></div>
//               <div className="name">Shailee's Jain Classes</div>
//             </div>
//           </div>
//           <div className="banner1heading">
//             Empowering Young Minds for Future Success.
//           </div>
//           <div className="banner1subhead">
//             From personalized teaching plans to consistent support, we are fully
//             committed to helping students overcome obstacles, achieve high
//             marks, and build a successful academic future
//           </div>
//         </div>
//         <div className="secondbanner"></div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function Page1() {
  const [animationData, setAnimationData] = useState(null);

  // Fetch the Lottie animation JSON from the public folder
  useEffect(() => {
    fetch('/teacher.json') // Correctly reference the file in the public folder
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading animation:', error));
  }, []);

  return (
    <div className="page1">
      <div className="banner1">
        <div className="firstbanner">
          <div className="bannertagdiv">
            <div className="bannertag">
              <div className="tag"></div>
              <div className="name">Shailee's Jain Classes</div>
            </div>
          </div>
          <div className="banner1heading">
            Empowering Young Minds for Future Success.
          </div>
          <div className="banner1subhead">
            From personalized teaching plans to consistent support, we are fully
            committed to helping students overcome obstacles, achieve high
            marks, and build a successful academic future
          </div>
        </div>
        <div className="secondbanner">
          {/* Render the Lottie animation once the data is fetched */}

          <Lottie
            animationData={animationData}
            loop={true}
            className="teacheranimation"
          />
        </div>
      </div>
    </div>
  );
}
