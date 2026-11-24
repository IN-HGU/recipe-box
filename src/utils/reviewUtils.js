export function getAverageRating(reviews) {
  if (reviews.length === 0) {
    return "평가 없음";
  }

  let total = 0;

  for (let i = 0; i < reviews.length; i++) {
    total = total + reviews[i].rating;
  }

  return total / reviews.length;
}