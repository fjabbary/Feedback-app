import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import {v4 as uuidv4} from 'uuid';

function FeedbackForm({addFeedback}) {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")


    const handleTextChange = (e) => {
        const dynamicText = e.target.value;
        if(dynamicText === '') {
            setBtnDisabled(true)
            setMessage(null)

        } else if(dynamicText !== '' && dynamicText.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Review has to be at least 10 characters')

        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)

    }

    const handleSelect = (rating) => {
        setRating(rating)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            id: uuidv4(),
            rating,
            text
        }

       addFeedback(newFeedback);
       setText("");
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={handleSelect}/>
                <div className="input-group">
                <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm