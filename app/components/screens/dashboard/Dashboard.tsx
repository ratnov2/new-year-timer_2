import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'
import Loader from '@/ui/loader/Loader'
import useLoading from '@/hooks/useLoading'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/assets/img/big.jpg'
const Dashboard: FC = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		// const timer = setInterval(() => {
		// 	setDate(new Date())
		// }, 1000)
		// return () => clearInterval(timer)
	}, [])
	useLoading()

	return (
		<Layout title='Dashboard'>
			<div className='h-[100vh] w-[100vw] relative'>
				<Image alt='bg-img' src={img} className='absolute h-[100vh] w-[100vw]' priority={true}/>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
					<span className='text-[5rem] text-white'>
						{date.getHours()}&nbsp;:&nbsp;
					</span>
					<span className='text-[5rem] text-white'>
						{date.getMinutes()}&nbsp;:&nbsp;
					</span>
					<span className='text-[5rem] text-white'>
						{date.getSeconds()}
					</span>
					
				</div>
			</div>
			<Link href='/loader'>wqelfnewjqnfkje</Link>
		</Layout>
	)
}

export default Dashboard
