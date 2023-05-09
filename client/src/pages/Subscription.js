import Footer from "../components/Footer";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
export default function Subscription() {
  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch);
  const Subscribe = () => {
    if (state) {
      return (
        <>
          <div className="subscribe--card">
            <h1 className="subscribe--title">
              Subscribe to <br />- Darkhorsestocks
            </h1>
            <div className="subscribe--row">
              <p className="subscribe--para">
                Meanwhile you can subscribe to free plan from the link below
                where we would suggest one company every month.
              </p>
              <div>
                <p className="subscribe--free">Free Plan</p>
                <NavLink
                  to="https://api.whatsapp.com/send?phone=917874999975"
                  className="subscribe--btn subscribe--btn-primary"
                >
                  SUBSCRIBE
                </NavLink>
              </div>
            </div>
          </div>
          <div className="subscribe--card2">
            <div className="subscribe--row">
              <div>
                <p className="subscribe--free2">$XXXX</p>
                <NavLink
                  to="/Subscription"
                  className="subscribe--btn2 subscribe--btn-primary2"
                >
                  SUBSCRIBE
                </NavLink>
              </div>
              <div>
                <h1 className="subscribe--title2">
                  Paid <br />- Subscription
                </h1>
                <p className="subscribe--para2">
                  Keeping Subscriptions open all round the increase a lot of
                  work. We would rather focus on providing quality research.
                  Will reopen for subscriptions around June 2023.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </>
      );
    } else {
      return (
        <>
          <div className="subscribe--card">
            <h1 className="subscribe--title">
              Subscribe to <br />- Darkhorsestocks
            </h1>
            <div className="subscribe--row">
              <p className="subscribe--para">
                Meanwhile you can subscribe to free plan from the link below
                where we would suggest one company every month.
              </p>
              <div>
                <p className="subscribe--free">Free Plan</p>
                <NavLink
                  to="/"
                  className="subscribe--btn subscribe--btn-primary"
                >
                  LOGIN TO SUBSCRIBE
                </NavLink>
              </div>
            </div>
          </div>
          <div className="subscribe--card2">
            <div className="subscribe--row">
              <div>
                <p className="subscribe--free2">$XXXX</p>
                <NavLink
                  to="/"
                  className="subscribe--btn2 subscribe--btn-primary2"
                >
                  LOGIN TO SUBSCRIBE
                </NavLink>
              </div>
              <div>
                <h1 className="subscribe--title2">
                  Paid <br />- Subscription
                </h1>
                <p className="subscribe--para2">
                  Keeping Subscriptions open all round the increase a lot of
                  work. We would rather focus on providing quality research.
                  Will reopen for subscriptions around June 2023.
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Subscribe />
    </>
  );
}
