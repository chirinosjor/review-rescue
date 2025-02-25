import { ReviewText } from "../types";

interface useReviewsProps {
  searchValue: string;
  setReviews: (value: ReviewText[]) => void;
  setIsAnalyzing: (value: boolean) => void;
  setShowReviews: (value: boolean) => void;
  setFetchError: (value: boolean) => void;
}

export function useReviews({ searchValue, setReviews, setIsAnalyzing, setShowReviews, setFetchError }: useReviewsProps) {
  const WEBHOOK_URL = "https://primary-production-7a540.up.railway.app/webhook-test/cded8bc0-b628-441a-8165-d98043f92b96";

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setFetchError(false);
    try {
      const url = `${WEBHOOK_URL}?place_url=${searchValue}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setReviews(data);
      setIsAnalyzing(false);
      setShowReviews(true);
    } catch (error) {
      console.error(error);
      setFetchError(true);
      setIsAnalyzing(false);
    }
  };

  return { handleAnalyze };
}