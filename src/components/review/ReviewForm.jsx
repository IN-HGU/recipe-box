import { useRef, useState } from "react";

export default function ReviewForm({ onAddReview }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const commentRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    let hasText = false; // 리뷰 내용에 공백이 아닌 문자가 있는지 확인

    for (let i = 0; i < comment.length; i++) {
      if (comment[i] !== " " && comment[i] !== "\n" && comment[i] !== "\r" && comment[i] !== "\t") {
        hasText = true;
      }
    }

    if (!hasText) {
      setError("리뷰 내용을 입력해주세요.");
      commentRef.current.focus();
      return;
    }

    if (rating !== 1 && rating !== 2 && rating !== 3 && rating !== 4 && rating !== 5) {
      setError("별점은 1~5점으로 선택해주세요.");
      return;
    }

    onAddReview({
      rating: rating,
      comment: comment
    });

    setRating(5);
    setComment("");
    setError("");
    commentRef.current.focus();
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label>
        별점
        <select value={rating} onChange={event => setRating(Number(event.target.value))}>
          <option value={1}>1점</option>
          <option value={2}>2점</option>
          <option value={3}>3점</option>
          <option value={4}>4점</option>
          <option value={5}>5점</option>
        </select>
      </label>

      <label>
        리뷰 내용
        <textarea
          ref={commentRef}
          rows={4}
          value={comment}
          onChange={event => setComment(event.target.value)}
          placeholder="메뉴에 대한 의견을 입력하세요."
        />
      </label>

      <p className="review-error">{error}</p>

      <button type="submit">리뷰 등록</button>
    </form>
  );
}