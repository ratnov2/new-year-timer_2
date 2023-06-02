import {useBlockOverflow} from '@/hooks/useBlockOverflow'
import style from './LoadingScreen.module.scss'
import Loader from '../loader/Loader'

const LoadingScreen = () => {
	return (
		<div className={style.screen}>
			<Loader />
		</div>
	)
}
export default LoadingScreen
