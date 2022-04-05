import NewNote from './Note/NewNote'
import Note from './Note/Notes'
import VisibilityFilter from './components/VisibilityFilter'

import Footer from './components/Footer'

const App = () => {   


	
  return (
		<div className='note__wrapper'>
			<h3 className='note__heading'>note redux app</h3>
			<NewNote />
			<p className='filter'>Filter Notes: </p>
			<VisibilityFilter />
			<p className='note__info'>Click on Note to toggle the important</p>
			<Note />
			<Footer />
		</div>
	)
}

export default App