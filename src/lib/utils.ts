import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReviewText } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setFormattedReviews = (reviews: ReviewText[]) => {
  return reviews?.map(review => {
    // Check if the `text` property is a string
    if (typeof review.text === "string") {
      try {
        // Remove any potential Markdown code block syntax (e.g., ```json``` or ```)
        const cleanedText = review.text as string;
        const trimmedText = cleanedText.replace(/^\s+|\s+$/g, '');

        // Parse the cleaned text into a JSON object
        return JSON.parse(trimmedText) as ReviewText;
      } catch (error) {
        // Log the error and return null if parsing fails
        console.error("Error parsing review text:", error);
        return null;
      }
    } else if (typeof review.text === "object") {
      // If `text` is already an object, return it as is
      return review.text;
    } else {
      // If `text` is neither a string nor an object, return null
      return null;
    }
  }).filter(Boolean);
};// Remove null values from the final array