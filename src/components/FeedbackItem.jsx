import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


function FeedbackItem({feedback, handleDelete}) {


    return (
    <Card className="card" reverse={false}>
        <div className="num-display">{feedback.rating}</div>
        <button className="close"><FaTimes color="purple"onClick={() => handleDelete(feedback.id)} /></button>
        <div className="text-display">{feedback.text}</div>
    </Card>
    )
}



FeedbackItem.propTypes = {
    feedback: PropTypes.object.isRequired
}

export default FeedbackItem

