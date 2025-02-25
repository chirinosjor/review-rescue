import { useState } from 'react';
import FetchErrorMessage from './components/FetchErrorMessage';
import ReviewsSection from './components/ReviewsSection';
import HeroSection from './components/HeroSection';
import { setFormattedReviews } from './lib/utils';
import { useReviews } from './lib/hooks/useReviews';
import { ReviewText } from './lib/types';
import LoadingSection from './components/SpinnerSection';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [reviews, setReviews] = useState<ReviewText[]>([]);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const { handleAnalyze } = useReviews({ searchValue, setReviews, setIsAnalyzing, setShowReviews, setFetchError });

  const formattedReviews = setFormattedReviews(reviews);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection searchValue={searchValue} setSearchValue={setSearchValue} isAnalyzing={isAnalyzing} handleAnalyze={handleAnalyze} />
      {isAnalyzing && (
        <LoadingSection />
      )}
      {fetchError &&
        <FetchErrorMessage />
      }
      {showReviews && !isAnalyzing && formattedReviews !== null && (
        <ReviewsSection formattedReviews={formattedReviews} />
      )}
    </div>
  );
}

export default App;