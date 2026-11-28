import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import "./review.css";

export default function ReviewPanel({
  menu,
  reviews,
  onAddReview,
  onClose
}) {
  const menuReviews = reviews.filter(
    review => review.dishId === menu.dishId
  );

  let total = 0;

  for (let i = 0; i < menuReviews.length; i++) {
    total = total + menuReviews[i].rating;
  }

  let average = "평가 없음";

  if (menuReviews.length > 0) {
    average = total / menuReviews.length;
  }

  const handleAddReview = input => {
    onAddReview({
      dishId: menu.dishId,
      rating: input.rating,
      comment: input.comment
    });
  };

  return (
    <section className="review-panel">
      <button type="button" onClick={onClose}>
        닫기
      </button>

      <h2>{menu.name}</h2>

      <p>
        {menu.cafeteria}
        {menu.corner ? " / " + menu.corner : ""}
      </p>

      <p>평균 별점: {average}</p>
      <p>리뷰 수: {menuReviews.length}개</p>

      <h3>작성된 리뷰</h3>
      <ReviewList reviews={menuReviews} />

      <h3>리뷰 작성</h3>
      <ReviewForm onAddReview={handleAddReview} />
    </section>
  );
}