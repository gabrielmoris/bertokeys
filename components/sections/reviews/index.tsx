// import React from "react";
// import { getLocalPlaceReviews } from "google-reviews-scraping";

// (async function getReviews() {
//   const reviewsData = await getLocalPlaceReviews({
//     placeUrl: "https://maps.app.goo.gl/meLhKpubs6NxsGsn8",
//     options: {
//       navigationTimeout: 7000, // Optional
//       lastCursor: "[CURSOR]", // Optional
//     },
//   });

//   console.log(reviewsData);
// })();

const Reviews = () => {
  return (
    <div className="w-full xl:w-[90%]">
      <div className="sk-ww-google-reviews" data-embed-id="25349544"></div>
      <script src="https://widgets.sociablekit.com/google-reviews/widget.js" async defer></script>
    </div>
  );
};

export default Reviews;
