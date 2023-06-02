import Image from 'next/image'
import Link from 'next/link'

import Loader from '@/ui/loader/Loader'

import img1 from '@/assets/img/big2.jpg'
import img2 from '@/assets/img/big3.jpg'
// import video1 from '@/assets/img/video.mp4'

import style from './loader.module.scss'

const loader = () => {
	return (
		<div className='w-[100vw] h-[100vh] bg-purple'>
			wefewffwefew
			<Link rel='preload' href='/'>
				1212211212wfewe21f323f
			</Link>
			{/* <video>
				<source src={video1} type='video/mp4' />
				Sorry, your browser doesn't support videos.
			</video> */}
			<Image
				priority
				alt='bigImg-1'
				src={img1}
				className='h-[100vh] w-[100vw]'
			/>
			<Image
				priority
				alt='bigImg-2'
				src={img2}
				className='h-[100vh] w-[100vw]'
			/>
		</div>
	)
}
export default loader
