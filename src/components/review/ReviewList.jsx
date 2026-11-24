export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p>아직 작성된 리뷰가 없습니다.</p>;
  }

  return (
    <ul className="review-list">
      {reviews.map(review => (
        <li className="review-item" key={review.id}>
          <p>별점: {review.rating} / 5</p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}