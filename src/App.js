import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

import feedbackData from './data/feedbackData'

function App() {
    const [feedbacks, setFeedbacks] = useState(feedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedbacks(feedbacks.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        console.log(newFeedback);
        setFeedbacks([newFeedback, ...feedbacks])
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList feedbackList={feedbacks} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App