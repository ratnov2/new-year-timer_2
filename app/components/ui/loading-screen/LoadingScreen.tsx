import {useBlockOverflow} from '@/hooks/useBlockOverflow'
import style from './LoadingScreen.module.scss'
import Loader from '../loader/Loader'

const LoadingScreen = () => {
	return (
		<div className={style.screen}>
			{/* <div className={style.balls}>
				<div className={style.ball_one}></div>
        <div className={style.ball_two}></div>
        <div className={style.ball_three}></div>
			</div> */}
			<Loader />
		</div>
	)
}
export default LoadingScreen
