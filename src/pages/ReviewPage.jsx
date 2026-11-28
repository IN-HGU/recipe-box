import ReviewList from "../components/review/ReviewList";
import ReviewForm from "../components/review/ReviewForm";
import { getAverageRating } from "../utils/reviewUtils";
import "../components/review/review.css";

export default function ReviewPage({
  menu,
  reviews,
  onAddReview,
  onBack
}) {
  if (!menu) {
    return <p>메뉴를 선택해주세요.</p>;
  }

  const menuReviews = reviews.filter(
    review => review.dishId === menu.dishId
  );

  const average = getAverageRating(menuReviews);

  const handleAddReview = input => {
    onAddReview({
      dishId: menu.dishId,
      rating: input.rating,
      comment: input.comment
    });
  };

  return (
    <section className="review-page">
      <button type="button" onClick={onBack}>
        뒤로가기
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
      <ReviewForm key={menu.dishId} onAddReview={handleAddReview} />
    </section>
  );
}