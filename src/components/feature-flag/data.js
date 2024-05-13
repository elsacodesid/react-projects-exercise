const dummyApiResponse = {
  showStarRating: true,
  showLightDarkMode: true,
  showTicTacToe: false,
};

function featureFlagsDataServiceCall() {3
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occurred, please try again");
  });
}

export default featureFlagsDataServiceCall;
