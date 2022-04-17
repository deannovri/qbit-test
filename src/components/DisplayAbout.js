import React from 'react'

function DisplayAbout(data) {

	const dataAbout = data.data
	
	return (
		<div className="display-input-card">
			<h3>Data Pribadi</h3>
			<div>{dataAbout.nama}</div>
			<div>{dataAbout.alamat}</div>
			<h3>Data Pendididikan</h3>
			<div>{dataAbout.sd}</div>
			<div>{dataAbout.smp}</div>
			<div>{dataAbout.sma}</div>
			<div>{dataAbout.universitas}</div>
			<h3>Data Organisasai</h3>
			<div>{dataAbout.namaOrganisasi}</div>
			<div>{dataAbout.peran}</div>
			<h3>Pengalaman Kerja</h3>
			<div>{dataAbout.perusahaan}</div>
			<div>{dataAbout.posisi}</div>
		</div>
	)
}

export default DisplayAbout