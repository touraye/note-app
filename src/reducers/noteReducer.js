import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		content: 'the app state is in redux store',
		important: true,
		id: 1,
	},
	{
		content: 'state changes are made with actions',
		important: false,
		id: 2,
	},
	{
		content: 'using ThunkAPI in redux store',
		important: false,
		id: 3,
	},
]

const getId = () => Number((Math.random() * 1000).toFixed(2))

const noteSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		createNote( state, action ) {
			const content = action.payload
			state.push( {
				content,
				important: false,
				id: getId(),
			})
		},
		toggleImportanceOf(state, action) {
			const id = action.payload
			const noteToChange = state.find((n) => n.id === id)
			const changedNote = {
				...noteToChange,
				important: !noteToChange.important,
			}
			return state.map((note) => (note.id !== id ? note : changedNote))
		},
		appendNote( state, action ) {
			state.push(action.payload)
		}
	},
})

export const { createNote,toggleImportanceOf, appendNote } = noteSlice.actions

export default noteSlice.reducer
