import Loader from '@/ui/loader/Loader'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export default function Home() {
	return <Suspense fallback={<Loader />} ><Dashboard /></Suspense>
}

const Dashboard = dynamic(() => import('@/screens/dashboard/Dashboard'), {
	ssr: false
})
