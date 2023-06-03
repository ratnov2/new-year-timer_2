import cn from 'classnames'
import { CSSProperties } from 'react'

import useTimerDate from '@/hooks/useTimerDate'

import style from './Timer.module.scss'

const Timer = () => {
	const { innerDate, styleStrokeDashOffset, styleTransform } = useTimerDate()

	return (
		<div className={style.time}>
			<div className={style.blurred}>
				<div
					className={style.circle}
					style={{ '--clr': '#fff' } as CSSProperties}
				>
					<div
						className={cn(style.dots, style.day_dot)}
						style={{ transform: styleTransform?.dTransform }}
					>
						{' '}
					</div>
					<svg>
						<circle cx={70} cy={70} r={70}></circle>
						<circle
							cx={70}
							cy={70}
							r={70}
							className={style.dd}
							style={{
								strokeDashoffset: styleStrokeDashOffset?.d
							}}
						></circle>
					</svg>
					<div className={style.days}>
						<span>{innerDate?.dd}</span>
						<p>Days</p>
					</div>
				</div>
			</div>
			<div className={style.blurred}>
				<div
					className={style.circle}
					style={{ '--clr': '#355353' } as CSSProperties}
				>
					<div
						className={cn(style.dots, style.hour_dot)}
						style={{ transform: styleTransform?.hTransform }}
					></div>
					<svg>
						<circle cx={70} cy={70} r={70}></circle>
						<circle
							cx={70}
							cy={70}
							r={70}
							className={style.hh}
							style={{
								strokeDashoffset: styleStrokeDashOffset?.h
							}}
						></circle>
					</svg>
					<div className={style.hours}>
						<span>{innerDate?.hh}</span>
						<p>Hours</p>
					</div>
				</div>
			</div>
			<div className={style.blurred}>
				<div
					className={style.circle}
					style={{ '--clr': '#894784' } as CSSProperties}
				>
					<div
						className={cn(style.dots, style.minute_dot)}
						style={{ transform: styleTransform?.mTransform }}
					></div>
					<svg>
						<circle cx={70} cy={70} r={70}></circle>
						<circle
							cx={70}
							cy={70}
							r={70}
							className={style.mm}
							style={{
								strokeDashoffset: styleStrokeDashOffset?.m
							}}
						></circle>
					</svg>
					<div className={style.minutes}>
						<span>{innerDate?.mm}</span>
						<p>Minutes</p>
					</div>
				</div>
			</div>
			<div className={style.blurred}>
				<div
					className={style.circle}
					style={{ '--clr': '#04fc43' } as CSSProperties}
				>
					<div
						className={cn(style.dots, style.sec_dot)}
						style={{ transform: styleTransform?.sTransform }}
					></div>
					<svg>
						<circle cx={70} cy={70} r={70}></circle>
						<circle
							cx={70}
							cy={70}
							r={70}
							className={style.ss}
							style={{
								strokeDashoffset: styleStrokeDashOffset?.s
							}}
						></circle>
					</svg>
					<div className={style.seconds}>
						<span>{innerDate?.ss}</span>
						<p>Seconds</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Timer
