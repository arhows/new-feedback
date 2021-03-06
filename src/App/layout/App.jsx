import FeedbackData from '../../data/FeedbackData';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import Header from '../../components/Header';
import FeedbackList from '../../components/FeedbackList';
import FeedbackStats from '../../components/FeedbackStats';
import FeedbackForm from '../../components/FeedbackForm';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const res = feedback.filter((e) => e.id !== id);
      setFeedback(res);
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
