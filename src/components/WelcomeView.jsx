import postman from "../assets/images/postman.jpg";

export default function WelcomeView() {
  return (
    <div className="welcome-view">
      <p className="welcome-view__message">
        Welcome to your package tracker! Click the button above to start
        tracking your orders!
      </p>
      <img src={postman} alt="A ppstman holding a parcel and waving" />
    </div>
  );
}
