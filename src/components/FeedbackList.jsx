import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'




function FeedbackList({feedbackList, handleDelete}) {
    if(feedbackList.length === 0) {
        return <p>No Feedback Yet!</p>
    }
    return (
        <div className="feedback-list">
            {feedbackList.map(feedback => <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />)}
        </div>
    )
}


FeedbackList.propTypes = {
    feedbackList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}




export default FeedbackList