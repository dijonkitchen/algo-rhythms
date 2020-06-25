const distance = (point1, point2) => {
  return Math.sqrt(
    Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2),
  );
};

const nearestPoints = (basePoint, pointList, numberOfNearestWanted) => {
  const pointDistances = pointList.map((point) => {
    return {
      point,
      distance: distance(basePoint, point),
    };
  });
  pointDistances.sort((prevPoint, nextPoint) =>
    prevPoint.distance - nextPoint.distance
  );
  return pointDistances.slice(0, numberOfNearestWanted);
};

// Tests

const point1 = [0, 0];
const point2 = [0, 1];

console.log(distance(point1, point2)); // 1

const points = [point1, point2, [4, 6], [12, 32]];

console.log(nearestPoints(point1, points, 2));
