const ServicePage = () => {
  return (
    <div>
      <h1 id="join-us">Join Us!</h1>
      <div className="freePlan">
        <h1>Free Plan</h1>
        <p>Enjoy basic features for free!</p>
        <ul>
          <li>Access the company's benchmark tests</li>
          <li>
            Choose which settings you want to see from the company's tests
          </li>
          <li>Daily updates</li>
          <li>Users see advertisements</li>
        </ul>
      </div>
      <hr />
      <div className="premiumPlan">
        <h1>Premium Plan</h1>
        <p>Unlock all features with our premium subscription!</p>
        <ul>
          <li>Personalized benchmark analysis</li>
          <li>Automatically generated game settings for the user's device</li>
          <li>
            Estimated FPS for different games based on our benchmark tests
          </li>
          <li>The user can compare their PC with the company's test PC</li>
          <li>
            Access to all benchmark tests for every platform(PS4, PS5 and PC)
          </li>
          <li>Ad-free experience</li>
        </ul>
      </div>
      <div className="subscriptionsContainer">
        <div className="subscriptionCard">
          <h2>1 month</h2>
          <p>40 SEK/month</p>

          <button>Subscribe</button>
        </div>
        <div className="subscriptionCard">
          <h2>3 months</h2>
          <p>75 SEK = 25 SEK/month</p>

          <button>Subscribe</button>
        </div>
        <div className="subscriptionCard">
          <h2>12 months</h2>
          <p>240 SEK = 20 SEK/month</p>

          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
