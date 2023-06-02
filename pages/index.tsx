import Dashboard from '@/screens/dashboard/Dashboard'
import Loader from '@/ui/loader/Loader'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export default function Home() {
	return <Dashboard />
}

// const Dashboard = dynamic(() => import('@/screens/dashboard/Dashboard'), {
// 	ssr: false
// })
