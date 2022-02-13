import { useRef } from 'react';
import Card from '../ui/Card';
import './NewMeetupForm.css';

function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);    


    }


    return (
    <Card>
        <form className='form' onSubmit={ submitHandler }>
            <div className='control'>
                <label htmlFor='title'>Title</label>
                <input type='text' required id='title' ref={ titleInputRef }/>
            </div>

            <div className='control'>
                <label htmlFor='image'>Image</label>
                <input type='url' id='image' ref={ imageInputRef }/>
            </div>

            <div className='control'>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' required  ref={ addressInputRef }/>
            </div>

            <div className='control'>
                <label htmlFor='description'>Description</label>
                <textarea type='text' id='description' rows='5' required ref={ descriptionInputRef }/>
            </div>

            <div className='actions'>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    );
}

export default NewMeetupForm;