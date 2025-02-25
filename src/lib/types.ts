export interface ReviewDetailedRating {
  Food: number;
  Service: string;
  Atmosphere: string;
}

export interface ReviewContext {
  Service: string;
  "Type of food": string;
  "Price per customer": string;
  Parking: string;
}

export interface ReviewText {
  name: string;
  date: string;
  text: string;
  stars: number;
  reviewDetailedRating: ReviewDetailedRating;
  reviewContext: ReviewContext;
  reasons: string[];
  improvements: string[];
}