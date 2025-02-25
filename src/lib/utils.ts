import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReviewText } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setFormattedReviews = (reviews: ReviewText[]) => {
  if (!reviews || reviews.length === 0) {
    return [];
  }

  return reviews
    .map(review => {
      if (typeof review.text === "string") {
        try {
          const cleanedText = review.text.replace(/^```json|^```|```$/g, "").trim();

          return JSON.parse(cleanedText);
        } catch (error) {
          console.error("Error parsing review text:", error);
          return null;
        }
      } else if (typeof review.text === "object") {
        return review.text;
      }
      return null;
    })
    .filter(Boolean);
};

