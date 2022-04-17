import React from 'react'

function InputAbout({ handleChange, inputAbout, handleSubmit }) {
	return (
			<form className="input-about-form" onSubmit={handleSubmit}>
				<h3>Data Pribadi</h3>
				<label htmlFor="nama">Nama</label>
				<input type="text" onChange={handleChange} value={inputAbout.nama} name="nama"/>
				<label htmlFor="alamat">Alamat</label>
				<input type="text" onChange={handleChange} value={inputAbout.alamat} name="alamat"/>
				<h3>Data Pendidikan</h3>
				<label htmlFor="nama">SD</label>
				<input type="text" onChange={handleChange} value={inputAbout.sd} name="sd"/>
				<label htmlFor="alamat">SMP</label>
				<input type="text" onChange={handleChange} value={inputAbout.smp} name="smp"/>
				<label htmlFor="alamat">SMA</label>
				<input type="text" onChange={handleChange} value={inputAbout.sma} name="sma"/>
				<label htmlFor="alamat">Universitas</label>
				<input type="text" onChange={handleChange} value={inputAbout.universitas} name="universitas"/>
				<h3>Data Organisasi</h3>
				<label htmlFor="nama">Nama Organisasi</label>
				<input type="text" onChange={handleChange} value={inputAbout.namaOrganisasi} name="namaOrganisasi"/>
				<label htmlFor="alamat">Peran</label>
				<input type="text" onChange={handleChange} value={inputAbout.peran} name="peran"/>
				<h3>Pengalaman kerja</h3>
				<label htmlFor="nama">Perusahaan</label>
				<input type="text" onChange={handleChange} value={inputAbout.perusahaan} name="perusahaan"/>
				<label htmlFor="alamat">Posisi</label>
				<input type="text" onChange={handleChange} value={inputAbout.posisi} name="posisi"/>
				<button>Submit</button>
			</form>
	)
}

export default InputAbout