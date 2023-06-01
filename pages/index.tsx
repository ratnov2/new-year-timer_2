import dynamic from 'next/dynamic'

export default function Home() {
	return <Dashboard />
}

const Dashboard = dynamic(() => import('@/screens/dashboard/Dashboard'), {
	ssr: false
})
