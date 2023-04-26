import Footer from "../components/Footer";
import {useContext } from "react";
import { UserContext } from "../App";
export default function Subscription() {
  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch)
  const Subscribe = () => {
    if(state){
      return(<>
        <div className="subscribe--card">
        <h1 className="subscribe--title">
          Subscribe to <br />- Darkhorsestocks
        </h1>
        <div className="subscribe--row">
          <p className="subscribe--para">
            Meanwhile you can subscribe to free plan from the link below where
            we would suggest one company every month.
          </p>
          <div>
            <p className="subscribe--free">Free Plan</p>
              <a
                href="https://api.whatsapp.com/send?phone=917874999975"
                className="subscribe--btn subscribe--btn-primary"
              >
                SUBSCRIBE
              </a>
            
          </div>
        </div>
      </div>
      {/* Paid Subscription */}
      <div className="subscribe--card2">
        <div className="subscribe--row">
          <div>
            <p className="subscribe--free2">$XXXX</p>
              <a
                href="/Subscription"
                className="subscribe--btn2 subscribe--btn-primary2"
              >
                SUBSCRIBE
              </a>
            
          </div>
          <div>
            <h1 className="subscribe--title2">
              Paid <br />- Subscription
            </h1>
            <p className="subscribe--para2">
              Keeping Subscriptions open all round the increase a lot of work.
              We would rather focus on providing quality research. Will reopen
              for subscriptions around June 2023.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      </>)
    }else{
      return(<>
        <div className="subscribe--card">
        <h1 className="subscribe--title">
          Subscribe to <br />- Darkhorsestocks
        </h1>
        <div className="subscribe--row">
          <p className="subscribe--para">
            Meanwhile you can subscribe to free plan from the link below where
            we would suggest one company every month.
          </p>
          <div>
            <p className="subscribe--free">Free Plan</p>
            
              <a
                href="/"
                className="subscribe--btn subscribe--btn-primary"
              >
                LOGIN TO SUBSCRIBE
              </a>
          </div>
        </div>
      </div>
      {/* Paid Subscription */}
      <div className="subscribe--card2">
        <div className="subscribe--row">
          <div>
            <p className="subscribe--free2">$XXXX</p>
            
              <a
                href="/"
                className="subscribe--btn2 subscribe--btn-primary2"
              >
                LOGIN TO SUBSCRIBE
              </a>
          </div>
          <div>
            <h1 className="subscribe--title2">
              Paid <br />- Subscription
            </h1>
            <p className="subscribe--para2">
              Keeping Subscriptions open all round the increase a lot of work.
              We would rather focus on providing quality research. Will reopen
              for subscriptions around June 2023.
            </p>
          </div>
        </div>
      </div>
      </>)
    }
  }

  return (
    <>
      <Subscribe/>
    </>
  );
}

// import Footer from "../components/Footer";
// export default function Subscription() {
//   return (
//     <>
//       <div className="subscribe--card">
//         <h1 className="subscribe--title">
//           Subscribe to <br />- Darkhorsestocks
//         </h1>
//         {/* <h1 className="subscribe--title"></h1> */}
//         <div className="subscribe--row">
//           <p className="subscribe--para">
//             Meanwhile you can subscribe to free plan from the link below where
//             we would suggest one company every month.
//           </p>
//           <div>
//             <p className="subscribe--free">Free Plan</p>
//             <a
//               href="https://api.whatsapp.com/send/?phone=917874999975&text=Subscribe&type=phone_number&app_absent=0"
//               className="subscribe--btn subscribe--btn-primary"
//             >
//               SUBSCRIBE
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Paid Subscription */}
//       <div className="subscribe--card2">
//         {/* <h1 className="subscribe--title"></h1> */}
//         <div className="subscribe--row">
//           <div>
//             <p className="subscribe--free2">$XXXX</p>
//             <a
//               href="https://api.whatsapp.com/send/?phone=917874999975&text=Subscribe&type=phone_number&app_absent=0"
//               className="subscribe--btn2 subscribe--btn-primary2"
//             >
//               SUBSCRIBE
//             </a>
//           </div>
//           <div>
//             <h1 className="subscribe--title2">
//               Paid <br />- Subscription
//             </h1>
//             <p className="subscribe--para2">
//               Keeping Subscriptions open all round the increase a lot of work.
//               We would rather focus on providing quality research. Will reopen
//               for subscriptions around June 2023.
//             </p>
//           </div>
          
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
