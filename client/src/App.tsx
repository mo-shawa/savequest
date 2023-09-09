import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [msg, setMsg] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/api/')
			const data = await response.json()
			console.log(data)
			setMsg(data.msg)
		}

		fetchData()
	}, [])

	return (
		<div className="w-full ">
			<div>
				<div>
					<div>
						<div
							className="nes-container is-rounded"
							style={{ background: '#00000080' }}>
							<p>{msg}</p>
							<h1>WELCOME TO SAVEQUEST</h1>
							<h3>It's Save to Win!</h3>
						</div>
					</div>
					<div>
						<section className="message -left">
							<div className="nes-balloon">
								<p>Click that dollar to get started!</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
