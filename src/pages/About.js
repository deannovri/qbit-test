import React, { useState, useEffect } from 'react'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import InputAbout from '../components/InputAbout'
import DisplayAbout from '../components/DisplayAbout'

function About() {

	const [inputAbout, setInputAbout] = useState(
		JSON.parse(localStorage.getItem("about")) || {
			nama: "",
			alamat: "",
			sd: "",
			smp: "",
			sma: "",
			universitas: "",
			namaOrganisasi: "",
			peran: "",
			perusahaan: "",
			posisi: ""
		}
	)

	const [showAboutForm, setAboutForm] = useState(true)

	useEffect(() => {
    localStorage.setItem("about", JSON.stringify(inputAbout))
  	}, [inputAbout])

	function handleChangeInputAbout(e) {
		setInputAbout({
			...inputAbout,
			[e.target.name] : e.target.value
		})
	}

	function handleSubmitInputAbout (e) {
		e.preventDefault()
		setInputAbout(inputAbout)
		setAboutForm(true)
	}

	function handleShowAboutForm(){
		setAboutForm(false)
	}

	return (
		<>
		<HeaderLoggedIn/>
		<div className="about-container">
			<DisplayAbout data={inputAbout}/>
			{
				showAboutForm ?
				<button onClick={() => {handleShowAboutForm()}}>Add data</button>
				:
				null 
			}
			{
				showAboutForm ?
				null
				:
				<InputAbout handleChange={handleChangeInputAbout} inputAbout={inputAbout} handleSubmit={handleSubmitInputAbout}/>
			}
		</div>
		</>
	)
}

export default About