import { useEffect, useState } from 'react'

const useTimerDate = () => {
	const [date, setDate] = useState<Date | null>(null)

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	if (date === null) return {}

	const endDate = new Date(`01/01/${date.getFullYear() + 1} 00:00:00`)
	const distance = endDate.getTime() - date.getTime()
	////InnerDate
	const dd = Math.floor(distance / (1000 * 60 * 60 * 24))
	const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	const ss = Math.floor((distance % (1000 * 60)) / 1000)
	///styleDash
	const d = 440 - (440 * dd) / 365
	const h = 440 - (440 * hh) / 24
	const m = 440 - (440 * mm) / 60
	const s = 440 - (440 * ss) / 60
	////style.transform
	const dTransform = `rotateZ(${dd * 0.986}deg)`
	const hTransform = `rotateZ(${hh * 15}deg)`
	const mTransform = `rotateZ(${mm * 6}deg)`
	const sTransform = `rotateZ(${ss * 6}deg)`
	////
	const styleStrokeDashOffset = { d, h, m, s }
	const innerDate = { dd, hh, mm, ss }
	const styleTransform = { dTransform, hTransform, mTransform, sTransform }
	return { styleStrokeDashOffset, innerDate,styleTransform }
}
export default useTimerDate
