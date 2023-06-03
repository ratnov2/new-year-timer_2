import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import img from '@/assets/img/big.jpg'

import Timer from '../timer/Timer'

const Main: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div className='h-[100vh] w-[100vw] relative'>
				<Image
					alt='bg-img'
					src={img}
					className='absolute h-[100vh] w-[100vw]'
					priority={true}
				/>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
					<Timer />
				</div>
			</div>
		</Layout>
	)
}

export default Main
