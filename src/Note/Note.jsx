const Note = ({ note, handleClick }) => {
	return (
		<li onClick={() => handleClick(note.id)} className='note__item'>
			{note.content} <strong>{note.important ? 'important' : ''}</strong>
		</li>
	)
}

export default Note