import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"


const NewNote = (props) => {
    const dispatch = useDispatch()

		const addNote = async (event) => {
			event.preventDefault()
			const content = event.target.note.value
			event.target.note.value = ''					
			dispatch(createNote(content))
		}

		return (
			<form onSubmit={addNote} className='note__form'>
				<input name='note' placeholder='Enter some note...' />
				<button type='submit'>add</button>
			</form>
		)
}

export default NewNote