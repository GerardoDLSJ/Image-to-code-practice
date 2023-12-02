'use client'

import { useState } from 'react'
import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

export const DragAndDrop = ({ transformImageToCode }: { transformImageToCode: (file: File) => void }) => {
	const updateFiles = (files: ExtFile[]) => {
		const file = files[0].file
		if (file != null) transformImageToCode(file)
	}

	return (
		<Dropzone
			maxFiles={1}
			header={false}
			footer={false}
			label="Arrastra aquí tu imagen"
			accept="image/*"
			onChange={updateFiles}
		>
			{/* {files.map((file, index) => {
				return <FileMosaic key={index} {...file} preview />
			})} */}
		</Dropzone>
	)
}
